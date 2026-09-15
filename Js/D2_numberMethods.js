const num = new Number(100);   // This creates a Number object that wraps the value 100,
console.log(num);               // Even though it represent the number 100, its type is object, not number

const n = 100;  // n contains number primitive.
console.log(n);

console.log(n === num);   // false - cause different type and different kinds of values. 
console.log(n==num);      // true  -  cause == performs type converion


// Number Methods

// toString() -> Converts a number to a string.

let a = 123;
console.log(a.toString()); // 123
let myA = a.toString();
console.log(myA);          // 123
console.log(typeof(myA));  // String

console.log(a.toString().length);   //3

// Can also specify a number System(radix):

console.log(a.toString(2));  // 1111011
console.log(num.toString(16));   // 64
console.log(a.toString(8));    // 173

//---------------------------------------------------------


// toFixed()  -> Formats a number with a specified number of decimal places.
// toFixed()  -> digits after decimal

let b = 12.34567;
console.log(b.toFixed());  //12
console.log(b.toFixed(2));  //  12.35
console.log(b.toFixed(3));  //  12.346

let numB = b.toFixed(2);
console.log(numB);          // 12.35
console.log(typeof(numB));    // string


//----------------------------------------------------------


// toPrecision() -> Specifies the total number of significant digits. 
// toPrecision() -> total significant digits

let c = 123.456;

console.log(c.toPrecision());  // 123.456
console.log(c.toPrecision(1));  // 1e+2
console.log(c.toPrecision(2));  // 1.2e+2
console.log(c.toPrecision(3));  // 123
console.log(c.toPrecision(4));  // 123.5
console.log(c.toPrecision(5));  // 123.46
console.log(c.toPrecision(6));  // 123.456

console.log(typeof(c.toPrecision(4)));  // String

//-------------------------------------------------------------------

// toExponenetial()  -> Converts a number into exponential/scientific notation

let d = 12345;

console.log(d.toExponential(2));  // 1.23e+4
console.log(d.toExponential(3));   // 1.235e+4
console.log(d.toExponential(4));   // 1.2345e+4



//-----------------------------------------------------------------

// Number Checking Methods - Important

// Number.isInteger() -> Checks weather a  value is an integer

console.log(Number.isInteger(-1));  //true
console.log(Number.isInteger(0));    //true
console.log(Number.isInteger(1.2));   // false
console.log(Number.isInteger("5"));    // false


//-----------------------------------------------------------

// Number.isNaN() -> Checks whether a value is NaN

console.log(Number.isNaN(0));     // false
console.log(Number.isNaN(-1));     // false
console.log(Number.isNaN(1));      // false
console.log(Number.isNaN("5"));    // false
console.log(Number.isNaN(NaN));   // true
console.log(Number.isNaN("Hello"));   // false


//---------------------------------------------------------------

// Number.isFinite()  ->   Checks whether a value is a finite number.

console.log(Number.isFinite(0));        // true
console.log(Number.isFinite(1));        // true
console.log(Number.isFinite("8"));       // false
console.log(Number.isFinite("hello"));   // false
console.log(Number.isFinite(NaN));      // false
console.log(Number.isFinite(Infinity));  // false
console.log(Number.isFinite(0/1));   // true
console.log(Number.isFinite(1/0));    //false

console.log(0/1);   // 0
console.log(1/0);  // Infinity


//--------------------------------------------------------------

// Number Conversion Methods

// Number.parseInt() -> Converts a string to an integer

console.log(Number.parseInt("123"));   // 123
console.log(Number.parseInt("123.76"));  //123


// It can also parse a number from the begining of a String
console.log(Number.parseInt("123abc"));    // 123



//-----------------------------------------------------------------

// Number.parseFloat()

console.log(Number.parseFloat("123.56"));   // 123.56
console.log(Number.parseFloat("123.56abc"));  // 123.56

//-----------------------------------------------------------------



// toLoacleString()   -> Used to format a number according to a particular country's/region's number-formatting rules.

const e = 123456789;

console.log(e.toLocaleString());  // 123,456,789
console.log(e.toLocaleString("en-IN"));   // 12,34,56,789

// for currency

console.log(e.toLocaleString("en-IN",{style: "currency", currency: "INR"}));   // ₹12,34,56,789.00


