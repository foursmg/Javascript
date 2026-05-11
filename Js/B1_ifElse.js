//if-else
//if score<50 -> passed else failed.

let score = 49;

if(score>=50){
    console.log("You Have Passed.");
}else{
    console.log("Better Luck Next Time");
}


console.log("--------------------");

//else-if statement

let marks = 450;
let marksP = (marks/500)*100;
console.log("Marks Perscentage: "+marksP+"%")
if(marksP>=90){
    console.log("Grade: A");
}else if(marksP>=75){
    console.log("Grade: B");
}else if(marksP>=65){
    console.log("Grade: C");
}else if(marksP>=50){
    console.log("Grade: D");
}else{
    console.log("Fail");
}

console.log("--------------------");

//leap year

let year = 1900;
if(year%400==0){
    console.log(year+" is a leap year.");
}else if(year%100==0){
    console.log(year+" is not a leap year.");
}else if(year%4==0){
    console.log(year+" is a leap year.");
}else{
    console.log(year+" is Not a Leap Year.");
}

console.log("---------------------------------");

//Ternary Operator
// (condition) ? expression1 : expression2
//finding Positive, Negative, Zero using Ternary Operator
let num = 0;
let value = num>0? "Positive": num==0? "Zero!": "Negative";
console.log(value);

console.log("-----------------------------------");

//!!!!!!
//Random link on click
function randomlink(){
    let x = Math.random();
    if(x>= 0.8){
        window.open("https://www.google.com/", "_blank");
    }else if(x>=0.5){
        window.open("https://www.youtube.com/", "_blank");
    }else{
        window.open("https://www.w3schools.com/js/js_if_else.asp", "_blank");
    }
}