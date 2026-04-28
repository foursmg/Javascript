//Taking input from user

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

