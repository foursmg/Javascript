// Numbers
// Javascript numbers are always stored as double precision floating pont numbers.(64-bit floating point)

 let x = 3432;
 let y = 3.333;

 //Extra large or extra mall numbers can be written with scientific (exponent) notation
 let largeNum = 123e5;
 console.log(largeNum); // 12300000
 let smallNum = 123e-5;
 console.log(smallNum);  //0.00123

console.log("");

//Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
let num1 = 123456789012345;
console.log(num1);    //123456789012345

let num2 = 123456789012345678910;
console.log(num2);  //123456789012345680000


//BigInt -> Can represent large number ussing BigInt
//Creating BigInt using n suffix
let num3 = 123456789012345678910n;
console.log(num3);  // 123456789012345678910n;  
//creating BigInt using BigInt() constructor with a String
let num4 = BigInt("12345678901234567891012345");
console.log(num4);  //12345678901234567891012345
//typeof BigInt -> bigint
console.log(typeof(num4));   //bigint
//BigInt supports Arithmetic operations and Comparison Operators (only between BigInt number, not BigInt and  Numbers)


console.log(" ");

// JavaScript uses the + operator for both addittion and concatenation
// Numbers are added. Strings are concatenated.

// add two numbers -> result number
{
    let num1 = 32;
    let num2 = 43;
    console.log(num1 + num2); //75
}

// All input string -> output -> String
{
    let x= "ABC";
    let y= "XYZ";
    let z= "10";
    console.log(x+y+z);   //ABCXYZ10
}

// Js interpreter works from left to right
// in first operation (x+y+z) : String+Number+Number-> since first is String it treats the rest as string also
// in 2nd operation (y+z+x) : Number + Number + String -> first two are number hence the arithmetic operation and then the string hence concatenation
{
    let x= "10";
    let y= 20;
    let z= 30;
    console.log(x+y+z);  //102030
    console.log(y+z+x);   //5010
}


{
    let x= 10;
    let y= 20;
    let z= "The result is: "+ x + y;
    console.log(z);  //The result is: 1020
    console.log(x+y+z);  // 30The result is: 1020
}


console.log(" ");

// JavaScript will try to convert strings to numbers in all numeric operations(/,*,-)
// except for + which get used for concatenation
{
    let x = "50";
    let y = "20";
    console.log(x/y);   //2.5
    console.log(x-y);   //30
    console.log(x*y);   //1000
    console.log(x%y);   //10
    console.log(x+y);   //5020
}

console.log(" ");


// NaN - Not a Number
// NaN is a reserved word indicating that a number is not a legal number.
// Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number)

{
    let x = 100;
    let y = "Apple";
    console.log(x+y);  //100Apple
    console.log(x/y); //NaN
    console.log(x-y); //NaN
    console.log(x*y);  //NaN
}

// isNaN() global Javascript function - used to find out if a value is not a number;
{
    let x=100;
    let y ="Apple";
    let product = x*y;
    console.log(isNaN(product)); // true
    console.log(typeof(product));  //number ->  typeof NaN returns number;
}

console.log(" ");

// Infinity: Division by 0 generates Infinity
{
    let x = 2/0;
    console.log(x);  //Infinity
    console.log(typeof(x));  //number -> typeof infinity is number
}












