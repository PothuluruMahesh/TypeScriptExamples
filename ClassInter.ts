interface ILoan 
{ 
    interest:number 
 } 
 
 class AgriLoan implements ILoan 
 { 
    interest:number 
    rebate:number 
    
    constructor(interest:number,rebate:number) 
    { 
       this.interest = interest 
       this.rebate = rebate 
    } 
 } 
 
 var object = new AgriLoan(10,1) 
 console.log("Interest is : "+object.interest+" Rebate is : "+object.rebate )