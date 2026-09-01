// filter() method
// The filter() method is used to create a new array containing only the elements that satisfy a given Condition.

// Returns a new array
// Does not modify the original array
// The callback function must true or false

// In filter(), the return value is treated as a yes/no decision, not as the new value.
// 

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



//------------------------//
// map & filter togeather //

let primeUsers = [
    {id:1,name:"Chris",age:39},
    {id:2,name:"Steve",age:9},
    {id:3,name:"Tom",age:32},
    {id:4,name:"Heath",age:41},
    {id:5,name:"Jake",age:3},
];

// map Example - returns the array of same length 
let usersName = primeUsers.map(user => user.name);
console.log(usersName);   // ['Chris', 'Steve', 'Tom', 'Heath', 'Jake']



// filter Example - retruns only those elements which satisfies True/False condition
let adultUsers = primeUsers.filter(user => user.age>18);
console.log(adultUsers);
//OUTPUT: 
//  [
//   {id:1,name:'Chris',age:39}
//   {id:3,name:"Tom",age:32}
//   {id:4,name:"Heath",age:41}
//  ]



// filter & map Togeather
// Suppose we want only the names of users who are older than 18
let adultUserNames = primeUsers.filter(user => user.age>18).map(user => user.name);
console.log(adultUserNames);
