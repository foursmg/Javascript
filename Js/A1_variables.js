//Varibales

// 'var' and 'let' Keyword is used to declare variables
//variables are labels for data values, also container for storing data
//Varibales are identified with unique names called identifiers.

var num;             //variable declared, here num is identifiers
num=21;             //variable Initialize
console.log(num);  //23

var number = 231;
console.log(number);   //231
number = 75;
console.log(number);   //75


var name = "Kartik";
console.log(name);

var quote = 'Bhagat Singh - "Inquilab Zindabad"';
console.log(quote);

//Rules for Naming Varibale
//Variable name must start with -> a letter, an underscore(_), or dollor sign($).
//Variables are case Sensitive ->  Num and num Both are different variable
// !! Variable cannot start with a number.
//Varibale names cannot be keywords.


//Constants
// const cannot be Redeclared, const cannot be Reassigned, const have Block Scope
//A constant is a type of variable whose value cannot be changed.
//Always initialize a constant During Declaration
const numValue = 76;
console.log(numValue);
//const numValue = 78;   //cannot be Redeclared
//numValue = 87;          //it will produce error.
console.log(numValue);

const movieName= "Kartik calling Kartik";
console.log(movieName);

// Always use const if the value should not be changed
// Always use const if the type should not be changed (Arrays, Object, Function, RegExp)
// 
// Only use let if you cannot use const
//  Never use var if you can use let or const.

//Constant Arrays
//You Can Change the elements of a constant Array;
const cars = ["Toyota","Honda","Suzuki"];
console.log(cars);
console.table(cars);    
cars[0] = "Ford";      //Replace
console.log(cars);    //Ford Honda Suzuki 
cars.push("Kia");     //add an element at the end
console.log(cars);    //Ford Honda Suzuki Kia

//cars = ["Volvo","Tota","Audi"];  //Cannot be reassigend - Error Produced.


//Constant Objects
const bikes = {brand:"Honda",Model:"CB650R", color:"Red"};
console.log(bikes);
console.table(bikes);
//Can change property of Object
bikes.color = "grey";
console.log(bikes);

console.log("----------------------------");

/*
#let
The let keyword was introduced in ES6 (2015)
Variables declared with let have BLOCK SCOPE*
Variables declared with let MUST BE DECALRED BEFORE USE
Variables declared with let CANNOT BE REDECLARED in the same scope



*/

// Block scope
// Variables declared inside a {} block cannot be accessed from outside the block.
{
    let xnum = 34;
    console.log(xnum);
}
//console.log(xnum); //xnum variable cannot be used here, error will be produced

console.log("-------------------------------------");

// Function Scope
// Inside a function all variables declared with var, let or const have Function Scope:
function myfunction(){
    var x = 23;
    let y = 43;
    const z = 45;
}
// console.log(x); x cannot be used here, will produce error
// console.log(y); y cannot be used here
// console.log(z); z cannot be used here

console.log("----------------------------------");


// Global Scope
// Variables declared with the var always have Global Scope, it cannot have block scope
{
    var x = 43;
} 
console.log(x);  // var x can be used outside the scope here


console.log("-------------------------------------");


// Cannot be Redeclared  
// Variables defined with let can not be redeclared.
// You can not accidentally redeclare a variable declared with let.
let xvalue = 23;
console.log(xvalue);
//let xvalue = 43; //error, cannot be redclared
xvalue = "Delhi"; //but value can be reassigend
console.log(xvalue);
//let cannot be redeclared inside block but can be redeclared inside another block;
{
    let ID= 234;
    //let ID= 324; //not allowed  here
}
{
    let ID = 567; // redeclared inside another block
}

// Can be Redeclared - using var , const can be also redeclared
// even declared var inside block can be redecalred outside the block
var yvalue = 45;
console.log(yvalue);
var yvalue = "Jaipur";
console.log(yvalue); 
//inside block
{
    var pincode = 654234;
    console.log(pincode);
}
var pincode = 479246;
console.log(pincode);

/*

let and const have block scope.
let and const can not be redeclared.
let and const must be declared before use.
let and const does not bind to this.
let and const are not hoisted.




*/ 



//Strict Mode - "use strict"
//Strict Mode in java is a way to make JS run with Stricter rules.
//It helps catch mistakes that normal Js Silently ignores.
// Enable by writing "use strict";
"use strict"
//Usually at the top of the file or function

/*
As an example, in normal JavaScript, mistyping a variable name creates a new global variable. In strict mode, this will throw an error, 
making it impossible to accidentally create a global variable.

In normal JavaScript, a developer will not receive any error feedback assigning values to non-writable properties.

In strict mode, any assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing variable, or a non-existing object, will throw an error.

In Strict mode: 
x=3.14; not allowed; -> This will cause error -> Reason variable not declared


*/