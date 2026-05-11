// Template strings (usually called template literals) are a modern JavaScript way to create strings.
// They make string formatting much cleaner than using +.
// Template Strings use back-ticks (``) rather than the quotes ("") to define a string

let a=23, b=45;
let sum = a + b;
//With String Template - Template String allows varibales in Strings.
//Interpolation - InterPolation works only with templpate Literals(backticks) 
// ${} means insert value - Interpolation -> Inserting a value inside a String.
console.log(`Sum of ${a} + ${b} = ${sum}`);
// can put expression inside the ${} also  - Interpolation with Expressions
console.log(`Sum of ${a} + ${b} = ${a+b}`);

//Without String Template
console.log("Sum of "+a+" + "+ b+" = "+sum);

console.log(" ");

//multiline - Template Strings allow multiline Strings
console.log(`Johny, Johny
(Yes, papa)
Eating sugar?
(No, papa)
Telling lies?
(No, papa)
Open your mouth
(Ah, ah, ah)`);

