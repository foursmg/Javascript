//break statement terminates the loop immediately

while(true){
    let num = parseInt(prompt("Enter a Number: "));
    if(num==55){
        console.log("Number matched to 55.");
        break;
    }
}
console.log("Program execution out of loop");

console.log("----------------------------------------");

//break statement with for loop

for(let i=0;i<=10;i++){
    if(i==6){
        console.log("Number matched to 6.");
        break;
    }
    console.log(i);
}
console.log("if condition met in for loop");

console.log("----------------------------------------");


//break with while loop - sum of positive number - loop terminates when -ve number entered
let number;
var sum=0;
while(true){

    number = parseInt(prompt("Enter a number: "));
    if(number<0){
        console.log("Negetive Number Entered: "+number);
        break;
    }
    sum= sum+number;
}
console.log("Sum of Positive Numbers Entered: "+sum);

console.log("----------------------------------------");
