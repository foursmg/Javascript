//----------------Methods---------------------------
// Methos are functiuons stored as property values.
// Methods are actions that can be performed on objects.

const person= {
    fname : "Akash",
    lname: "Tomar",
    city: "Raipur",
    pin: 343980,
    contry: "India",
    fullName: function(){
        return this.fname+" "+this.lname;
    }
}

console.log(person);  //{fname: 'Akash', lname: 'Tomar', city: 'Raipur', pin: 343980, contry: 'India', …}


//Accessing Object Methods
//objectName.methodName()
let name = person.fullName();
console.log(name);  //Akash Tomar

//WIthout the parantheses, it will return thr function definition
let Name= person.fullName;
console.log(Name);

person.age = 34;
console.log(person);

//------------------------------------------
{
let info = {
    name: "Kelly",
    age: 54,
    "Address" : "London",
    intro : function(){
        return this.name+" "+this.Address;
    }
}

let show = info.intro();
console.log(show);  // Kelly London


}

//--------------------------------------------

//Adding a method to an Object
//A method to an Object by assigning a function to a property
person.personal= function(){
    return this.fullName()+". Age: "+ this.age;
}

console.log(person);

let pDetail = person.personal();
console.log(pDetail);   // Akash Tomar. Age: 34


//Adding a Js Method to it
person.resident = function(){
    return ("City: "+this.city+", Contry: "+this.contry).toUpperCase();  
}
console.log(person);
let Resident= person.resident();
console.log(Resident);   //CITY: RAIPUR, CONTRY: INDIA 



{
    let person = {
    fname: "Kelly",
    age: 20
}



let lastName = Symbol("jones");

person.lname = lastName;
console.log(person);

let town = Symbol("Kanpur");
person.city = town.description;
console.log(person);

console.log(person);   // {fname: 'Kelly', age: 20, lname: Symbol(jones), city: 'Kanpur'}


// Adding function to the Object
person.intro = function(){
    return this.fname+" Lives in "+this.city;
}

console.log(person); // {fname: 'Kelly', age: 20, lname: Symbol(jones), city: 'Kanpur', intro: ƒ}
console.log(person.intro());   // Kelly Lives in Kanpur

person.greeting = function(){
    console.log(`Hello ${this.fname}`);
}

person.greeting();  //Hello Kelly
console.log(person.greeting());  // undefined
}