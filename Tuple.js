//simple Tuple
console.log("------simple Tuple ----------");
var mytuple = [10, "Hello"];
console.log(mytuple[0]);
console.log(mytuple[1]);
//Empty tuple
console.log("------Empty Tuple ----------");
var empty = [];
empty[0] = 20;
empty[1] = 40;
console.log(empty[0]);
console.log(empty[1]);
//Tuple Operatins
console.log("------Tuple Operations ----------");
var mytuple = [10, "Hello", "World", "typeScript"];
console.log("Items before push " + mytuple.length);
mytuple.push(12);
console.log("Items after push " + mytuple.length);
console.log("Items before pop " + mytuple.length);
console.log(mytuple.pop() + " popped from the tuple");
console.log("Items after pop " + mytuple.length);
mytuple[0] = 121; //update 
console.log("Tuple value at index 0 changed to   " + mytuple[0]);
//Destructing tuples
console.log("------Destructing Tuple ----------");
var a = [10, "hello"];
var b = a[0], c = a[1];
console.log(b);
console.log(c);
