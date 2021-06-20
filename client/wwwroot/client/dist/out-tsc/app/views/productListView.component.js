import { __decorate, __metadata } from "tslib";
import { Component } from "@angular/core";
import { Store } from "../services/store.services";
var ProductListView = /** @class */ (function () {
    function ProductListView(store) {
        this.store = store;
    }
    ProductListView.prototype.ngOnInit = function () {
        this.store.loadProducts()
            .subscribe(); //Kicks off the operation
    };
    ProductListView = __decorate([
        Component({
            selector: "product-list",
            templateUrl: "productListView.component.html",
            styleUrls: ["productListView.component.css"]
        }),
        __metadata("design:paramtypes", [Store])
    ], ProductListView);
    return ProductListView;
}());
export default ProductListView;
//# sourceMappingURL=productListView.component.js.map