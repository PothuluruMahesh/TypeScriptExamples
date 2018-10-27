
//anonymus function
var msg1 = function() 
{ 
    return "hello world fron anonymus function";  
 } 
 console.log(msg1())

 //function
 function mahi()
 {
    console.log("Hello World from function")
 }

 //anonymus function with parameters

 var res = function(a:number,b:number) 
 { 
    return a*b;  
 }; 
 console.log("anonymus function with parameters : ",res(12,2)) 

 //function Costructor
 var myFunction = new Function("a", "b", "return a * b"); 
var x1 = myFunction(4, 3); 
console.log("Constructor function value : ",x1);

//lambda Expressions
var foo = (x:number)=>10 + x 
console.log("lambda Expresions => or notation value is : ",foo(100))  