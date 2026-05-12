// Function Expression
// Function Expression is used when a function is Stored inside a variable.

//normal function
function hello(){
    console.log("Hello Everyone");
}
hello();  //Hello Everyone

//Function Expression
const greet = function(){   //here function expression is being stored in a variable, the variable can be used as a function
    console.log("Hey everyOne");
};

greet();  // Hey everyOne


console.log("===============================");

const sum = function(a,b){
    return a+b;
};

console.log(sum(2,3));  // 5

let sum1 = sum(23,32);
console.log(sum1);  //55

//functions Stored in varibales do not need names.
//The varibale name is used to call the function



