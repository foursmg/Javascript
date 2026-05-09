// numeric string used with + gives string type
let result;

// integer + String = String
// integer + boolean = integer
// integer + null = integer 

// convert number to string
result = "3" + 2; 
console.log(result, "-", typeof(result)); //String

result = "3" + true; 
console.log(result, "-", typeof(result));  //String

result = "3" + null; 
console.log(result, "-", typeof(result));  //string
// If any number is put inside quotes, the rest of the numbers will be treated as Strings, and concated.

console.log("-----------");

let resultt;

// convert string to number
resultt = Number("5");
console.log(resultt, "-", typeof(resultt));

// coonvert number to String
resultt = String(55);
console.log(resultt, "-", typeof(resultt));

// convert boolean to string
resultt = String(true);
console.log(resultt, "-", typeof(resultt));

// convert number to boolean
resultt = Boolean(0);
console.log(resultt, "-", typeof(resultt));