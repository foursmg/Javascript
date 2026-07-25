
console.log("--------------- Callback function--------------");
/*

Callback
A callback is a function passed to another function.
It is called by receiving function when appropriate.
Callbacks are heavily used for:
   Timers(setTimeout, setInterval),    Array Methods(forEach,map,reduce)
   Event handling(addEventListener),   Asynchronous operations(such as fetching data)


*/
   
// Example 1

function greet(name,callback){
    console.log("Hey "+name);
    callback();    // calling callback function
}

function wish(){
    console.log("Happy Holi");
}

greet("Rohan",wish);

// Output:
//        Hey Rohan
//        Happy Holi

/*
Explanation:
    greet  -> main function  (higher order function)
    wish   -> callback function

greet() function accepts two parameter:   1. name,   2. callback
                                          -"Rohan" as the name
                                          - wish() as the callback
Inside greet() first console.log() will be executes and then the callback()- wish() will be called which will print: happy holi on console

*/


// Example 2.  Anonymous function call back
function goodNews(name,myFunction){
    console.log("Hello "+name);
    myFunction();
}

goodNews("Saroj", function() {console.log("You have passed the exam.");});



// Example 3. Using Anonymous function
function morningWish(name,myFunction){
    console.log("Good Morning "+name);
    myFunction();
}

morningWish("Kaveri", ()=>console.log("Have a good day."));



console.log("--------------------------------------------------");

console.log("---------using normal function-----------");

// Normal function Example -------------------------------------

const radius = [2,3,4,5];

// function for calculating Area of circle
const calculateArea = function(arr){
    const output = [];
    for(let i=0;i<arr.length;i++){
        output.push(Math.PI*arr[i]*arr[i]);
    }
    return output;
}

console.log(calculateArea(radius));

// function for calculating Circumference of a circle

const calculateCircumference = function(arr){
    const output= [];
    for(let i=0;i<arr.length;i++){
        output.push(2*Math.PI*arr[i]);
    }
    return output;
}
console.log(calculateCircumference(radius));


// function for calculating diameter of radius given
const calculateDiameter = function(arr){
    const output = [];
    for(let i=0;i<arr.length;i++){
        output.push(2*arr[i]);
    }
    return output;
}
console.log(calculateDiameter(radius));


console.log("-------------using higher order function--------------");


// Now the same thing in higher order function -----------------------

const radiusNum = [2,3,4,5];

const area = function(radius){            // Callback function
    return Math.PI*radius*radius;
}

const circumference = function(radius){   // Callback function
    return 2*Math.PI*radius;
}

const diameter = function(radius){         // Callback function
    return 2*radius;
}

const calculate = function(arr,myFunction){    // Higher order Function - (calculate)
    const output = [];
    for(let i=0;i<arr.length;i++){
        output.push(myFunction(arr[i]));      // calling callback function
    }
    return output;
}

console.log(calculate(radiusNum,area));
console.log(calculate(radiusNum,circumference));
console.log(calculate(radiusNum,diameter));


console.log("-----Map------");

// Using map  
console.log(radiusNum.map(area));           // Skips the calculate part
console.log(radiusNum.map(circumference));
console.log(radiusNum.map(diameter));

console.log("--------------");

//  To use our higher order function calculate,in similar way as map

Array.prototype.calculate = function(myFunction){    // Higher order Function - (calculate)
    const output = [];
    for(let i=0;i<this.length;i++){
        output.push(myFunction(this[i]));      // calling callback function
    }
    return output;
}

console.log(radiusNum.calculate(area));
console.log(radiusNum.calculate(circumference));
console.log(radiusNum.calculate(diameter));