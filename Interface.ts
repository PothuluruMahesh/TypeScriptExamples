interface IPerson 
{ 
    firstName:string, 
    lastName:string, 
    sayHi: ()=>string 
 } 
 
 var customer:IPerson = 
 { 
    firstName:"Mahesh",
    lastName:"Pothuluru", 
    sayHi: ():string =>{return "Hi there"} 
 } 
 
 console.log("Customer Object ") 
 console.log(customer.firstName) 
 console.log(customer.lastName) 
 console.log(customer.sayHi())  
 
 var employee1:IPerson = 
 { 
    firstName:"Mahi",
    lastName:"Unknown", 
    sayHi: ():string =>{return "Hello!!!"} 
 } 
   
 console.log("Employee1  Object ") 
 console.log(employee1.firstName) 
 console.log(employee1.lastName)
 console.log(employee1.sayHi())  

 