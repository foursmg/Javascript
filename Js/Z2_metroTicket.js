// metro Ticket Exercise
/* 

Give discount based on age, gender for metro ticket.
- Females get 50% off
- Kids upto 5 years of age are free
- People Over 65 years of age only pay 30% ticket
- In case of multiple discounts max discount will apply

*/

let ticket = 100;
let gender= ""; let age;

// Taking Gender as an input
do{
    gender = prompt("Enter Your Gender M/F:").trim().toUpperCase();
}while(gender != "M" && gender !="F");
console.log("Gender: "+gender);

// Taking age as an input
do{
    age = Number(prompt("Enter Your Age: ").trim());
}while(isNaN(age) || age<0 );
console.log(age);

metroTicket(gender,age);

function metroTicket(gender,age){

if(age<5){
    ticket = 0;
    console.log("Your Ticket Price is: "+ticket);
    return;
}

if(gender==='F'){
    ticket = ticket*(50/100);
    if(age>=65){
        ticket = ticket*(30/100);
        console.log("Your Ticket Price is: "+ticket);
    }else{
        console.log("Your Ticket Price is: "+ticket);
    }
}else{
    if(age>=65){
        ticket= ticket*(30/100);
        console.log("Your Ticket price is: "+ticket);
    }else{
        console.log("Ticket Price is: "+ ticket);
    }
}

}





// isNaN checks whether the value is NaN
// isNaN is a function that checks whether a value is NaN
// isNaN(25);  //False
// isNaN(NaN); //true
// isNaN('6');  //false
// isNaN(6); // false    (refer D1_Numbers for more on NaN and isNaN)
