// Arrow Functions
// Arrow function is a shorter way to write functions in Js
//Arrow Function must be used before they are used.
//Syntax-
//   () => {}

//Normal Function
function greet(){
    console.log("Hello World");
}    
greet();

//Arrow Function
const hello = () => {
    console.log("Hello, This is arrow Function.");
}


console.log("---------------------------------");

//Arrow Function with one parameter, When one parameter, Brackets are optional
const square = x => {
    return x*x;
}

console.log(square(5));   //25


//Arrow  function with two parameter
const recArea = (l,b) => {
    return l*b;
}

console.log(recArea(5,4)); //20


console.log("================================");


//Shoter Syntax if the body contains only one statement
const add = (a,b) => a+b;
console.log(add(1,9));   //10

//Arrow Function return Value by Default
//If The function has Only one statement that returns a value
const hii = () => "Hii EveryOne";
console.log(hii());  //Hii EveryOne 


console.log("----------------------------");


//Returning Object
const user = () => ({name:"Kelly"});
console.log(user());


console.log("--------------------------");

//!!!!!!!!! MOST IMPORTANT
// In Arrow Function, it does not create its own 'this'
// It uses 'this' from surrounding scope.

const person = {
  name: "John",
  greet: function() {
    console.log(this.name)
  }
};

person.greet();  //john

// Dont use Arrow function for 'this' thing

