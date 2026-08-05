// filter() method
// The filter() method is used to create a new array containing only the elements that satisfy a given Condition.

// Returns a new array
// Does not modify the original array
// The callback function must true or false

// Example 1. filter numbers > 4

let arr = [2,3,5,6,7];

let myNums = arr.filter(x => x>4);
console.log(myNums);   // [2,3,5,6,7]



// Example 2. filter even numbers

let arrs = [2,3,4,5,6,7,8];
let evenNums = arrs.filter(x => x%2===0);
console.log(evenNums);    // [2,4,6,8];

// Example 3. filter strings by length

const fruits = ["Apple", "Kiwi", "Banana", "Fig"];

const longNames = fruits.filter(fruit => fruit.length > 4);

console.log(longNames);    // ["Apple", "Banana"]

// Example 4. filter objects
const users = [
    { name: "Rahul", age: 20 },
    { name: "Priya", age: 17 },
    { name: "Ankit", age: 25 }
];

const adults = users.filter(user => user.age >= 18);

console.log(adults);
// Output:
//  [
//  { name: "Rahul", age: 20 },
//   { name: "Ankit", age: 25 }
//  ]
