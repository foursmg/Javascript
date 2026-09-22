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

function employee(name,age,city,country="India",disabled,pincode){
    this.name = name;
    this.age = age;
    this.city = city;
    this.country = country;
    this.disabled = "No";  // This will make disabled value "No" parmanent regardless of what agrument is passed for this
    this.pincode = pincode;
}
// country = "India" is default parameter

let e1 = new employee("Rakesh",33,"Amritsar");
console.log(e1);  // employee {name: 'Rakesh', age: 33, city: 'Amritsar', country: 'India', diable: 'No', …}
//Missing value becomes undefined. i.e. pincode: undefined

let e2 = new employee("Kunal",24,"Varansi","USA","Yes",11110);
console.log(e2);  // employee {name: 'Kunal', age: 24, city: 'Varansi', country: 'USA', disabled: 'No', …}



// if don't want to provide values for property which already have some default value, use 'undefined'
let e3 = new employee("Aniket",35,"Jaipur",undefined,undefined,102341);
console.log(e3);  // employee {name: 'Aniket', age: 35, city: 'Jaipur', country: 'India', disabled: 'No', …}

// { 
// // Or provide values explicitly 
// function employee({name,age,city,country="India",disabled,pincode}){
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     this.country = country;
//     this.disabled = "No";  // This will make disabled value "No" parmanent regardless of what agrument is passed for this
//     this.pincode = pincode;
// }
// let e4 = new employee({name:"Shambhu",age:45,city:"Gaya",pincode:421145});
// console.log(e4);  // employee {name: {…}, age: undefined, city: undefined, country: 'India', disabled: 'No', …}
// }


// Adding a property to a created object - Onlt that particular Object will get the property
e3.language = "Hindi";
console.log(e3.language);  // Hindi

// Adding a method to a created object
e3.hi = function(){
    console.log("Hello "+this.name+" City: "+this.city);
}

e3.hi(); // Hello Aniket City: Jaipur



// prototype Important!!!!!
// Adding a property to the constructor;
employee.prototype.gender = "Male";  // here the male will become default 

console.log(e3.gender);  // male

e3.gender = "female";
console.log(e3.gender);  // female




let e5 = new employee("Tom",23,"Kolkata",undefined,undefined,342134);
console.table(e5); // gender was not in table
console.log(e5.gender); // male



  



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