// Strings are for Storing text
// String is a sequence of characters used to represent text

// Creating String :  let str = "Apple";
// String Length : str.length
// String Indices : str[0], str[1], str[2]

let str = "Apple";
console.log(str);

console.log("");

let quote = "Bhagat Singh 'Inquilab Zindabad'";
console.log(quote);

console.log("");

// The backslash escape character (\) turns special characters into string characters
let strSequence = " Apple \'  \"  \\ ";  
console.log(strSequence);     // Apple ' " \

console.log("");

console.log("------------------------------------------");

//String Primitive - string Objects;  

//Primitives are compared by value
//Objects are compared by reference

// == compares values after type conversion (automatic type conversion also called type coercion).
// === compares value without type conversion, checks (i)Same Type (ii)Same values
//Prefer ===

//String as Object  - Comapring two objects return false;
let name1 = "john";   //String primitive 
let name2 = "john";   //Also a String Primitive  
let name3 = new String("john");   //String Object

//primitives are compared by values
console.log(name1==name2);  //true,  Both are primitive strings with same value
console.log(name1 === name2); //true,  === check (i) Same Type?, (ii) Same value?; here both string and value john same -> true
//!!
console.log(name1== name3); //true, When == compares different types, JavaScript tries type coercion.
                            //It converts the String object to primitive
                            // Now Comparison becomes String == String 

console.log(name1===name3); //false, === does NO type conversion, It checks exact type first. 
                            //compare: name1-Primitive, name2-Object -> Different types -> false
//for Objects, === also checks for reference identity.
let name4 = new String("john");
console.log(name3==name4);   //false, compares Object references
console.log(name3===name4);  //false, Also checks reference identity


                            