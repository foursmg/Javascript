// Object Properties
//Properties are key:value Pairs
// A Javascript Object is collection of peroperties
//Properties can be changed, added, and deleted.

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
//Brackey Notation is useful when the property name is stored in a variable.

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






