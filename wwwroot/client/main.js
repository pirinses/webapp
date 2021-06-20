(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-12\">\r\n        <h1>\r\n            {{title}}\r\n        </h1>\r\n        <router-outlet></router-outlet>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Daily Techoffee';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'the-shop',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_store_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/store.services */ "./src/app/services/store.services.ts");
/* harmony import */ var _views_productListView_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/productListView.component */ "./src/app/views/productListView.component.ts");
/* harmony import */ var _views_cartView_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./views/cartView.component */ "./src/app/views/cartView.component.ts");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./router */ "./src/app/router/index.ts");
/* harmony import */ var _pages_shopPage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/shopPage.component */ "./src/app/pages/shopPage.component.ts");
/* harmony import */ var _pages_checkout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/checkout.component */ "./src/app/pages/checkout.component.ts");
/* harmony import */ var _shared_dataService__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/dataService */ "./src/app/shared/dataService.ts");
/* harmony import */ var _pages_loginPage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/loginPage.component */ "./src/app/pages/loginPage.component.ts");
/* harmony import */ var _services_authActivator_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/authActivator.service */ "./src/app/services/authActivator.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _views_productListView_component__WEBPACK_IMPORTED_MODULE_6__["default"],
                _views_cartView_component__WEBPACK_IMPORTED_MODULE_7__["CartView"],
                _pages_shopPage_component__WEBPACK_IMPORTED_MODULE_9__["ShopPage"],
                _pages_checkout_component__WEBPACK_IMPORTED_MODULE_10__["CheckoutPage"],
                _pages_loginPage_component__WEBPACK_IMPORTED_MODULE_12__["LoginPage"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _router__WEBPACK_IMPORTED_MODULE_8__["default"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]
            ],
            providers: [_services_store_services__WEBPACK_IMPORTED_MODULE_5__["Store"], _services_authActivator_service__WEBPACK_IMPORTED_MODULE_13__["AuthActivator"], _shared_dataService__WEBPACK_IMPORTED_MODULE_11__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/checkout.component.css":
/*!**********************************************!*\
  !*** ./src/app/pages/checkout.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checkout-thumb {\n  max-width: 100px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2hlY2tvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtDQUNsQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NoZWNrb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2hlY2tvdXQtdGh1bWIge1xuICBtYXgtd2lkdGg6IDEwMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/pages/checkout.component.html":
/*!***********************************************!*\
  !*** ./src/app/pages/checkout.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <h3>Confirm Order</h3>\n  <div *ngIf=\"errorMessage\" class=\"alert alert-danger\">{{ errorMessage }}</div>\n  <table class=\"table table-bordered table-hover\">\n    <tr *ngFor=\"let o of store.order.items\">\n      <td><img src=\"/images/{{ o.productArtId }}.jpg\" alt=\"o.productTitle\" class=\"img-thumbnail checkout-thumb\" /></td>\n      <td>{{ o.productCategory }}({{ o.productSize }}) - {{ o.productArtist }}: {{ o.productTitle }}</td>\n      <td>{{ o.quantity }}</td>\n      <td>{{ o.unitPrice|currency:'USD':true }}</td>\n      <td>{{ (o.unitPrice * o.quantity)|currency:'USD':true }}</td>\n    </tr>\n  </table>\n  <div class=\"col-md-4 col-md-offset-8 text-right\">\n    <table class=\"table table-condensed\">\n      <tr>\n        <td class=\"text-right\">Subtotal</td>\n        <td class=\"text-right\">{{ store.order.subTotal|currency:'USD':true }}</td>\n      </tr>\n      <tr>\n        <td class=\"text-right\">Shipping</td>\n        <td class=\"text-right\">$ 0.00</td>\n      </tr>\n      <tr>\n        <td class=\"text-right\">Total:</td>\n        <td class=\"text-right\">{{ store.order.subTotal|currency:'USD':true }}</td>\n      </tr>\n    </table>\n    <button class=\"btn btn-success\" (click)=\"onCheckout()\">Complete Purchase</button>\n    <a routerLink=\"/\" class=\"btn btn-info\">Cancel</a>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/pages/checkout.component.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/checkout.component.ts ***!
  \*********************************************/
/*! exports provided: CheckoutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPage", function() { return CheckoutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_store_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/store.services */ "./src/app/services/store.services.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




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
    CheckoutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "checkout",
            template: __webpack_require__(/*! ./checkout.component.html */ "./src/app/pages/checkout.component.html"),
            styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/pages/checkout.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_store_services__WEBPACK_IMPORTED_MODULE_2__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], CheckoutPage);
    return CheckoutPage;
}());



/***/ }),

