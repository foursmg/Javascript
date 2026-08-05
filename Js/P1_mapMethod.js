// Map
// map() is used to create a new array by applying a function to every element of an existing array.
// It doesnot mdify the original array.

// Returns a new array.
// Does not modify the original array.
// Executes the callback for every element.
// The new array always has the same length as the original array.

// Example 1.

const arr = [2,3,4,5];

function double(x){
    return x*2;
}

let mydoubles = arr.map(double);
console.log(mydoubles);    // [4,6,8,10]



// Example 2.

const nums = [2,3,4,5];

function triple(x){
    return x*3;
}

let myTriples = nums.map(triple);  
console.log(myTriples);   // [6,9,12,15]


// Example 3. nums to binary

const myNums = [2,3,4,5];

function binary(x){
    return x.toString(2);
}

let myBinarys = myNums.map(binary);

console.log(myBinarys);   // ['10', '11', '100', '101']


// Now the same thing thing but this time instead of passing function reference we pass the function itself in map()
// Insdead of writing function separatly for specific task we write it in map() itself

// Example 1
let arrs = [12,13,14,15];

let doubleNums = arrs.map(function(x){return x*2;});
console.log(doubleNums);   // [24, 26, 28, 30]

// Example 2 
let numbers = [12,13,14,15];

let tripleNums = arrs.map((x)=> x*3);  // Using arrow function
console.log(tripleNums);  // [36, 39, 42, 45]

// Example 3
let myArr = [12,13,14,15];
let binaryVal = myArr.map(x => x.toString(2));
console.log(binaryVal);   // ['1100', '1101', '1110', '1111']



// Example 4. Convert names to uppercase

let names= ["Anil","sunil","Kapil","ismail"];

let myNames = names.map(x => x.toUpperCase());
console.log(myNames);    // ['ANIL', 'SUNIL', 'KAPIL', 'ISMAIL']


// Example 5. Extract a property from objects

let users = [
    {id:1, name:"Rakesh"},
    {id:2, name:"Sachin"},
    {id:3, name:"Deepak"},
    {id:4, name:"Kailash"}
];

let userName = users.map(user => user.name);
console.log(userName);   // ['Rakesh', 'Sachin', 'Deepak', 'Kailash']



