"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModel = exports.ProductSchema = void 0;
const mongoose_1 = require("mongoose");
exports.ProductSchema = new mongoose_1.Schema({
    id: { type: Number, unique: true },
    name: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    stock: { type: Number, required: false },
    description: { type: String, required: false },
}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true
});
const CounterSchema = new mongoose_1.Schema({
    _id: { type: String, required: true },
    seq: { type: Number, default: 0 }
});
const CounterModel = (0, mongoose_1.model)('counter', CounterSchema);
exports.ProductSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (this.isNew) {
            const counter = yield CounterModel.findByIdAndUpdate({ _id: 'productid' }, { $inc: { seq: 1 } }, { new: true, upsert: true });
            this.id = counter.seq;
        }
        next();
    });
});
const initializeCounter = () => __awaiter(void 0, void 0, void 0, function* () {
    const counter = yield CounterModel.findById('productid');
    if (!counter) {
        yield new CounterModel({ _id: 'productid', seq: 0 }).save();
    }
});
initializeCounter();
exports.ProductModel = (0, mongoose_1.model)('product', exports.ProductSchema);
//# sourceMappingURL=product.model.js.map