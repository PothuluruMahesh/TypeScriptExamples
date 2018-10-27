//Union with Literals
console.log("-------literal with Union---------")
var val:string|number 
val = 12 
console.log("numeric value of val "+val) 
val = "This is a string" 
console.log("string value of val "+val)

//Union with Function Parameters
console.log("-------Function parameters with Union---------")

function disp(name:string|string[]) 
{ 
    if(typeof name == "string") 
    { 
       console.log(name) 
    } 
    else 
    { 
       var i;  
       for(i = 0;i<name.length;i++) 
       { 
          console.log(name[i])
       } 
    } 
 } 
 disp("Mahesh") 
 console.log("Printing names array....") 
 disp(["Naresh","Subbu","Ramana","Arun"])


//Arrays with Union
console.log("-------Arrays with Union---------")

var arr:number[]|string[]; 
var i:number; 
arr = [1,2,4] 
console.log("**numeric array**")  

for(i = 0;i<arr.length;i++) 
{ 
   console.log(arr[i]) 
}  

arr = ["Mumbai","Pune","Delhi"] 
console.log("**string array**")  

for(i = 0;i<arr.length;i++) 
{ 
   console.log(arr[i]) 
} 