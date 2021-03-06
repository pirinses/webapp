var StoreCustomer = /** @class */ (function () {
    //constructor
    function StoreCustomer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.visits = 0;
    }
    //METHOD
    StoreCustomer.prototype.showName = function () {
        alert(this.firstName + " " + this.lastName);
    };
    Object.defineProperty(StoreCustomer.prototype, "name", {
        get: function () {
            return this.ourName;
        },
        //ACCESSORS
        //must have a param
        set: function (val) {
            this.ourName = val;
        },
        enumerable: false,
        configurable: true
    });
    return StoreCustomer;
}());
//let cust = new StoreCustomer();
//cust.visits = 10;
//# sourceMappingURL=storecustomer.js.map