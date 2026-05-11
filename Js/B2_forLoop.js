//for loop


//for loop- print naturals number till n
var n=10
for(let i=0; i<n;i++){
    console.log(i+1);
}

console.log("---------------------------------------");

//Dsiplay Sum of n Natural Numbers
let num=5;
var i;
var sum=0;
for(i=0;i<=num;i++){
     sum= sum+i;
}
console.log(sum);

console.log("--------------------------------------");

//iterate through an Array
const fruits = ["apple", "banana", "cherry"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log("--------------------------------------");

let text = "";   // creating an empty Varibale
for(let i=0;i<=9;i++){
    text += "This number is "+(i+1)+"<br>";  //keep Adding content to it.
}
document.getElementById("demo").innerHTML= text;


/*
!!!!!!!
 Three Ways of Output:
 1. Console output - Only visible in DevTools
console.log(text);

2. Page OutPut - Visible On Webpage
document.getElementById("demo").innerHTML = text;

3. Popup Output
alert(text);

      

*/

//Page OutPUT
{ 
    let text = "";
    const cars = ["Honda","Toyota", "Ford","Kia", "MG"];
    for(let i=0; i<cars.length; i++){
          text += cars[i]+"<br>";
    }
    document.getElementById("car").innerHTML = text;
}

//Console OutPut
{
    let text = "";
    const cars = ["Honda","Toyota", "Ford","Kia", "MG"];
    for(let i=0; i<cars.length; i++){
          console.log(cars[i]);
    }
}

//popup alert output
{
    let text = "";
    const cars = ["Honda","Toyota", "Ford","Kia", "MG"];
    for(let i=0; i<cars.length; i++){
          alert(cars[i]);
    }
   
}