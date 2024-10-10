export class Product {
    id!: number;
    name!: string;
    category!: string;
    price!: number;
    image?: string;
    stock?: number; // Optional for software services
    description?: string; // Optional for hardware
}

