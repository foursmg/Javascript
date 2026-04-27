// numeric string used with + gives string type
let result;

// convert number to string
result = "3" + 2; 
console.log(result, "-", typeof(result));

result = "3" + true; 
console.log(result, "-", typeof(result));

result = "3" + null; 
console.log(result, "-", typeof(result));

let resultt;

// convert string to number
resultt = Number("5");
console.log(resultt, "-", typeof(resultt));

// convert boolean to string
resultt = String(true);
console.log(resultt, "-", typeof(resultt));

// convert number to boolean
resultt = Boolean(0);
console.log(resultt, "-", typeof(resultt));