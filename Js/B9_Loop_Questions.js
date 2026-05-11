// All Even Numbers from 0 to 100;
let n=100;
for(let i=0;i<=n;i++){
    if(i%2==0){
        console.log(i);
    }
}

console.log("-----------------------------------");


//Create a Game Where you start with any random game number. Ask the user to keep guessing the game until the user enters correct value.
let num = 32;
let val;
let count=0;
do{
val = parseInt(prompt("Enter a Number: "));   //don't declare val here
count++;
if(val>num){
    console.log("Entered Number Greater than Actual Num.");
}else if(val<num){
    console.log("Entered Number Lesser than the Actual Number.");
}else{
    console.log(num +" = "+ val +"\n"+"Correct Guess!!" );
    console.log("Number of Guesses: "+count);
}
}while(num !== val); //val declared inside the loop won't exist outside the loop to check this condition;

//!!!!!!
//A variable declared with let only exists inside the { } where it was created.