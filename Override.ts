class ParentClass 
{ 
    doPrint():void 
    {
       console.log("doPrint() from Parent called....") 
    } 
 } 
 
 class SubParent extends ParentClass 
 { 
    doPrint():void 
    { 
       super.doPrint() 
       console.log("doPrint() is SubParent is called...")
    } 
 } 
 
 var ob = new SubParent() 
 ob.doPrint()