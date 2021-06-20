export declare class Order {
    orderId: number;
    orderDate: Date;
    orderNumber: string;
    items: OrderItem[];
    get subTotal(): number;
}
export declare class OrderItem {
    id: number;
    quantity: number;
    unitPrice: number;
    productId: number;
    productCategory: string;
    productSize: string;
    productPrice: number;
    productTitle: string;
    productArtist: string;
    orderOrderDate: Date;
    productArtId: string;
}
