
// Object example.

let student = {
    name: 'Kelly',
    age: 32,
    course: "MS",
};

console.log(student);


// Converting object into string
let jsonData = JSON.stringify(student);

console.log(jsonData);

// Storing the string on local storage
localStorage.setItem("studentfirst",jsonData);

let stud = localStorage.getItem("studentfirst");
console.log(stud);

let kelly = JSON.parse(stud);

console.log(kelly);

console.log("----------------------------------");



localStorage.setItem("Pin",87638);

let num = localStorage.getItem("Pin");
console.log(num);
console.log(typeof(num));
