//if-else
//if score<50 -> passed else failed.

let score = 49;

if(score>=50){
    console.log("You Have Passed.");
}else{
    console.log("Better Luck Next Time");
}


//else-if statement

let marks = 74;
if(marks>=90){
    console.log("Grade: A");
}else if(marks>=75){
    console.log("Grade: B");
}else if(marks>=65){
    console.log("Grade: C");
}


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