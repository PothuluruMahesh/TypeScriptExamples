interface RunOptions 
{ 
    program:string; 
    commandline:string[]|string|(()=>string); 
 } 
 
 var options:RunOptions = {program:"test1",commandline:"Hello"}; 
 console.log(options.commandline)  
 
 options = {program:"test1",commandline:["Hello","World"]}; 
 console.log(options.commandline[0]); 
 console.log(options.commandline[1]);  
 
 options = {program:"test1",commandline:()=>{return "**Hello World**";}}; 
 
 var fn:any = options.commandline; 
 console.log(fn());

 //Multiple Interfaces
 console.log("Multiple Interfaces")
 interface IParent1 { 
    v1:number 
 } 
 
 interface IParent2 { 
    v2:number 
 } 
 
 interface Child extends IParent1, IParent2 { } 
 var Iobj:Child = { v1:12, v2:23} 
 console.log("value 1: "+Iobj.v1+" value 2: "+Iobj.v2)


