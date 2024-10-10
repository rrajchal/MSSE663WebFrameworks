import { Product } from "./Product";

export class CartItem {
    quantity: number;
    price: number;

    constructor(public product: Product) {
        this.quantity = 1;
        this.price = product.price;
    }
}