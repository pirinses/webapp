import { __decorate, __metadata } from "tslib";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Store } from "./store.services";
var AuthActivator = /** @class */ (function () {
    function AuthActivator(store, router) {
        this.store = store;
        this.router = router;
    }
    AuthActivator.prototype.canActivate = function (route, state) {
        if (this.store.loginRequired) {
            this.router.navigate(["login"]);
            return false;
        }
        else {
            return true;
        }
    };
    AuthActivator = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [Store, Router])
    ], AuthActivator);
    return AuthActivator;
}());
export { AuthActivator };
//# sourceMappingURL=authActivator.service.js.map