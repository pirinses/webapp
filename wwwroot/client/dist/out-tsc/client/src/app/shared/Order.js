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
        enumerable: false,
        configurable: true
    });
    return Order;
}());
export { Order };
var OrderItem = /** @class */ (function () {
    function OrderItem() {
    }
    return OrderItem;
}());
export { OrderItem };
//# sourceMappingURL=Order.js.map