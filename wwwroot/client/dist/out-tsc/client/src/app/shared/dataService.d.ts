import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Product } from "./Product";
import { Order } from "./Order";
export declare class DataService {
    private http;
    constructor(http: HttpClient);
    private token;
    private tokenExpiration;
    order: Order;
    products: Product[];
    loadProducts(): Observable<boolean>;
    get loginRequired(): boolean;
    login(creds: any): Observable<boolean>;
    checkout(): Observable<boolean>;
    AddToOrder(product: Product): void;
}
