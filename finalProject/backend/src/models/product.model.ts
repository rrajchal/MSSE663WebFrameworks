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

export const ProductModel = model<Product>('product', ProductSchema);