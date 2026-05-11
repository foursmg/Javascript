//Methods
//JavaScript strings are primitives, but they behave like objects when you call methods on them.
//JavaScript temporarily wraps the primitive string so methods/properties work.

//1. length - get Number Of characters - incliudes white Space also
let fruit = "Mango is a Summer Fruit.";
console.log(fruit.length); //23 

//2. toUpperCase - Converts to uppercase
console.log(fruit.toUpperCase());   //MANGO IS A SUMMER FRUIT

//3. ToLowerCase()
console.log(fruit.toLowerCase());

//4. trim() - Removes spaces from start to end, But doesn't removes space from middle
let str = "   Apple   Banana   ";
console.log(str.trim());

//5. includes() - checks if substring exists. Case Sensitive
console.log(fruit.includes("ummer"));  //true
console.log(fruit.includes("summer"));  //false, case-senstive

//6. startsWith() - checks begining, Case Sensitive
console.log(fruit.startsWith("Man"));  //true

//7. endsWith() - checks ending.
console.log(fruit.endsWith("uit")); //false
console.log(fruit.endsWith("uit.")); //true

console.log(" ");

//8. slice() - Extract part of String; slice(a,b) -> a included, b excluded
console.log(fruit.slice(0,3)); //Man
console.log(fruit.slice(6,17)); // is a Summer
//if secomd parameter is omitted
console.log(fruit.slice(6)); //is a summer fruit
//if parameter negative - Position is counted from the end of the String 
console.log(fruit.slice(-6));  //Fruit

//9. subString() - Similar to Slice - Slice Preferred.

console.log("");

//10. replace() - Replace first match
let strValues = "Mango Mango apple apple Mango mango ";
console.log(strValues.replace("Mango","Watermelon")); //Watermelon Mango apple apple Mango mango 
console.log(strValues); // Mango Mango apple apple Mango mango

console.log(" ");

//11. replaceAll() - Replace all matches
console.log(strValues.replaceAll("Mango","Orange")); // Orange Orange apple apple Orange mango

console.log(" ");

//12. split() - Converts string into array
console.log(fruit);  //Mango is a Summer Fruit.
console.log(fruit.split()); // ['Mango is a Summer Fruit.'], i=0, length=1;

console.log("");

//13. charAt() - gets character at index 
console.log(fruit.charAt(3)); //g
//Can Use this instead in Js
console.log(fruit[3]); //g

//14. indexOf() - Find first Occurrence.
console.log(strValues.indexOf("Man")); //0
console.log(strValues.indexOf("apple")); //12

//15. concat() - joins String
let a = "Apple";
let b = "Banana";
console.log(a.concat(" ",b)); //Apple Banana





