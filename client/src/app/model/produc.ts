export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    pictureUrl: string;
    type?: string;
    author: string;
    quantityInStock?: number;
    rating?: number;
}