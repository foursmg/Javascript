// Reduce()
// The reduce() method in JavaScript is used to reduce an array to a single value by applying a function to each element.
// The final result can be:
//          A number (sum,product,max,min)
//          A string
//          An object
//          An array
//          Any other value

// Syntax:
// array.reduce((accumulator, currentValue, index, array) => {
//     return updatedAccumulator;
// }, initialValue);

// Example 1. Sum of Numbers in the array-------

const arr = [1,2,3,4,5];

// Normally we would do this

function sum(nums){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum = sum + arr[i];
    }
    return sum;
}

console.log(sum(arr)); // 15

// Same thing using reduce()

let output = arr.reduce((acc,curr)=>{
    acc= acc + curr;
    return acc;
},0);   // this 0 here is initializing acc with 0, i.e.  acc=0;

console.log(output);   // 15




// Example 2. Biggest element
const nums = [5,2,8,3,6];

// How we would do it normally
function findMax(nums){
    let max=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]>max){
            max= nums[i];
        }
    }
    return max;
}

console.log(findMax(nums));  // 8


// using method function

const myOutput = nums.reduce(function(max,curr){
    if(curr>max){
        max= curr;
    }
    return max;
},0);

console.log(myOutput);  //8
