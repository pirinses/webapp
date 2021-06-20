import { RouterModule } from "@angular/router";
import { CheckoutPage } from "../pages/checkout.component";
import { LoginPage } from "../pages/loginPage.component";
import { ShopPage } from "../pages/shopPage.component";
import { AuthActivator } from "../services/authActivator.service";
var routes = [
    { path: "", component: ShopPage },
    { path: "checkout", component: CheckoutPage, canActivate: [AuthActivator] },
    { path: "login", component: LoginPage },
    { path: "**", redirectTo: "/" }
];
var router = RouterModule.forRoot(routes, { useHash: false });
export default router;
//# sourceMappingURL=index.js.map