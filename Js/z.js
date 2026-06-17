console.warn("This is a custom warning");
console.error("This is a custom error");
console.log(2+4);


//Object
let person = {
    fname: "John",
    lname: "Doe",
}

console.log(person);



let person2 = person;

console.log(person2);


person2.fullName = function(){
    return this.fname + this.lname;
}


console.log(person2);

let fullname = person2.fullName();
console.log(fullname);


console.log("------------------");

let score = {
    round: 12,
    win: 5,
    tie:2,
    lost:5,
}

console.log(score);

localStorage.setItem("Score",JSON.stringify(score));