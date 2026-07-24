/*

Anoymous function

Functions in javascript are first-class citizens; they can be assigned to varibales.
Anonymous function is a function without a name, and it can be stored in variables, passed as arguments, or returned from other functions.


*/

// 1. Anonymous function assigned to a varibale

let greet = function(){
    console.log("Hello");
};

greet();    //Hello


// 2. Anonymours function with parameters

let sum = function(a,b){
    return a+b;
}

console.log(sum(56,4));  // 60

let newSum = sum;   // passing the reference of sum to newSum

console.log(newSum(3,7));   //10
console.log(sum(2,9));      //11

console.log(typeof(sum));   // function


// 3. Stored in an Object; Anonyous function can be properties in objects.

let person = {
    name: 'kelly',
    age : 32,
    greet : function(){
        console.log("Hiiii");
    }
};

person.greet();   // Hiiii


let employee = {
    fname : "John",
    lname : "Doe",
    fullName : function(){
        console.log("Full Name: " + this.fname+" "+ this.lname);
    }

};

employee.fullName();  // Full Name: John Doe


// 4. Function passed as a value

//A function which will return addition of two numbers
let addTwoNum = function(num1, num2){               // *1
    return num1 + num2;
}


// A function which will return addition of 3 numbers, BUT
// we will use the above function which adds 2 num to get the addition of 3 numbers.

// Creating a function which will return addition of 3 Numbers

let addThreeNum =function(a,b,c,sum2Nums){    // *2  //sum2Nums now refers to the same function as addTwoNum.
    let sum1 = sum2Nums(a,b);                 //Calls addTwoNum(5, 3) → 8   // Stores 8 in sum1
    return sum2Nums(sum1,c);                  //Calls addTwoNum(8, 2) → 10 
}



console.log(addThreeNum(5,3,2,addTwoNum));   // 10


//Explanation:
// *1 first create a varibale addTwoNum which has function assigned to it (which returnes sum of two number)
// *2 Then we create a new function funcion which would return sum of 3 numbers, and assigned that function to variable addThreeNum

// calling the function addThreeNum for addition of 3 numbrs:
// we pass 3 number a,b,c and a varibale Name addTwoNum which has sum of 2 number function assigned to it.
// inside addThreeNum function first we create a sum2 varibale in which we will store the value(sum of a and b) returned from addTwoNum
// now sum of a and b is stored in sum1, and now we will pass that number and value of c to addTwoNum and we will have addition of all three number.



