// Data Type - Different kinds of value we can use in Js
// 8 Basic types

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


//undefined
//undefined represents the absense of a value.
//If a variable is declared but the value is not assigned, then the value of that variable will be undefined.
var xyz;
console.log(xyz);   //undefined
//a variable can also be explicitly assigned undefined value
var abc = undefined;
console.log(abc);  ///undefined
//avoid explicitly assigning undefined to a variable. Usually, we assign null to variables to indicate "unknown" or "empty" values.

//null
//null represents "no value" or "nothing". 
let var1 = null;
console.log(var1);

//Symbol
//A Symbol is a unique and primitive value. This data type was introduced in ES6.
//When we create a Symbol, JavaScript guarantees that it is distinct from all other symbols, even if they have the same descriptions
let value1 = Symbol("Apple");
let value2 = Symbol("Apple");
console.log(value1===value2);   //false
// === compares the value of value1 and value2. -> It returns 'true' if the two values are exactly the same, otherwise false
// though both value1 and value2 contain 'Apple' Js treats them different since they are of Symbol type


//Object
//An Object holds data in the form of key-value pairs.
let employee ={
    fname: "Samanth",
    lname: "Singh",
    empId: 23543
};
console.log(employee);
//for table view
console.table(employee);



