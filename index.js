var a = 0;
var b = 1;
function X() {
    return 1;
}
var Y = function () {
    return 0;
};
var Z = function () {
    return -1;
};
var a1 = 5;
var b1 = "ABC";
b1 = true;
var c1 = true;
function x1(t) {
    return t + 4;
}
var Customer = /** @class */ (function () {
    function Customer(name) {
        if (name === void 0) { name = "New Cust"; }
        this.id = 0;
        this.active = true;
        this.id = 0;
        this.name = name;
        this.active = true;
        this.sales = 0;
    }
    Customer.prototype.print = function () {
        console.log("" + this.name);
    };
    return Customer;
}());
