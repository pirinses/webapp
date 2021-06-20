import { Store } from "../services/store.services";
import { Router } from "@angular/router";
export declare class CheckoutPage {
    store: Store;
    private router;
    errorMessage: string;
    constructor(store: Store, router: Router);
    onCheckout(): void;
}
