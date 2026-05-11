// The JavaScript for..of statement loops through the elements of an iterable object.
// Iterating means looping over a sequence of elements.
// Iterating Over - String, Array, Set, Map.
// for used when index is needed, for-of used when only value needed.

/*
Syntax-

for(let variable of iterable){
     // code
}

*/

// String for-of loop Example
let count=0;
let str = "JavaScript - WebDev";
for(let x of str){
    console.log(x);
    count++;
}
console.log("String Size: "+count);

console.log("---------------------------------");

// Array for-of loop Example
const cars = ["Hyundai","Kia","Ford","Volkswagen","Nissan"];
for(let car of cars){
    console.log(car);
}

console.log("---------------------------------");

const id = [234,235,236,237,238];
for(let x of id){
    console.log(x);
}

console.log("---------------------------------");



// for-in loop
// for-in used to loop through keys(property names / indexes).

/*
Syntax:-
for(let key in object){
    //code
}
*/

// Object for-in loop Example (Main use case)
let obj = {name:"Kelly",id:234,city:"London"};
for(let x in obj){
    console.log(x+" - "+obj[x]);
}

console.log(" ");

// Array for-in loop example
let fruit = ["Apple","Banana","Kiwi","Mango"];
for(let x in fruit){
    console.log(x);    //it will only print the index i.e. 0,1,2,3,4..... not values, because array indexes are keys
}
