import { CartItem } from "./CartItem";

export class Order {
    id!: number;
    items!: CartItem[];
    totalPrice!: number;
    name!: string;
    address!: string;
    paymentId!: string;
    createdDate!: string;
    status!: string;
}