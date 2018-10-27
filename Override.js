var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ParentClass = /** @class */ (function () {
    function ParentClass() {
    }
    ParentClass.prototype.doPrint = function () {
        console.log("doPrint() from Parent called....");
    };
    return ParentClass;
}());
var SubParent = /** @class */ (function (_super) {
    __extends(SubParent, _super);
    function SubParent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SubParent.prototype.doPrint = function () {
        _super.prototype.doPrint.call(this);
        console.log("doPrint() is SubParent is called...");
    };
    return SubParent;
}(ParentClass));
var ob = new SubParent();
ob.doPrint();
