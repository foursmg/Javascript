// Data Type - Different kinds of value we can use in Js
// 8 Basic types


// Primitive data type

// String - Represent textual Data, Contains a sequence of characters
// surrounded by Single quotes '', Double quotes " ", Backticks ` `
let name = "Aditya";
var city = 'Delhi';
let dept = `HR`;

console.log("Name: "+name+", City: "+city+", Dept: "+dept);

//Number
//Represent numceric values
//Integers  - Numeric values without any decimal parts: 3,2,45,-3,-2;
//Floating points - with decimal parts: 3.33, -1.24
let num = 346;
var n = 3.33;
console.log(num);
console.log(n);


//Exponential Notation
let val = 123e5;    
console.log(val);    //12300000



//BigInt 
//A BigInt number is created by appending n to the end of an integer.
//ex: 1244453423624523543n;
var a= 54534545367457242634n;
var b = 1n;
var add = a+b;   //in case of BigInt both need to be bigInt, can't mix BigInt and number vakues.
console.log(add);


//Boolean 
// can have only two values: true/false
var bool = true;
console.log(bool);


//undefined                          // typeof undefined gives undefined
//undefined represents the absense of a value.
//If a variable is declared but the value is not assigned, then the value of that variable will be undefined.
var xyz;
console.log(xyz);   //undefined
//a variable can also be explicitly assigned undefined value
var abc = undefined;
console.log(abc);  ///undefined
//avoid explicitly assigning undefined to a variable. Usually, we assign null to variables to indicate "unknown" or "empty" values.

//null                                     // typeof null gives Object
//null represents "no value" or "nothing". 
let var1 = null;
console.log(var1);

//Symbol
//A Symbol is a unique and primitive value. This data type was introduced in ES6.
//When we create a Symbol, JavaScript guarantees that it is distinct from all other symbols, even if they have the same descriptions
let value1 = Symbol("Apple");
let value2 = Symbol("Apple");
console.log(value1==value2);   //false
console.log(value1===value2);   //false
// === compares the value of value1 and value2. -> It returns 'true' if the two values are exactly the same, otherwise false
// though both value1 and value2 contain 'Apple' Js treats them different since they are of Symbol type





//--------


// Reference data type 
// Refernce data types are types that store a reference( memory address) to the actual value rather than the value itself.
// Types: Object, Array, Function, Date, Amp, Set, Any custom object created classes or construcors


//Object
//An Object holds data in the form of key-value pairs.

//Example 1 - Object
let person1 = { name: "Aman" };
let person2 = person1;

person2.name = "Amit";
console.log(person1.name);  // Amit
console.log(person2.name);  // Amit
//Reason : person1 and person2 point to the same object in memory.
// Changing the Object through one varibale affects the other

console.log(typeof(person1));  //object


//Example 2 - Array
let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log(arr1); // [1, 2, 3, 4]
console.log(arr2); // [1, 2, 3, 4]
// Arrays are copied by reference.

console.log(typeof(arr1));   // Object

//In case of primitives below - Primitives are copied by value.
let x = 23;
let y = x;
y=1;
console.log(x);   //23
console.log(y);   //1


function hello(){
    console.log("Hello Everyone");
}
hello();  // Hello Everyone
console.log(typeof(hello));  // function


//Example 
let employee ={
    fname: "Samanth",
    lname: "Singh",
    empId: 23543
};
console.log(employee);
//for table view
console.table(employee);


// Comparing Reference Types
let student1 = {name: "Kelly"};
let student2 = {name: "Kelly"};

console.log(student1===student2);  // False  -> Content same but different object in memeory
console.log(student1.name===student2.name);  // true
console.log(student1.name==student2.name);  // true



// Stack : Stores primitive values and references, Fast access, Automatically managed, Uses LIFO (Last In, First Out) for function calls
// Heap  : Stores Objects and arrays, Slower than stack access, Managed by JavaScript's garbage collector, Dynamic memeory allocation








//---------------------------------------------------------------------------------------------------
/*

            UNDEFINED vs NOT DEFINED 

undefined is a built-in value that means a varibale has been declared but has not yet been assigned a value, whereas "Not defined" is a runtime error (ReferenceError)
that means the varibale does not exist in the current scope at all.

                UNDEFINED                                        NOT DEFINED
    A primitive data type and a specific                A ReferenceErrorexception thrown by the engine.
    value.                                                      

    Memory space is allocated for the varibale.         No memory space has been allocated.

    The varibale has been declared                      The varibale has never been declared anywhere in the scope.
    (Using var, let or const).

    Code execution continues smoothly.                  Code execution halts immediately unless handled.

*/




