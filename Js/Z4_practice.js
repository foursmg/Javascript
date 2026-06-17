console.log("--1--------------------------------------");

// 1. Create an array of Numbers [5,6]. Add 4 at the begining and 7 at the end of the array.

{
let arr = [5,6];
let arr1 = arr.unshift(4);  //Adding a element at beining of the array.
console.log(arr1);          // 3  // The unshift() method returns new array length
console.log(arr);           // (3) [4, 5, 6]

let arr2 = arr.push(7);
console.log(arr2);          // 4
console.log(arr);          //  (4) [4, 5, 6, 7]
}
//-----------------------------------------------------------------
/*

 + Adding element in Array
unshift() : add an element at the begining of the array. 
push()    : add an element at the end of the array.

 - Removing elemet from Array
shift()   : Remove the first element from array and lower the index of rest accordingly
pop()     : Remove the last element from Array 

*/
//-------------------------------------------------------------------

console.log("--2--------------------------------------");

// 2. Create a method to return an element at a particular position in the array.

{
let arr = [23,45,8,"delhi",3.33,54];
console.log(arr.at(4));   //3.33
}

