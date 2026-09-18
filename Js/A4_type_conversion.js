// numeric string used with + gives string type
let result;

// integer + String = String
// integer + boolean = integer
// integer + null = integer 

console.log(7 + "abc");   // 7abc
console.log(8+true);      // 9
console.log(12+null);     // 12



// convert number to string
result = "3" + 2; 
console.log(result, "-", typeof(result)); // 32 - string

result = "3" + true; 
console.log(result, "-", typeof(result));  // 3true - string

result = "3" + null; 
console.log(result, "-", typeof(result));  // 3null - string
// If any number is put inside quotes, the rest of the numbers will be treated as Strings, and concated.

console.log(3+"2");      //32
console.log("1"+2+2);   // 122
console.log(1+2+"2");   // 32



console.log("-----------");

let resultt;

// convert string to number
resultt = Number("5");
console.log(resultt, "-", typeof(resultt));  // 5 - number

// convert number to String
resultt = String(55);
console.log(resultt, "-", typeof(resultt));  // 5 - string

// convert boolean to string
resultt = String(true);
console.log(resultt, "-", typeof(resultt));  // true - string

// convert number to boolean
resultt = Boolean(0);
console.log(resultt, "-", typeof(resultt));  // false - boolean

//let resultt = String(potato);                   // error
console.log(resultt+ " - " + typeof(resultt)); // Error