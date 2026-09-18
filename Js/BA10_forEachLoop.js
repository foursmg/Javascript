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

let numbers = [5,10,15,20,25];

let sum= 0;

numbers.forEach(num=>{
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
