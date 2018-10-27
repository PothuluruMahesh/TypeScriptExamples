var Car = /** @class */ (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.disp3 = function () {
        console.log("Engine is  :   " + this.engine);
    };
    return Car;
}());
var o1 = new Car("Jagvar");
o1.disp3();
