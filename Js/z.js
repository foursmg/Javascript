let nums = [7,2,3,4,5,6,87,3,2,1];

// 
let arraySum = function(arr){
    let sum = 0;
    for(let i=0;i<arr.length;i++){
        sum = sum+ arr[i];
    }
    return sum;
}

let sum = arraySum(nums);

console.log(sum);

// USing reduce()

let mySum = nums.reduce((acc,curr)=>{
    acc = acc + curr;
    return acc;
},0);

console.log(mySum);

//
function largest(arr){
    let n = 0;
    for(let i=0;i<arr.length;i++){
        if(n<arr[i]){
            n= arr[i];
        }
    }
    return n;
}

console.log(largest(nums));


// Using reduce()
let biggest = nums.reduce((max,curr)=>{
    if(max<curr){
        max=curr;
    }
    return max;
},0);
console.log(biggest);
