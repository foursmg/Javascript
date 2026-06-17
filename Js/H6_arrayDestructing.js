// Array Destructring 
// Array destructuring lets extract values from an array and assign them to variables in a single statement.

//Instead of writing this
let arr = [1,22,32,12];
let a = arr[0];
let b = arr[1];
let c = arr[2];
let d = arr[3];
console.log(`a: ${a}, B:${b}, C: ${c}, D: ${d} `);  // extract values from an array and assign them to variables in a single statement.

//we Can write this
let [w,x,y,z] = arr;
console.log(`w: ${w}, x:${x}, y: ${y}, z: ${z} `);  // w: 1, x:22, y: 32, z: 12

//Another Example
let fruits = ["mango","Orange","papaya","Ananas"];
let [fruit1,fruit2,fruit3,fruit4] = fruits;
console.log(fruit1);  //mango

//Skipping Elements using comma
let [f1,,,f4] = fruits;
console.log(f1);  //mango
//console.log(f2); // Error since f2 not defined
console.log(console.log(f4)); //Ananas