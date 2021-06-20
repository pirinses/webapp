import { __decorate, __metadata } from "tslib";
import { Component } from "@angular/core";
import { Store } from "../services/store.services";
import { Router } from "@angular/router";
var CheckoutPage = /** @class */ (function () {
    function CheckoutPage(store, router) {
        this.store = store;
        this.router = router;
        this.errorMessage = "";
    }
    CheckoutPage.prototype.onCheckout = function () {
        var _this = this;
        this.errorMessage = "";
        this.store.checkout()
            .subscribe(function () {
            _this.router.navigate(["/"]);
        }, function (err) {
            _this.errorMessage = "Failed to checkout: " + err;
        });
    };
    CheckoutPage = __decorate([
        Component({
            selector: "checkout",
            templateUrl: "checkout.component.html",
            styleUrls: ['checkout.component.css']
        }),
        __metadata("design:paramtypes", [Store, Router])
    ], CheckoutPage);
    return CheckoutPage;
}());
export { CheckoutPage };
//# sourceMappingURL=checkout.component.js.map