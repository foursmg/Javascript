let info = {
    name: "Kelly",
    age: 54,
    city:"kanpur"
}

let {name,age} = info;
console.log(name);
console.log(age);

let {name: PName , age:PAge, country ="India"} = info;
console.log(PName);
console.log(country);