/***/ "./src/app/pages/loginPage.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/loginPage.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4 col-md-offset-4\">\n      <div *ngIf=\"errorMessage\" class=\"alert alert-danger\">{{ errorMessage }}</div>\n    <form (submit)=\"onLogin()\">\n      <div class=\"form-group\">\n        <label for=\"username\">Username</label>\n        <input type=\"text\" class=\"form-control\" name=\"username\" #username=\"ngModel\" [(ngModel)]=\"creds.username\" required/>\n          <div class=\"text-danger\" *ngIf=\"username.touched && username.invalid && username.errors.required\">Required</div>\n      </div>\n      <div class=\"form-group\">\n          <label for=\"password\">Password</label>\n          <input type=\"password\" class=\"form-control\" name=\"password\" #password=\"ngModel\" [(ngModel)]=\"creds.password\" required />\n          <div class=\"text-danger\" *ngIf=\"password.touched && password.invalid && password.errors.required\">Required</div>\n      </div>\n      <div class=\"form-group\">\n        <input type=\"submit\" class=\"btn btn-success\" value=\"Login\" [disabled]=\"username.invalid || password.invalid\" />\n        <a href=\"#\" class=\"btn btn-default\">Cancel</a>\n      </div>\n    </form>\n      {{ creds | json }}\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/pages/loginPage.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/loginPage.component.ts ***!
  \**********************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_store_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/store.services */ "./src/app/services/store.services.ts");




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
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "login-page",
            template: __webpack_require__(/*! ./loginPage.component.html */ "./src/app/pages/loginPage.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_store_services__WEBPACK_IMPORTED_MODULE_3__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ }),

/***/ "./src/app/pages/shopPage.component.html":
/*!***********************************************!*\
  !*** ./src/app/pages/shopPage.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-9\">\r\n        <h1>\r\n            {{title}}\r\n        </h1>\r\n        <product-list></product-list>\r\n    </div>\r\n    <div class=\"col-3\">\r\n        <cart></cart>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pages/shopPage.component.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/shopPage.component.ts ***!
  \*********************************************/
/*! exports provided: ShopPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopPage", function() { return ShopPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShopPage = /** @class */ (function () {
    function ShopPage() {
    }
    ShopPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "shop-page",
            template: __webpack_require__(/*! ./shopPage.component.html */ "./src/app/pages/shopPage.component.html")
        })
    ], ShopPage);
    return ShopPage;
}());



/***/ }),

/***/ "./src/app/router/index.ts":
/*!*********************************!*\
  !*** ./src/app/router/index.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_checkout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/checkout.component */ "./src/app/pages/checkout.component.ts");
/* harmony import */ var _pages_loginPage_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/loginPage.component */ "./src/app/pages/loginPage.component.ts");
/* harmony import */ var _pages_shopPage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/shopPage.component */ "./src/app/pages/shopPage.component.ts");
/* harmony import */ var _services_authActivator_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/authActivator.service */ "./src/app/services/authActivator.service.ts");





var routes = [
    { path: "", component: _pages_shopPage_component__WEBPACK_IMPORTED_MODULE_3__["ShopPage"] },
    { path: "checkout", component: _pages_checkout_component__WEBPACK_IMPORTED_MODULE_1__["CheckoutPage"], canActivate: [_services_authActivator_service__WEBPACK_IMPORTED_MODULE_4__["AuthActivator"]] },
    { path: "login", component: _pages_loginPage_component__WEBPACK_IMPORTED_MODULE_2__["LoginPage"] },
    { path: "**", redirectTo: "/" }
];
var router = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { useHash: false });
/* harmony default export */ __webpack_exports__["default"] = (router);


/***/ }),

/***/ "./src/app/services/authActivator.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/authActivator.service.ts ***!
  \***************************************************/
/*! exports provided: AuthActivator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthActivator", function() { return AuthActivator; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _store_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store.services */ "./src/app/services/store.services.ts");




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
    AuthActivator = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_store_services__WEBPACK_IMPORTED_MODULE_3__["Store"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthActivator);
    return AuthActivator;
}());



/***/ }),

/***/ "./src/app/services/store.services.ts":
/*!********************************************!*\
  !*** ./src/app/services/store.services.ts ***!
  \********************************************/
/*! exports provided: Store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_Order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/Order */ "./src/app/shared/Order.ts");






