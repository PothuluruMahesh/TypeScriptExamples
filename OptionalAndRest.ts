
//Optional parameters
function disp_details(id:number,name:string,mail_id?:string) 
{ 
    console.log("ID:", id); 
    console.log("Name",name); 
    
    if(mail_id!=undefined)  
    console.log("Email Id",mail_id); 
 }
 disp_details(123,"Mahesh");
 disp_details(111,"Mahi","mahi@gmail.com");

 //Rest parameters

 function addNumbers(...nums:number[]) 
 {  
    var i;   
    var sum:number = 0; 
    
    for(i = 0;i<nums.length;i++) { 
       sum = sum + nums[i]; 
    } 
    console.log("sum of the numbers",sum) 
 } 
 addNumbers(1,2,3) 
 addNumbers(10,10,10,10,10)