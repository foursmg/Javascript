//Function
//Functions are reusable code blocks designed to perform a particular task.
//Functions are executed when they are called or invoked.

// Syntax
// without parameter
//function functionName(){
//           //code
//       }

//with parameter
//   funtion functionName(parameter1, parameter2....){
//       //code
//   }

// function call ->  functionName();

function hello(){    //hello function when callled will print hello message
    console.log("Hello, This is a function.");
}

hello(); //calling the hello() function

console.log("---------------------------");


function sum(a,b){
    return a+b;
}

let sum1 = sum(4,7);
console.log(sum1);  //11
//Function can be called multiple Times
console.log(sum(87,3));  //90
console.log(sum(3.333,0.01));  //3.343

console.log("---------------------------------");

//Scope
//Local Varibales - Variables declared within a JavaScript function, become LOCAL to the function.
// Local variables can only be accessed from within the function.

//console.log(fruit);   //variable declared inside the function cannot be accessed here


function myfunction(){
    let fruit = "mango";
    console.log(`${fruit} is summer fruit.`); //can be accessed inside the function only
}

myfunction(); // function calling

//console.log(fruit);    //variable declared inside the function cannot be accessed here also

console.log("----------------------------------");


//Function With One Parameter
function onePara(name){
    console.log("Hello "+name);
}
onePara("Kelly"); //Hello Kelly

//Function With Two Parameter
function twoPara(name,id){
    console.log("Hello ",name," Emp Id: ",id);
}
twoPara("kelly",234);  // Hello  kelly  Emp Id:  234

console.log("---------------------------------");


// parameter vs arguments
// Parameter are the NAMES listed in the Function definition
// Arguments are the REAL VALUES Passed to, and Received By the function.


//Default Parameter Values
//In Js function can have default values, The default value is used if no argument is provided.
function add(a,b=10){  //default value of b only be used when b argument is not provided by calling function
    return a+b;
}
console.log(add(2)); //12
console.log(add(3,4));  //7 


// Function without return will be undefined
// If a Function is called with fewer arguments than parameters, the missing values become undefined.

console.log("---------------------------");


// Recursion function for factorial
function factorial(n){
    if(n==0){
        return 1;
    }
    return n*factorial(n-1);
}
console.log("Factorial of 5: "+ factorial(5)); //120


console.log("-------------------------------------");


//find max function

let x = findmax(23,5,21,324,75,2,5); //function call + Passing values inside(), returned value gets stored in var x
console.log(x);   //324, function can be called from above or below both

function findmax(){   // there are no named parameters like (a,b), instead it uses 'arguments'.
    let i=1;
    let max= arguments[0];        //Inside a normal function, Js automatically provides 'arguments'.
    while(i<arguments.length){
        if(max<arguments[i]){
            max = arguments[i];
        }
        i++;
    }
    return max;
}

console.log(x);  //324

/*
Inside a Normal Fucntion, Js automatically Provides: arguments
It contains all values passes to the function.
for call : findmax(23,5,21,324,75,2,5)
arguments becomes conceptually like
arguments[0] = 23
arguments[1] = 5
arguments[2] = 21
arguments[3] = 324
arguments[4] = 75
arguments[5] = 2
arguments[6] = 5
*/

console.log("================");


//Program for sum of Natural Numbers till n;
let n = 10;
console.log("Sum of natural numbers till "+n+" = "+sumOfNum(n));
function sumOfNum(n){

    let i=0;
    let sum=0;
    while(i<=n){
        sum = sum + i;
        i++;
    }
    return sum;

}


console.log("----------------------------------");


//Program for sum of all Numbers passed as arguments
let sums = sumAll(23,1,56,79,7,54,33,68);
console.log("Sum: "+sums); // 321

function sumAll(){
    console.log(arguments); // it will print the arguments in [23,1,56....]
    let i=0;
    let sum=0;
    while(i<arguments.length){
        sum = sum + arguments[i];
        i++;
    }
    return sum;
}


console.log("================================");

// Function Rest Parameter

function functionNums(...nums){   // here nums will collect all the passed arg in an array
   console.log(nums); 
}

functionNums(8,7,6,5,4,3,2,1);  // (8) [8, 7, 6, 5, 4, 3, 2, 1]


//another example
function summ(...args) {
  let sum = 0;
  for (let arg of args) {
    sum += arg;
  }
  return sum;
}

let xx = summ(4, 9, 16, 25, 29, 100, 66, 77);
console.log(xx); //326

