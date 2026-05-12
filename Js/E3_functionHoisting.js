//Hoisting
// Hoisting in Js is a behavior where varibale and function declarations are moved
// ("Hoisted") to the top of thier scope before code execution.
//Only declartion is hoisted, not initialization


//Varibale Hoisting
console.log(x);  //undefined
var x=5;
/*
var x;  //hoisted
console.log(x); // undefined
x=5; //Assignment stays in place
*/

//Function Hoisting
//Function declartion - fully Hoisted
greet();  //works
function greet(){
    console.log("Heloo EveryOne");
}



//Function declartions are "Hoisted" to the top of their scope, means it can be callled before it is defined in the code
let sum = add(2,3);   //It will Work
console.log(sum);  //5 
function add(a,b){
    return a+b;
}


//Function expressions can not be called before they are defined.
//Function expressions are not hoisted in the same way as function declarations.
//They are created when the execution reaches their definition, and cannot be called before that point

//hii();  //Won't work, will generte error
const hii = function(){
    console.log("Hii EveryOne");
}

//console.log(addition(4,2));   // Won't work , ERROR
const addition = function(a,b){
     return a+b;
}



