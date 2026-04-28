//While Loop

let i=1;
var n=10;
while(i<=n){
    console.log(i);
    i++;
}

console.log("-----------------");

//Sum of Only Positive number
var num=0;
let sum = 0;
while(num>=0){
    sum = sum+num;
    var num = parseInt(prompt("Enter a Number: "));
    console.log(num);
}
console.log("Sum of all the positive number entered: "+sum);

console.log("-----------------");

//do-while loop
//Display Number from 3 to 1
var x=1;
var y=10
do{
    console.log(x);
    x++;

}while(x<=y);


//sum of positive number entered using do-while
var Num=0;
var addition=0;
do{
    addition= addition+Num;
    Num = parseInt(prompt("Enter a Num: "));
}while(Num>=0);
console.log("Addition of all Positive Number Entered: "+addition);
