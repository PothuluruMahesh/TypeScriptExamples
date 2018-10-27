class Shape 
{ 
    Area:number 
    
    constructor(a:number) 
    { 
       this.Area = a 
    } 
 } 
 
 class Circle extends Shape 
 { 
    disp5():void 
    { 
       console.log("Area of the circle:  "+this.Area) 
    } 
 }
   
 var obj2 = new Circle(223); 
 obj2.disp5()