var Store = /** @class */ (function () {
    function Store(http) {
        this.http = http;
        this.products = [];
        this.order = new _shared_Order__WEBPACK_IMPORTED_MODULE_4__["Order"]();
        this.token = "";
        this.expiration = new Date();
    }
    Store.prototype.loadProducts = function () {
        var _this = this;
        //pipe - before running code, it does specific function
        //map - turns json to objects
        return this.http.get("/api/products")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            _this.products = data;
            return;
        }));
    };
    Object.defineProperty(Store.prototype, "loginRequired", {
        get: function () {
            return this.token.length === 0 || this.expiration < new Date();
        },
        enumerable: true,
        configurable: true
    });
    Store.prototype.login = function (creds) {
        var _this = this;
        return this.http.post("/account/createtoken", creds)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            _this.token = data.token;
            _this.expiration = data.expiration;
        }));
    };
    Store.prototype.checkout = function () {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set("Authorization", "Bearer " + this.token);
        return this.http.post("/api/orders", this.order, {
            headers: headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function () {
            _this.order = new _shared_Order__WEBPACK_IMPORTED_MODULE_4__["Order"]();
        }));
    };
    Store.prototype.addToOrder = function (product) {
        var item = new _shared_Order__WEBPACK_IMPORTED_MODULE_4__["OrderItem"]();
        item = this.order.items.find(function (o) { return o.productId === product.id; });
        if (item) {
            item.quantity++;
        }
        else {
            item = new _shared_Order__WEBPACK_IMPORTED_MODULE_4__["OrderItem"]();
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
    Store = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], Store);
    return Store;
}());



/***/ }),

/***/ "./src/app/shared/Order.ts":
/*!*********************************!*\
  !*** ./src/app/shared/Order.ts ***!
  \*********************************/
/*! exports provided: Order, OrderItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItem", function() { return OrderItem; });
var Order = /** @class */ (function () {
    function Order() {
        this.orderDate = new Date();
        this.orderNumber = Math.random().toString(36).substr(2, 5);
        this.items = [];
    }
    Object.defineProperty(Order.prototype, "subTotal", {
        get: function () {
            var result = this.items.reduce(function (tot, val) {
                return tot + (val.unitPrice * val.quantity);
            }, 0);
            return result;
        },
        enumerable: true,
        configurable: true
    });
    return Order;
}());

var OrderItem = /** @class */ (function () {
    function OrderItem() {
    }
    return OrderItem;
}());



/***/ }),

/***/ "./src/app/shared/dataService.ts":
/*!***************************************!*\
  !*** ./src/app/shared/dataService.ts ***!
  \***************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _Order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Order */ "./src/app/shared/Order.ts");





var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.token = "";
        this.tokenExpiration = new Date();
        this.order = new _Order__WEBPACK_IMPORTED_MODULE_4__["Order"]();
        this.products = [];
    }
    DataService.prototype.loadProducts = function () {
        var _this = this;
        return this.http.get("/api/products")
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (data) {
            _this.products = data;
            return true;
        }));
    };
    Object.defineProperty(DataService.prototype, "loginRequired", {
        get: function () {
            return this.token.length == 0 || this.tokenExpiration > new Date();
        },
        enumerable: true,
        configurable: true
    });
    DataService.prototype.login = function (creds) {
        var _this = this;
        return this.http.post("/account/createtoken", creds)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var tokenInfo = response;
            _this.token = tokenInfo.token;
            _this.tokenExpiration = tokenInfo.expiration;
            return true;
        }));
    };
    DataService.prototype.checkout = function () {
        var _this = this;
        if (!this.order.orderNumber) {
            this.order.orderNumber = this.order.orderDate.getFullYear().toString() + this.order.orderDate.getTime().toString();
        }
        return this.http.post("/api/orders", this.order, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ "Authorization": "Bearer " + this.token })
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            _this.order = new _Order__WEBPACK_IMPORTED_MODULE_4__["Order"]();
            return true;
        }));
    };
    DataService.prototype.AddToOrder = function (product) {
        var item = this.order.items.find(function (i) { return i.productId == product.id; });
        if (item) {
            item.quantity++;
        }
        else {
            item = new _Order__WEBPACK_IMPORTED_MODULE_4__["OrderItem"]();
            item.productId = product.id;
            item.productArtist = product.artist;
            item.productCategory = product.category;
            item.productArtId = product.artId;
            item.productTitle = product.title;
            item.productSize = product.size;
            item.unitPrice = product.price;
            item.quantity = 1;
            this.order.items.push(item);
        }
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/views/cartView.component.html":
/*!***********************************************!*\
  !*** ./src/app/views/cartView.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Cart</h3>\r\n<div>Count: {{ store.order.items.length }}</div>\r\n<table class=\"table table-condensed table-striped\">\r\n    <thead>\r\n        <tr>\r\n            <th></th>\r\n            <th>Product</th>\r\n            <th>Quantity</th>\r\n            <th>Price</th>\r\n            <th>Total</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let item of store.order.items\">\r\n            <td>\r\n                <img src=\"/images/{{ item.productArtId }}.jpg\" alt=\"{{ item.productArtist }}\" class=\"img-fluid product-thumb\" />\r\n            </td>\r\n            <td>{{ item.productCategory }}</td>\r\n            <td>{{ item.quantity }}</td>\r\n            <td>{{ item.unitPrice | currency }}</td>\r\n            <td>{{ item.unitPrice *  item.quantity | currency}}</td>\r\n\r\n        </tr>\r\n    </tbody>\r\n    <tfoot>\r\n        <tr>\r\n            <td colspan=\"5\">\r\n                <strong>\r\n                    Subtotal: {{ store.order.subTotal | currency }}\r\n                </strong>\r\n            </td>\r\n        </tr>\r\n    </tfoot>\r\n</table>\r\n<a class=\"btn btn-success\" *ngIf=\"store.order.items.length > 0\" routerLink=\"checkout\">Checkout</a>\r\n<hr/>"

/***/ }),

