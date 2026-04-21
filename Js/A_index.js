console.time('Tracking Time') //here tracking time is an identifier
console.log('Hello JavaScript');
console.log("hii");
console.log(1+2);
console.log(3%2);
console.log("Boolean "+ true);
console.log([11,22,33,44,55]);
console.log({Bike: "Honda", Model: 650});
console.table({Bike: "Honda", Model: 650});
console.warn("Warning!!!");
console.timeEnd('Tracking Time');

console.assert(24>18, 'Age > 18 Means Vote!!!'); //No error Nothing
console.assert(24<18,'Age>18'); //Error
// console.assert() 
// If Condition true -> Nothing Happens
// If Condition false -> It Prints an error message in the console
// it does not stops execution or crash program -> Only Logs a message in console (for debugging)

//console.error("This is an Error");
//console.clear();