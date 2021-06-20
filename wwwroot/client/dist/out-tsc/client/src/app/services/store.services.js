import { __decorate, __metadata } from "tslib";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { Order } from "../shared/Order";
import { OrderItem } from "../shared/Order";
var Store = /** @class */ (function () {
    function Store(http) {
        this.http = http;
        this.products = [];
        this.order = new Order();
        this.token = "";
        this.expiration = new Date();
    }
    Store.prototype.loadProducts = function () {
        var _this = this;
        //pipe - before running code, it does specific function
        //map - turns json to objects
        return this.http.get("/api/products")
            .pipe(map(function (data) {
            _this.products = data;
            return;
        }));
    };
    Object.defineProperty(Store.prototype, "loginRequired", {
        get: function () {
            return this.token.length === 0 || this.expiration < new Date();
        },
        enumerable: false,
        configurable: true
    });
    Store.prototype.login = function (creds) {
        var _this = this;
        return this.http.post("/account/createtoken", creds)
            .pipe(map(function (data) {
            _this.token = data.token;
            _this.expiration = data.expiration;
        }));
    };
    Store.prototype.checkout = function () {
        var _this = this;
        var headers = new HttpHeaders().set("Authorization", "Bearer " + this.token);
        return this.http.post("/api/orders", this.order, {
            headers: headers
        })
            .pipe(map(function () {
            _this.order = new Order();
        }));
    };
    Store.prototype.addToOrder = function (product) {
        var item = new OrderItem();
        item = this.order.items.find(function (o) { return o.productId === product.id; });
        if (item) {
            item.quantity++;
        }
        else {
            item = new OrderItem();
            item.productId = product.id;
            item.productTitle = product.title;
            item.productArtId = product.artId;
            item.productArtist = product.artist;
            item.productCategory = product.category;
            item.productSize = product.size;
            item.unitPrice = product.price;
            item.quantity = 1;
            this.order.items.push(item);
        }
    };
    Store = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], Store);
    return Store;
}());
export { Store };
//# sourceMappingURL=store.services.js.map