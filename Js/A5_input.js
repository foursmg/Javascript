//Taking input from user USing Prompt

//prompt() method
//prompt() always returns a String
let name = prompt("Enter your name: ");
console.log("Hello "+name);

console.log("------------------------");

let num = prompt("Enter a Number: ");
console.log(num); //here num is String even if number is entered.
console.log("Type of "+num+": "+typeof(num)); //string
let sum = num + 5;
console.log(sum);  

console.log("--------------------------");


//parseInt() to converting the input to a number(integer) 
let n = parseInt(prompt("Enter a n: "));
console.log(n);
console.log("Type of "+n+": "+typeof(n));
console.log(n+"+"+5+"= "+(n+5));

console.log("------------------------------");

//parseInt() ignores decimal numbers.
let deciNum = parseInt(prompt("Enter a decimal Number: "));
console.log(deciNum);
console.log("Type of "+deciNum+": "+typeof(deciNum));

console.log("------------------------------");

//for decimal use parseFloat()
var decimalNumber = parseFloat(prompt("Enter a decimal Number: "));
console.log(decimalNumber);
console.log("Type of "+decimalNumber+": "+typeof(decimalNumber));
console.log(decimalNumber+5); //decimal result



console.log("---------- taking a Number Input using parseInt vs Number---------------");
console.log("------------");

// Number()
// Use Number when want to accept both integers and decimal Values
// example:  Input        OutPUT
//             25            25
//             3.33          3.33
//             abc           NaN
//              ""            0
//              123abc        NaN
// Use Number if: need a Number , want strict validation, may accept decimal
// Number() requires the entire string to represent a valid number.
//try:
let xNum = Number(prompt("Enter a Number:: "));
console.log(xNum);


console.log("------------");

// parseInt()
// Use parseInt() when only integer part of input is needed.
// example:     Input                 Output
//               25                     25
//               3.33                    3
//               abc                     NaN
//               123abc                  123
//               abc123                  NaN
//                ""                     NaN
//       (prompt pressed enter or cancel with entering anything)               NaN
// use parseInt if: specifically need an integer, okay with "123abc" becoming 123, extracting numbers from string
// parseInt() parses from the beginning until it encounters an invalid character
// try these:
let yNum  = parseInt(prompt("Enter any Number: "));
console.log(yNum);


console.log("----------------------------------------");

//Optional content below
//Note: 
// Case 1:  when we use: prompt("Enter a value: "): and OK button is pressed without entering any value 
//                             it returns: "" 
// Example:   let val = prompt("Enter a Value"); and OK pressed with empty input
//                val = "";
// Case 2: when we use: prompt("Enter a value: "): and cancel button is pressed on prompt
//                             it returns: null
// Example:   let val = prompt("Enter a Value"); and cancel is pressed on prompt
//                val = null;

//In above both the cases:
// and when that val is contverted into number using: parseInt(val) 
//                                              i.e.: let num1 = parseInt(val); 
//                                        it returns: num1 = NaN

//and if val is converted into number using Number(): Number(val)
//                                              i.e.: let num2 = Number(val);
//                                        it returns: 0   

