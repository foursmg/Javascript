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


// Using return in forEach loop is similar to  continue in tradistional loops.
// Not straightforword to break out of a forEach loop.
// When you need to perform an anction on each array element and don't need to break early.