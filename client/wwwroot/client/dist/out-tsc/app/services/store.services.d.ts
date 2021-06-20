import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "../shared/Product";
import { Order } from "../shared/Order";
import { LoginRequest } from "../shared/LoginResults";
export declare class Store {
    private http;
    constructor(http: HttpClient);
    products: Product[];
    order: Order;
    token: string;
    expiration: Date;
    loadProducts(): Observable<void>;
    get loginRequired(): boolean;
    login(creds: LoginRequest): Observable<void>;
    checkout(): Observable<void>;
    addToOrder(product: Product): void;
}
