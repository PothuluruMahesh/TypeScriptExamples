var Greeting1 = /** @class */ (function () {
    function Greeting1() {
    }
    Greeting1.prototype.greet = function () {
        console.log("Hello World!!!");
    };
    return Greeting1;
}());
var obj = new Greeting1();
obj.greet();
