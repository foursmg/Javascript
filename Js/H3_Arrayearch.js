// indexOf()
// The indexOf() method searches an array for an element value and returns its position.

const fruits = ["Apple","Guava","Mango","Ananas","Kiwi"];

console.log(fruits.indexOf("Apple"));  //0
console.log("Position: "+(fruits.indexOf("Kiwi")+1)); // Position: 5
const fruit = ["apple","banana","apple","mango","kiwi"];


//lastIndexOf()
//Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.
console.log(fruit.lastIndexOf("apple"));  //2

// includes()
// Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).
console.log(fruit.includes("apple"));  //true
console.log(fruit.includes("Apple"));  //false


console.log("---------------------------");


//find()
//The find() method returns the value of the first array element that passes a test function.
// find() is an array method used to get the first elemet that satisfies a condition.
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(first);  //25


//findlastIndex()
//The findIndex() method returns the index of the first array element that passes a test function.
const numbers1 = [4, 9, 16, 25, 29];
let first1 = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(first1); //3


//findlast()
// findLast() method that will start from the end of an array and return the value of the first element that satisfies a condition.
const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);
console.log(high); //42

//findLastIndex()
//The findLastIndex() method finds the index of the last element that satisfies a condition.
const temp1 = [27, 28, 30, 40, 42, 35, 30];
let pos = temp1.findLastIndex(x => x > 40);
console.log(pos);  //4
