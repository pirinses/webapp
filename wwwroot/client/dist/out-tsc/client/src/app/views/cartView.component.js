import { __decorate, __metadata } from "tslib";
import { Component } from "@angular/core";
import { Store } from "../services/store.services";
var CartView = /** @class */ (function () {
    function CartView(store) {
        this.store = store;
    }
    CartView = __decorate([
        Component({
            selector: "cart",
            templateUrl: "cartView.component.html",
            styleUrls: ["cartview.component.css"]
        }),
        __metadata("design:paramtypes", [Store])
    ], CartView);
    return CartView;
}());
export { CartView };
//# sourceMappingURL=cartView.component.js.map