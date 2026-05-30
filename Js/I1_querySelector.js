// querySelector
// Selecting by tag Name
let heading = document.querySelector("h4");
console.log(heading);  // <h4 style= "background-color: tomato;">Line 1........</h4>, on console
heading.style.backgroundColor = "tomato"; //changes the bg olor of h4, but only the first match h4


let element = document.querySelector("li");
element.style.backgroundColor = "yellow"; // chnages the bg color of first match of li 

//Different Selecting method
/*
document.querySelector('#nCartItem'); // ID
document.querySelector('.btn');       // Class
document.querySelector('button');     // Tag
document.querySelector('#menu .item'); // Complex CSS selector
*/

//Selecting By Id
let head = document.querySelector("#line2");
console.log(head);
head.style.backgroundColor = "red";

//Selecting By Class
let head4 = document.querySelector(".line4");
head4.style.backgroundColor ="pink";


console.log("---------Changing content - document.querySelector('').innerText = 'text....' ")

//Changing Content using querySelector
// Changing 4th h5 with class name line4 text from h5 line 4 to ....... line 4 h5 
document.querySelector(".line4").innerText = "....... line 4 h5";


console.log("-------Changing HTML - document.querySelector('#demo').innerHTML ='<b>Bold Text</b>'; ------- ")

// Changing HTML
document.querySelector("#h3line1").innerHTML = "<i><s> This is Bold now??</s></i>"


console.log("---- Changing CSS - document.querySelector('#demo').style.color = 'red'; ------");
document.querySelector("#h3line4").style.color = "grey";
document.querySelector("#h3line4").style.backgroundColor= "limegreen";


console.log("----Reading Input Value - d.qS('').value;------")
let firstName = document.querySelector('#fname').value;
console.log(firstName);