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