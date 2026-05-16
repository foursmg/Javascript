// Display Object

const person= {
    name: "John",
    empId: 234,
    city: "Moscow",
    contry: "Russia"
};

//Displaying Object Properties.

// 1. Displaying Object Properties by name
let text = person.name+ ", "+ person.empId+", "+ person.city;
console.log(text);   // John, 234, Moscow

//Displaying Whole Object
console.log(person);  //{name: 'John', empId: 234, city: 'Moscow', contry: 'Russia'}

//Displaying Specific values
console.log(person.name);  // john

console.log("----------------(Display Using LOOP)-----------")

//Using Loop

for(let x in person){
    console.log(x +": "+person[x]);
}

let objValue = "";
for(let x in person){
    objValue += person[x] + " ";
};
console.log(objValue);  // John 234 Moscow Russia 

let objValues = "";
for(let x in person){
    objValues +=x+": "+ person[x] + " ";
};
console.log(objValues);  //name: John empId: 234 city: Moscow contry: Russia 


//Display using JSON
let displayValues= JSON.stringify(person);
document.getElementById("ObjectDisplay").innerHTML = displayValues;  // name: John empId: 234 city: Moscow contry: Russia 


console.log("---------------------------------");

// Create an Object

// Create an Array
const myArray = Object.values(person);

// Stringify the Array - Using Object.entries
let text1 = myArray.toString();
console.log(text1);  //John,234,Moscow,Russia

