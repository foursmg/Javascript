//Objects
//An Object is a collection of key-value pairs used to store data
//Objects are varibales that can store values and funcions.
//Values are stored as Key:value pairs called properties.
//Function are stored as key:function() paris called methods.

const car = {
    type: "Fiat",
    model: "500",
    color: "White"
};
//type , model, and color are properties.
//Fiat, 500, white are property values

console.log(car);  //Accessing values

//Accessing Object value using Dot notation   //Dot notation preferred
console.log(car.color);   //white

//Accessing Object value using Bracket Notation  
console.log(car["color"]);   //white


// declare objects with the 'const' keyword.

console.log("---------------------------------");


//Object using new keyword
const fruit = new Object({name:"Mango",Type:"Summer Fruit",Rate: 100})
console.log(fruit);  
console.log(fruit.Rate);  //100
console.log(fruit["Rate"]);  //100
// No need to use new Object()

console.log("------------------------------");


// Object Method (Function Inside Objects)
// Objects can also have methods.
// Objects methods are actions that can be performed on objects.
//Object method are function definitions stored as property values.

const info ={
    firstName: "John",
    lastName: "Doe",
    EmpId: "234",
    FullName : function(){
        return this.firstName +" "+this.lastName; 
    }
};

console.log(info);
console.log(info.FullName); //This will Print the function itself, not its result
//to execute/run the function use parantheses.
console.log(info.FullName());  //john Doe

//In Java Almost "everything" is an object:
// Objects, Maths, Dates, Arrays, Maps, Sets, RegExp, Errors
//All Js values, Except primitives, are Objects.



