function disp1(s1:string):void; 
function disp1(n1:number,s1:string):void;
function disp1(n2:number,s2:string,m1:number):void; 

function disp1(x:any,y?:any,z?:any):void //y? optiional parameter
{ 
   console.log(x); 
   console.log(y); 
   console.log(z);
} 
disp1("abc") 
disp1(1,"xyz");
disp1(12,"mahesh",23)

