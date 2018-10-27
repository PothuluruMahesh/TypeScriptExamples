var AgriLoan = /** @class */ (function () {
    function AgriLoan(interest, rebate) {
        this.interest = interest;
        this.rebate = rebate;
    }
    return AgriLoan;
}());
var object = new AgriLoan(10, 1);
console.log("Interest is : " + object.interest + " Rebate is : " + object.rebate);
