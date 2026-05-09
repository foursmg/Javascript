//Operator
//JavaScript operators are special symbols that perform operations on one or more operands (values).

//Arithmatic Operator - Calculation like addition, subtraction, multiplication

let a= 5;
var b= 2;

// 5 + 2; here  Operand-> 5,2;   Operator -> +

console.log("Addition: "+a+"+"+b+"="+ (a+b));

console.log("Subtraction: "+a+"-"+b+"="+ (a-b));

console.log("Multiplication: "+a+"*"+b+"="+ (a*b));

console.log("Division: "+a+"/"+b+"="+ (a/b));

console.log("Remainder: "+a+"%"+b+"="+ (a%b));

console.log("------------------------------");


//String Addition
let fname = "john";
var lname = 'doe';
var name = fname + " "+ lname;
console.log(name);

console.log("------------------------------");

//increment Operator
console.log(++a); //6
console.log(a++); //6  but after printing 6 a has incremented to 7
console.log(a);   //7

//decrement Operator
console.log(b--); //2
console.log(--b); //0
console.log(++b); //1
console.log(++b);  //2

console.log("-------------------------------------");

//Exponentiation Operator:  a^b =  a**b 
console.log("Exponenetiation(power): "+a+"**"+b+"="+(a**b));

console.log("--------------------------------");

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

console.log("------------------------------");

//Comparison Operator
// equal to operator
console.log("Equal to: 2 == 2 is", 2 == 2);


//-------------------------------------------------
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

// equal Operator ==    vs     Strictly Equal Operator ===

//Equal Operator(==) Compares value after type Conversion(type coercion) if the types are different
var num1 = 54;    //integer
var num2 = "54";  //String
console.log(num1+"(Integer) == "+num2+"(String): "+(num1==num2));

//Strictly equals === compares value and Data type, No type Conversion happens
console.log(num1+"(Integer) === "+num2+"(String): "+(num1===num2));

console.log("--------------------------------");


// greater than operator
console.log("Greater than: 3 > 3 is", 3 > 3);

// less than operator
console.log("Less than: 2 > 2 is", 2 > 2);

// greater than or equal to operator
console.log("Greater than or equal to: 3 >= 3 is", 3 >= 3);

// less than or equal to operator
console.log("Less than or equal to: 2 <= 2 is", 2 <= 2);

//String Comparison
let text1 = "A";
let text2 = "B";
let result = text1< text2; // true, Strings are compare alphabetically 
console.log(result);

let Num1= 34;
let Num2 = 43;
result = Num1>Num2;
console.log(Num1>Num2);   //false;




console.log("--------------------------------");


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

{
    let a = 2, b=3;
    let AND = a&b;
    console.log(AND); //2

    let OR = a|b;
    console.log(OR);  //3

    let NOT = ~a;
    console.log(NOT);
    
}

{
    let number = 56;
    if((number&1)==1){
        console.log(number+" is Odd Number.");
    }else{
        console.log(number+" is even Number.");
    }
}