/***/ "./src/app/views/cartView.component.ts":
/*!*********************************************!*\
  !*** ./src/app/views/cartView.component.ts ***!
  \*********************************************/
/*! exports provided: CartView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartView", function() { return CartView; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_store_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/store.services */ "./src/app/services/store.services.ts");



var CartView = /** @class */ (function () {
    function CartView(store) {
        this.store = store;
    }
    CartView = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "cart",
            template: __webpack_require__(/*! ./cartView.component.html */ "./src/app/views/cartView.component.html"),
            styles: [__webpack_require__(/*! ./cartview.component.css */ "./src/app/views/cartview.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_store_services__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], CartView);
    return CartView;
}());



/***/ }),

/***/ "./src/app/views/cartview.component.css":
/*!**********************************************!*\
  !*** ./src/app/views/cartview.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-thumb{\r\n    max-width: 50px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY2FydHZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NhcnR2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC10aHVtYntcclxuICAgIG1heC13aWR0aDogNTBweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/views/productListView.component.css":
/*!*****************************************************!*\
  !*** ./src/app/views/productListView.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-image{\r\n    border: 1px #ddd solid;\r\n    box-shadow: rgba(0,0,0,.4) 2px 2px;\r\n    margin: 2px;\r\n}\r\n\r\n.products-props{\r\n    font-size: .9rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvcHJvZHVjdExpc3RWaWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsbUNBQW1DO0lBQ25DLFlBQVk7Q0FDZjs7QUFFRDtJQUNJLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3Byb2R1Y3RMaXN0Vmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtaW1hZ2V7XHJcbiAgICBib3JkZXI6IDFweCAjZGRkIHNvbGlkO1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLDAsMCwuNCkgMnB4IDJweDtcclxuICAgIG1hcmdpbjogMnB4O1xyXG59XHJcblxyXG4ucHJvZHVjdHMtcHJvcHN7XHJcbiAgICBmb250LXNpemU6IC45cmVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/views/productListView.component.html":
/*!******************************************************!*\
  !*** ./src/app/views/productListView.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div *ngFor=\"let p of store.products\" class=\"col-md-4\">\r\n            <div class=\"border bg-light rounded p-1\">\r\n                <img src=\"/images/{{ p.artId }}.jpg\" class=\"img-fluid product-image\" alt=\"{{ p.artist }} \" />\r\n                <h5> {{ p.category }} - {{ p.size }}</h5>\r\n                <ul class=\"products-props\">\r\n                    <li>Price: {{ p.price | currency }} </li>\r\n                    <li>Artist: {{ p.artist }}</li>\r\n                    <li>Title: {{ p.title }}</li>\r\n                    <li>{{ p.artDescription }}</li>\r\n                </ul>\r\n                <button id=\"buyButton\" class=\"btn btn-success\" (click)=\"store.addToOrder(p)\">Buy</button>\r\n            </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/views/productListView.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/productListView.component.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_store_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/store.services */ "./src/app/services/store.services.ts");



var ProductListView = /** @class */ (function () {
    function ProductListView(store) {
        this.store = store;
    }
    ProductListView.prototype.ngOnInit = function () {
        this.store.loadProducts()
            .subscribe(); //Kicks off the operation
    };
    ProductListView = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "product-list",
            template: __webpack_require__(/*! ./productListView.component.html */ "./src/app/views/productListView.component.html"),
            styles: [__webpack_require__(/*! ./productListView.component.css */ "./src/app/views/productListView.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_store_services__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], ProductListView);
    return ProductListView;
}());
/* harmony default export */ __webpack_exports__["default"] = (ProductListView);


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\msantillan\Web Developments\WebApp\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map