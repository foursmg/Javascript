// JSON example

//JS Object
let student=  {
    name : "kelly",
    age : 23,
    isStudent: true,
}

console.log(typeof(student));  //Object
console.log(student);          // {name: 'kelly', age: 23, isStudent: true}

//Coverting Object -> JSON
// JSON.stringify() converts a JavaScript object into a JSON string.
let studentStr = JSON.stringify(student);

console.log(studentStr);       //{"name":"kelly","age":23,"isStudent":true}
console.log(typeof(studentStr));  //string

//Converting JSON -> Object
//JSON.parse() converts a JSON string into a JavaScript object.
let student1 = JSON.parse(studentStr);

console.log(typeof(student1));  //Object
console.log(student1);          // {name: 'kelly', age: 23, isStudent: true}

