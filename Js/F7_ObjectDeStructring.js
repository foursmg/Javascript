// OBject Destructring 
// Object destructing is a convenient way to extract properties from an object and store them in varibales.

let person = {
    name : 'Kelly',
    age : 32,
};

let p1Name = person.name;
console.log(p1Name);  //kelly

// Another method to extract properties from an Object is destructring

let {name, age} = person;

console.log(name); //kelly
console.log(age);  //32

console.log("-@---@------------@---@-");

//can Rename the varibale when extracting
let {name: personName, age: personAge} = person;
console.log(personName);
console.log(personAge);

console.log("---------(Default values)-----------");

//Default values, used when a property doesn't exist.
let { country = 'England'} = person;

console.log(name);   // Kelly
console.log(age);    // 32
console.log(country);   //England

console.log(person.country); //undefined


console.log("(Nested Object Destructuring)--------------------");

let student = {
    name : 'Aman',
    roll : 1,
    marks: {
        english : 23,
        hindi : 33,
    }
};

let { marks: {english, hindi}} = student;
console.log(english);  //23
console.log(hindi);  //33


//Rest Operator
// Collect Remaining properties into aother Object

let fruit = {
    name : 'mango',
    season : 'summer',
    country : 'india',
}

let {name: fruitName, ...rest} = fruit;
console.log(fruitName);  //mango
console.log(rest);   // {season: 'summer', country: 'india'}

console.log('________(Destructuring in Function Parameters)--------------');
function display({ name, age }) {
    console.log(name);
    console.log(age);
}

display({
    name: "John",
    age: 22
});
