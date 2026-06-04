/*
Truthy And Falsy Values

100 is true

3.14 is true

-15 is true

true is true

"Hello" is true

"false" is true

(7 + 1 + 3.14) is true

[ ] is true

{ } is true

In JavaScript, both an empty array [ ] and an empty object { } are truthy because they are objects.

All objects in JavaScript evaluate to true in a boolean context, regardless of their content.


-----------------------------------------------------------------------------------------------------------



0 is false

"" is false

undefined is false

null is false

NaN is false

false is false

false Example:  let x = 0; let x = -0;  let x = "";   let x(The Boolean value of undefined is false:);   let x = null;
                let x = false; let x = 10 / "Hallo";




*/

//Comparison Operator returns true/false
console.log(6>7); //false
console.log(7>6);  //true
console.log(typeof(12<9)); //boolean


// Undefined - A variable has the value undefined when it has been declared but not assigned a value.
let x;
console.log(x); // undefined

// null - means intentional absence of a value. A programmer explicitly assigns it.
let user = null;
console.log(user);   //null

// NaN (Not a Number) - Represents an invalid numerical result.
console.log(0/0); //NaN
console.log(5/'hello'); //NaN
console.log(5/'5');  // 1
console.log(5/Number('5')); // 1
console.log(5/Number('Hello')); //NaN