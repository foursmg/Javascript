// forEach()
// forEach() in JavaScript is an array method used to run a function once for each element of an array.
//"Go through every item and do something with it."


//Example 1
let nums1 = [22,33,44,55,66];
nums1.forEach(function(num){
    console.log(num);
});



// Example 2
// Using Arrow Function  
let numbers = [43,56,78,53,11];
numbers.forEach(x=> console.log(x));



//****** 
//Example 3
// Getting the index, forEach() can give three values:
/*
Syntax:

array.forEach(function(element,index,array){
        .....
})

*/
let cars = ["Honda","Toyota","Kia","Audi","Suzuki"];
cars.forEach((cars,index)=>{
    console.log(cars," - ",index);
})

// Example 3.1 - for each loop with index
let arr = ["car","bike","truck","bicycle","Scooter"];
arr.forEach(function(elements,index){
    console.log(elements, index);
});



// Example 4
let myNums = [2,3,5,7,8,9];
myNums.forEach(x =>{
    if(x>5){
        console.log(x);
    }
})



// forEach() doesn't create a new array
// forEach() is mainly for performing an action on each element.

//=============================================================================================================================


// Below content from BA10_forEachLoop.js



// For Each Loop
// A method for array iteration, often preferred for readability.

// The forEach() method is an array method in Js that executes a function once for every element in the array.

arr = [11,22,33,44,55,66]

// Traditional method
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//Using forEach Loop

arr.forEach(function(nums){
    console.log(nums);
});
// or this instead of above
arr.forEach((num)=> console.log(num+" #"));


// Using return in forEach loop is similar to  continue in traditional loops.
// Not straightforword to break out of a forEach loop.
// When you need to perform an anction on each array element and don't need to break early.


// For each loop
// The forEach() method in JavaScript is used to iterate over every element of an array.
// We cannot use break in forEach Loop. 

//Example: 1   Print Every Element
let nums = [1,23,45,67,89];

console.log(nums);

nums.forEach(function(num){
    console.log(num);
});

// or same can be written using arrow function

nums.forEach(num=>{
    console.log(num);
})


//Example: 2    Access Index

let fruits  = ["Apple", "Banana", "Mango"];

fruits.forEach((fruit,index)=>{
    console.log(index,fruit);
})


// Example: 3 Sum of Array

let number = [5,10,15,20,25];

let sum= 0;

number.forEach(num=>{
    sum = sum + num;
})
console.log("Sum: "+sum);

// Example : 4 Array of Objects

let students = [
    {name:"Lisa",roll: 12},
    {name:"Mona",roll: 13},
    {name:"Katy",roll: 14},
    {name:"Lia",roll: 15},
]

students.forEach(student =>{
    console.log(student.name+" : "+ student.roll);
});


// Example : 6 HML Generation (similar to your Myntra Project)
let items = [

    {name: "Shirt", Price: 799},
    {name: "Pant", Price: 1799},
    {name: "Kurta", Price: 899},
    {name: "Saree", Price: 1099},
]

let html ="";

items.forEach(item=>{
    html += `
        <div>
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
        </div>
    `;
});




//---------------------------------------------------
