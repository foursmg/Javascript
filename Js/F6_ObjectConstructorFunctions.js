// Sometimes we need to create many Objects of the same type.
// To create an Object type we use an Object Constructor function.

//It is a Function used as a blueprint to craete multiple objects with similar structure.
// Object literal -> make one Object manually
// Constructor function -> create many similar Objects automatically


// Without Constructor function
const student1 = {
    name:  "Akash",
    age: 16
};

const student2 = {
    name: "Abhisek",
    age : 15
};
// Gets Repetitive

//
//Using Constructor function
function Student(name,age){           //!!! function Student(name,age) -> constructor function -> used to create a blueprint
    this.Name = name;                 //this refers to the new Object being created.
    this.Age = age;
}

let s1 = new Student("Armaan",16);
let s2 = new Student("Aman",18);

console.log(s1);   //Student {Name: 'Armaan', Age: 16}
console.log(s2);  // Student {Name: 'Aman', Age: 18}
console.log(s1.Name);  // Armaan

console.log("--------------------------------");

//Example 2 of Constructor function for creating objects with a default property Value
// Property Default Values - A value given to a property will be a default value for all objects created by the constructor

function person(fname,lname,age,city,empId){
    this.firstName= fname;
    this.lastName= lname;
    this.Age= age;
    this.City = city;
    this.empId = empId;
    this.contry= "India";
}

let p1 = new person("Sunil","Rao",34,"Varansi",234);
console.log(p1);  // person {firstName: 'Sunil', lastName: 'Rao', Age: 34, City: 'Varansi', empId: 234, …}
console.log(p1.contry);  //India

//Creating an Object with one missing value
let p2 = new person("Shubham","Gupta",32,"Gaya");
console.log(p2);  // person {firstName: 'Shubham', lastName: 'Gupta', Age: 32, City: 'Gaya', empId: undefined, …}
//Missing value becomes undefined.


//Adding a Property to a created Object - only that particular Object will get the property
p1.EyeColour ="Brown";
console.log(p1);  //  

console.log("-------------------------------");


//!!! Adding a Property to a Constructor
// You can NOT add a new property to an object constructor

//Add Property using prototype (important)
//To add a new Property, it must be added to the construtor function prototype
person.prototype.Gender = "male";

console.log(p1.Gender);   //male

let p3 = new person("Kartik","Tuddu",43,"Kanpur",237);
console.log(p3); // person {firstName: 'Kartik', lastName: 'Tuddu', Age: 43, City: 'Kanpur', empId: 237, …}
console.log(p1.contry); //India
console.log(p1.Gender); //male





console.log("-----------------(Constructor Function Methods)------------------")


//Constructor function Methods
//A constructor function can also have methods.

function info(fname,lname,age,city,empId){
    this.firstName= fname;
    this.lastName= lname;
    this.Age= age;
    this.City = city;
    this.empId = empId;
    this.contry= "India";
    this.funllName= function(){
        return this.firstName+" "+this.lastName;
    };
}

let info1 = new info("Zaid","Rahman",54,"Kabul",543);

console.log(info1);  // info {firstName: 'Zaid', lastName: 'Rahman', Age: 54, City: 'Kabul', empId: 543, …}
console.log(info1.funllName());  //Zaid Rahman

console.log("------------(Adding a Method to an Object)----------")


//Adding a Method to an Object
info1.changeName = function(name){
    this.lastName = name;
}

info1.changeName("Khan");
console.log(info1);      //   info {firstName: 'Zaid', lastName: 'Khan', Age: 54, City: 'Kabul', empId: 543, …}


//Cannot Add a New Method to an Object Constructor function