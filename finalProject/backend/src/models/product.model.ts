import { model, Schema } from "mongoose";

export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    image: string;
    stock: number;
    description: string;
}

export const ProductSchema = new Schema<Product>({
    id: { type: Number, unique: true },
    name: {type: String, required: true},
    category: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: String, required: true},
    stock: {type: Number, required: false},
    description: {type: String, required: false},
},{
    toJSON:{
        virtuals: true
    },
    toObject:{
        virtuals: true
    },
    timestamps:true
}
);

const CounterSchema = new Schema({
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 }
});

const CounterModel = model('counter', CounterSchema);

ProductSchema.pre('save', async function (next) {
    if (this.isNew) {
        const counter = await CounterModel.findByIdAndUpdate(
            { _id: 'productid' },
            { $inc: { seq: 1 } },
            { new: true, upsert: true }
        );
        this.id = counter.seq;
    }
    next();
});

const initializeCounter = async () => {
    const counter = await CounterModel.findById('productid');
    if (!counter) {
        await new CounterModel({ _id: 'productid', seq: 0 }).save();
    }
};

initializeCounter();

export const ProductModel = model<Product>('product', ProductSchema);