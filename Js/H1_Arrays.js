/*
Arrays
An Array is an object type designed for storing data collections.
Key characteristics of JavaScript arrays are:
Elements: An array is a list of values, known as elements.
Ordered: Array elements are ordered based on their index.
Zero indexed: The first element is at index 0, the second at index 1, and so on.
DYNAMIC SIZE: Arrays can grow or shrink as elements are added or removed.
Heterogeneous: Arrays can store elements of different data types (numbers, strings, objects and other arrays).

Syntax for creating an array
const array_name = [item1, item2, item3......];

*/
console.log("---------------(Creating an Array)--------------")

const cars = ["Volvo","Honda","Toyota","Kia","Ford","Hyundai"];
console.log(cars);  //(6) ['Volvo', 'Honda', 'Toyota', 'Kia', 'Ford', 'Hyundai']

// Can also Create an Empty Array
const city = [];
console.log(city);  //[]
//And Assign values
city[0] = "Hydrabad";
city[1] = "Pune";
city[2] = "Ranchi";
city[3] = "Varansai";
city[4] = "Chennai";
console.log(city); // (5) ['Hydrabad', 'Pune', 'Ranchi', 'Varansai', 'Chennai']

//Creating Arrray Using new Keyword
const bikes = new Array("Yamaha","Honda","Triumph","Suzuki","Jawa");
// This new keyword method does the same as above two example, There is no need to use new Array()


//Arrays containing Different data type
const arr1 = ["Rose",30,"Bicycle",3.231,true,1234567890n,undefined,null];
console.log("Arrays With different Data types: "+arr1);  // (8) ['Rose', 30, 'Bicycle', 3.231, true, 1234567890n, undefined, null]


console.log("----------------(Accessing Array Elements)--------------------");

console.log(cars[0]);  //Volvo  //Accessing 1st element with index 0
console.log(cars[cars.length-1]); // Accessing last element with .length-1
console.log(cars[3]); //Kia


console.log("----------(Chagin an Array Element)----------");

cars[0] = "Renault";
console.log(cars);  //(6) ['Renault', 'Honda', 'Toyota', 'Kia', 'Ford', 'Hyundai']

console.log("--------(Adding Array Elements)----------------");

//Adding ne element to an array using push() method
cars.push("Tata"); //psuh method add elements to the end of array
console.log(cars);  //(7) ['Renault', 'Honda', 'Toyota', 'Kia', 'Ford', 'Hyundai', 'Tata']

//Using length property for adding element
cars[cars.length] ="Audi";
console.log(cars);  //(8) ['Renault', 'Honda', 'Toyota', 'Kia', 'Ford', 'Hyundai', 'Tata', 'Audi']

console.log("");
console.log("--------------(Converting An Array to a String)_____________");

console.log(cars);  //(8) ['Renault', 'Honda', 'Toyota', 'Kia', 'Ford', 'Hyundai', 'Tata', 'Audi']
// toString() converts an Arrays to a String of (Comma Separated) array values
console.log(cars.toString());  // Renault,Honda,Toyota,Kia,Ford,Hyundai,Tata,Audi


console.log("");
console.log("------------------(Arrays are Object)-------");

console.log(typeof(cars)); //object
//Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
//But, JavaScript arrays are best described as arrays.

//Object uses names to access its "members".
const person = {
    name: "Kalyan",
    city: "Lucknow",
    age : 54
}
console.log(person);  //{name: 'Kalyan', city: 'Lucknow', age: 54}
console.log(person.name);  //kalyan

console.log("-----------------(Looping Array Elements)----------------")

//Using For Loop
console.log("for Loop");
for(let i=0;i<cars.length;i++){
    console.log(cars[i]);
}

console.log(" ");

//Using while Loop
console.log("while Loop");
let i=0;
while(i<cars.length){
    console.log(cars[i]);
    i++;
}

console.log("");

//for each loop
console.log("for-of Loop");
for(let car of cars){
    console.log(car);
}


console.log("");
console.log("----------------(Nested Arrays and Objects)-----------------")

//Values in objects can be arrays, and values in arrays can be objects:

const myObj = {
    name: "Chris",
    age: 32,
    cars : [
        {name:"Ford", models: ["Fiesta","Focus","Mustang"]},
        {name:"Tata", models:["320","X3","X7"]},
        {name:"Fiat",models:["500","Panda"]}
    ]
}

console.log(myObj);  // {name: 'Chris', age: 32, cars: Array(3)}
console.log(myObj.cars[0]);  //{name: 'Ford', models: Array(3)}
console.log(myObj.cars[0].models);   //(3) ['Fiesta', 'Focus', 'Mustang']
console.log(myObj.cars[0].models[1]); //focus






