import { Router } from "@angular/router";
import { Store } from "../services/store.services";
import { LoginRequest } from "../shared/LoginResults";
export declare class LoginPage {
    private store;
    private router;
    constructor(store: Store, router: Router);
    creds: LoginRequest;
    errorMessage: string;
    onLogin(): void;
}
