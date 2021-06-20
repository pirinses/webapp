import { __decorate, __metadata } from "tslib";
import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "../services/store.services";
var LoginPage = /** @class */ (function () {
    function LoginPage(store, router) {
        this.store = store;
        this.router = router;
        this.creds = {
            username: "",
            password: ""
        };
        this.errorMessage = "";
    }
    LoginPage.prototype.onLogin = function () {
        var _this = this;
        this.store.login(this.creds)
            .subscribe(function () {
            // Success
            if (_this.store.order.items.length > 0) {
                _this.router.navigate(["checkout"]);
            }
            else {
                _this.router.navigate([""]);
            }
        }, function (error) {
            console.log(error);
            _this.errorMessage = "Failed to login";
        });
    };
    LoginPage = __decorate([
        Component({
            selector: "login-page",
            templateUrl: "loginPage.component.html"
        }),
        __metadata("design:paramtypes", [Store, Router])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=loginPage.component.js.map