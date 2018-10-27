class Car 
{ 
    
    engine:string;
    constructor(engine:string) 
    { 
       this.engine = engine
    }  
 
     disp3():void 
    { 
       console.log("Engine is  :   "+this.engine) 
    } 
 }
 let o1 = new Car("Jagvar");
 o1.disp3()