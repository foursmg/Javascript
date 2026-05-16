// this in Objects
// The this keyword refers to an Object.
//In Js, This is used to access the object that is calling a method

//When Used inside an Object method, this refers to the Object.
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};
const name = person.fullName();
console.log(name);


//the 'this' keyword makes it possible to use same method with different objects.
const person1 = {
    name : "John",
    hello: function(){
        return "Hello "+this.name;
    }
};

const person2 = {
    name : "Amar",
    hello: function(){
        return "Hello "+ this.name;
    }
};

let hello1 = person1.hello();
console.log(hello1);

let hello2 = person2.hello();
console.log(hello2);

//this alone
//In a Browser, the global object is the window objet
let x = this;
console.log(x);
//In strict mode, this is undefined when used alone.


//A normal function
function myHello() {
    console.log("Heyy there!!!!");
  return "Hello";
}
let helo=myHello();
console.log(helo);

console.log("-----------------(function Overwrite)------------------")


let myF1 = functionX();
console.log(myF1); //When two function with same name get called
//Js Function declaration is Hoisted.


function functionX(){
    console.log("Function Onee-1")
    return "F1";
}


function functionX(){
    console.log("Function Two-2");
    return "f2";
}

//Java Doesn't two separate function with same name.
//The second declaration Overwite the first one.


console.log("--------------------------------");


//this in a Function
//In a regular function, this also refers to the global object.
function myFunction() {
    console.log("Function 2")
  return this;
}

let myF = myFunction();
console.log(myF);


