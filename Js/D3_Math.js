// Math is a built-in object that provides methods for common mathematical opertaions.

console.log(Math);   // This lists all the mathematical functions

// Math.round() -> Rounds to the nearest Integer

console.log(Math.round(4.4));  // 4
console.log(Math.round(4.5));  // 5
console.log(Math.round(4.6));  // 5
console.log(Math.round(11.5));  // 12
console.log(Math.round(9.9));  // 10



// Math.floor() -> Always rounds down

console.log(Math.floor(4.9)); // 4
console.log(Math.floor(-4.9));  // -5
console.log(Math.floor(4.1));  // 4



// Math.ceil -> Always rounds UP

console.log(Math.ceil(4.1));  // 5
console.log(Math.ceil(-4.1));  // -4


// Math.trunc() -> Simply removes the decimal part

console.log(Math.trunc(4.1));  // 4
console.log(Math.trunc(4.9));  // 4
console.log(Math.trunc(-6.1));  // -6


// Math.abs() -> Returns the absolute value

console.log(Math.abs(4.1));  // 4.1
console.log(Math.abs(-10));  // 10
console.log(Math.abs(-3.1));  // 3.1


// Math.max()  -> Returns the largest number
// Math.min()  -> Returns the smallest number

console.log(Math.max(12,64,1,2,5));   //64
console.log(Math.min(12,64,1,2,5));   // 1


// Math.pow() -> Raises a number to a power 
console.log(Math.pow(5,2));  // 25
console.log(Math.pow(5,-2));  // 0.04
console.log(Math.pow(-5,2));  // 25
console.log(Math.pow(-5,-2));  // 0.04



// Math.sqrt() -> Returns the squre root

console.log(Math.sqrt(25));  //5
console.log(Math.sqrt(5));   // 2.23606797749979


//  Math.cbrt() -> Returns the cube root
console.log(Math.cbrt(27));   // 3
console.log(Math.cbrt(64));   // 4


//  Math.random()  ->   Generates a random number between 0(inclusive) and 1(exclusive).
console.log(Math.random());  // 0.506419535280392  (will give different answer each time)

// For random number between 0-9
console.log(Math.random()*10);   // 8.947105367539677
console.log(Math.floor(Math.random()*10));  // 6   (will give different answer each time)

// Random intger from 1 to 10
console.log(Math.floor(Math.random()*10) + 1);  //  1 - 10

// Math.sign()   -> Tells whether a number is positive, negative, or zero.
console.log(Math.sign(10));  // 1
console.log(Math.sign(-10));  // -1
console.log(Math.sign(0));   // 0


// Math.log() -> Natural logrithm (base e)

console.log(Math.log(10));  // 2.302585092994046



/*

Trignometric function
Math.sin()
Math.cos()
Math.tan()

Math.asin()
Math.acos()
Math.atan()



*/


// Important Math property
// Math.PI
console.log(Math.PI);   // 3.141592653589793
console.log(Math.E);  // 2.718281828459045

