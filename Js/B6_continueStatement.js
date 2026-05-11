//continue statement - skips current iteration of the loop and proceeds to the next iteration.


//5 will be skiped
var n=10;
for(let i=0;i<=n;i++){
    if(i==5){
        continue;
    }
    console.log(i);
}


console.log("--------------------");

//displaying only odd numbers using loop and continue
for(let i=0;i<=10;i++){
    if(i%2==0){
        continue;
    }else{
        console.log(i);
    }
}

console.log("--------------------");

//continue example- Skip iteration in a for loop

for(let i=1;i<=10;i++){
    if(i<4 || i>6){
        continue;
    }
    console.log(i);
}

