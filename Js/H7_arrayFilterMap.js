// filter() method is an array method in Js that creates a new array containing only the eleemnts that satisfy a given condition.
// Every element is checked, and only those that pass the test are kept,
// Returns new Array
// Does not modify the original array
// Checks every elemet
// Returns an empty array if no element matches.
// The callback should return true or false.


console.log("-----------------filter Method--------------");

// 1. Filter Even Numbers

let numbers = [1, 2, 3, 4, 5, 6];

let evenNumbers = numbers.filter((num) => {
    return num % 2 === 0;
});

console.log(evenNumbers);



// 2. Filter Numbers greater than 50

let nums = [23,45,67,89,66,55,21];
let nums50 = nums.filter((num)=> {
    return num >= 50;
});

console.log(nums50);


// 3. Filter Strings - Filtering the fruit which has length greater than 5

let fruits = ["Apple","Banana","Kiwi","Pomegranate","Mango"];
let fruit5 = fruits.filter((fruit)=> {
    return fruit.length > 5;
});

console.log(fruit5);


// 4. Filter Objects

let students = [
    { name: "Rahul", marks: 85 },
    { name: "Aman", marks: 40 },
    { name: "Priya", marks: 91 }
];

let toppers = students.filter((student) => {
    return student.marks >= 80;
});

console.log(toppers);



console.log("--------------------- Map Method-----------------------");



// The map() method i an array method in JavaScript that creates a new array by applying a function to every element of the original array.
// it takes each element, changes it in some way, and returns a new array with the transformed values.

// Returns a new array.
// Does not modify the original array.
// Executes the callback for every element.
// The new array always has the same length as the original array.



// 1. Double each number (square)

let numbers = [1, 2, 3, 4];

let doubled = numbers.map((num) => {
    return num * 2;
});

console.log(doubled);

//Original remains unchanged
console.log(numbers);


// 2. Convert to uppercase
let fruits = ["apple", "banana", "mango"];

let upper = fruits.map((fruit) => {
    return fruit.toUpperCase();
});

console.log(upper);

// 3. Extract data from objects
let students = [
    { name: "Rahul", marks: 85 },
    { name: "Aman", marks: 40 },
    { name: "Priya", marks: 91 }
];

let names = students.map((student) => {
    return student.name;
});

console.log(names);


// 4. Add GST to price

let prices = [100, 200, 300];

let finalPrices = prices.map((price) => {
    return price * 1.18;
});

console.log(finalPrices);

