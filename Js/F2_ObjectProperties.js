// Object Properties
// Properties are key:value Pairs
// A Javascript Object is collection of peroperties
// Properties can be changed, added, and deleted.

//Accessing Properties
const info = {
    fname: "Steve",
    lname: "Smith",
    empId: 234,
    city: "London",
} 
console.log(info);

// Accessing Properties using Dot Notation //Dot is preferred for readability and simplicity
// ObjectName.propertyName
console.log(info.empId);  //234
console.log(info.fname+" "+info.lname);   //Steve Smith

// Accessing properties using Bracket Notation
console.log(info["empId"]);  //234
//Bracket Notation is useful when the property name is stored in a variable.

let n1 = "fname";
let n2 = "lname";
let name = info[n1]+" "+info[n2];
console.log(name);  //Steve Smith

console.log("-------------------------------");


//Changing/Updating Properties
info.empId = 432;
console.log(info.empId);   //432

console.log("-----------------------------");

//Adding New Properties.
info.country = "England";
console.log(info);  //{fname: 'Steve', lname: 'Smith', empId: 432, city: 'London', country: 'England'}



console.log("=================================");


//Deleting Properties
//'delete' keyword deletes a property from an Object.
// 'delete' keyword deletes both the value and the property.
delete info.city;
console.log(info.city); //undefined
console.log(info);  //{fname: 'Steve', lname: 'Smith', empId: 432, country: 'England'}
delete info["country"];
console.log(info);  // {fname: 'Steve', lname: 'Smith', empId: 432}


console.log("----------------------------------");


//Check if a Property Exists
// 'in' operator is used to check ifa property exists in an object
let result = ("fname" in info);
console.log(result); // true cause fname:'Steve' exists in info object
result = ("contry" in info);
console.log(result); // false, country doesn't exists in info object


console.log("--------------------------------------");

// Adding Symbol to Object.

// Gets addes with Symbol(...)  wrapper
console.log(info);  // {fname: 'Steve', lname: 'Smith', empId: 432}
const town = Symbol("Kanpur");
info.city = town;
console.log(info)   // {fname: 'Steve', lname: 'Smith', empId: 432, city: Symbol(Kanpur)}

// Gets added as String

const interest = Symbol("Swimming");
info.hobby = interest.description;
console.log(info);   // {fname: 'Steve', lname: 'Smith', empId: 432, city: Symbol(Kanpur), hobby: 'Swimming'}

// Gets added with Symbol key
let status = Symbol("Married");


// Storing and accessing String Key-Value pair in object
let student1 = {
    fname: "Aron",
    lname: "Paul",
    "fullName" : "Aron Paul"
}

console.log(student1);   //{fname: 'Aron', lname: 'Paul', fullName: 'Aron Paul'}

console.log(student1.fullName); // Aron Paul
console.log(student1["fullName"]);    // Aron Paul

// Object Freez
Object.freeze(student1);   // This will prevent object key and vallues from changing
student1.fname = "James";
console.log(student1);   // {fname: 'Aron', lname: 'Paul', fullName: 'Aron Paul'}


console.log("======================================");


// nested object
const person = {
    name: "Kailash",
    city: "Ranchi",
    pin: 833124,
    cars : {
        car1: "Honda City",
        car2: "Tata Safari",
        car3: "Toyota Hilux"
    },
    contry: "india",
}
console.log(person);
console.log(person.name);  //kailash
console.log(person["city"]);  //ranchi
console.log(person.cars);   //{car1: 'Honda City', car2: 'Tata Safari', car3: 'Toyota Hilux'}
console.log(person.cars.car1);    //Honda City


console.log("-----------(Object Reference)-----------------")

/*

Objects are stored by reference, not by value.

When you assign an object to another variable, both variables point to the same object in memory.

*/

let person1 = {
    name: 'Kelly',
    age : 4,
};

let person2 = person1;

person2.age = 43;
console.log(person1.age);   //43
console.log(person2.age);   //43   //Both variable referes to the same variable


// comparing two objects

let obj1 = { num: 32};
let obj2 = { num: 32};

console.log(obj1==obj2);    //false
console.log(obj1===obj2);   //false    // Even though content is same Both are different varibale

// Same reference

let Object1 = { num: 32};
let Object2 = Object1;

console.log(Object1==Object2);   //true
console.log(Object1==Object2);   //true   //because both varibale is pointing to same object


console.log("-----------(Arrays are Objects too)-----------------");

let arr1 = [1,2,3];
let arr2 = arr1;
arr2.push(55);

console.log(arr1);   // [1,2,3,55]
console.log(arr2);   // [1,2,3,55]

//Craeting a copy of an array instead

let nums1 = [11,22,33,44];
let nums2 = [...nums1];

nums2.push(89);

console.log(nums1);  //[11, 22, 33, 44]
console.log(nums2);  // [11, 22, 33, 44, 89]


console.log("=====================================");

let student= {
    name: "Saroj",
    age: 28,
    greet: function(){
        console.log("Hii, my name is "+this.name);
    }
};

student.greet();  // Hii, my name is Saroj

// Object.keys() -> returns all the key in Object;   Returns Object
console.log(Object.keys(student));  // ['name', 'age','greet']


//Object.values() -> returns all the values of keys;   Returns Object
console.log(Object.values(student));   // ['Saroj', 28, ƒ]

//Objetc.entries()  -> retrun all The entries inside the object;   -> Returns Objects
console.log(Object.entries(student));  // (3) [Array(2), Array(2), Array(2)]



console.log("---------------------------------");
// Merging two Object  

// Using Spread Syntax ...

let individual = {
    fname: "Steve",
    age : 25
};

let employee = {
    empId : 432,
    department: "IT",
    age :30            // In case of same property in different object - The later object's value overwrites the earlier one
};

let myObject = {
    ...individual,...employee
}; 

console.log(myObject);  // {fname: 'Steve', age: 30, empId: 432, department: 'IT'}


// hasOwnProperty() checks if a particular property exits in object
console.log(myObject.hasOwnProperty('empId'));  // true
console.log(myObject.hasOwnProperty('city'));   // false