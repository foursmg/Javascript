//Operator
//JavaScript operators are special symbols that perform operations on one or more operands (values).

//Arithmatic Operator - Calculation like addition, subtraction, multiplication

let a= 5;
var b= 2;

console.log("Addition: "+a+"+"+b+"="+ (a+b));

console.log("Subtraction: "+a+"-"+b+"="+ (a-b));

console.log("Multiplication: "+a+"*"+b+"="+ (a*b));

console.log("Division: "+a+"/"+b+"="+ (a/b));

console.log("Remainder: "+a+"%"+b+"="+ (a%b));

//increment Operator
console.log(++a); //6
console.log(a++); //6  but after printing 6 a has incremented to 7
console.log(a);   //7

//decrement Operator
console.log(b--); //2
console.log(--b); //0
console.log(++b); //1
console.log(++b);  //2

//Exponentiation Operator:  a^b =  a**b 
console.log("Exponenetiation(power): "+a+"**"+b+"="+(a**b));


//Asignment Operators

//Assignment Operator
let x = 45;
console.log(x);  //45

console.log("Addition Assignment: "+(x += 10 )); //55
console.log(x); //55
console.log("Subtraction Assignment: "+(x -= 10 )); //45
console.log("Division Assignment: "+(x /= 2)); //22.5
console.log("Remainder Assignment: "+(x %= 3)); //1.5
console.log("Multiplication Assignment: "+(x*=8)); //12
console.log("Exponenetiation Assignment: "+(x**=2));//144

//Comparison Operator
// equal to operator
console.log("Equal to: 2 == 2 is", 2 == 2);

// not equal operator
console.log("Not equal to: 3 != 3 is", 3 != 3);

// strictly equal to operator
//Checks value+data type, NO type Conversion
console.log(5 === 5);     // true
console.log(5 === "5");   // false (number ≠ string)
console.log(true === 1);  // false
console.log("Strictly equal to: 2 === '2' is", 2 === '2');

// strictly not equal to operator
//Opposite of ===
//Checks value + data type
//Returns true if either value OR type is different
console.log(5 !== 5);     // false
console.log(5 !== "5");   // true (different type)
console.log(true !== 1);  // true
console.log("Strictly not equal to: 2 !== '2' is", 2 !== '2');

// greater than operator
console.log("Greater than: 3 > 3 is", 3 > 3);

// less than operator
console.log("Less than: 2 > 2 is", 2 > 2);

// greater than or equal to operator
console.log("Greater than or equal to: 3 >= 3 is", 3 >= 3);

// less than or equal to operator
console.log("Less than or equal to: 2 <= 2 is", 2 <= 2);



//Logical Operator
let xx = 3;

// logical AND
console.log((xx < 5) && (xx > 0));  // true
console.log((xx < 5) && (xx > 6));  // false

// logical OR
console.log((xx > 2) || (xx > 5));  // true
console.log((xx > 3) || (xx < 0));  // false

// logical NOT
console.log(!(xx == 3));  // false
console.log(!(xx < 2));  // true