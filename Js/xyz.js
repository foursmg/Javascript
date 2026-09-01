let users = [
    {id:1, name:"Akshay", age:43},
    {id:2, name:"Shubham", age:3},
    {id:3, name:"Akash", age:43},
    {id:4, name:"Ashwin", age:3},
    {id:5, name:"Akansha", age:34},
];

let ageGroup = users.reduce((acc,curr)=>{
    if(acc[curr.age]){
        acc[curr.age]++;
    }else{
        acc[curr.age]=1;
    }
    return acc;
},{});

console.log(ageGroup);


let nums = [1,2,3,4,5];
let sum = nums.reduce((acc,curr)=>{
    return acc+curr;
},0);

console.log(sum);