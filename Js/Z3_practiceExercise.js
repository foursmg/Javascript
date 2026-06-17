// Displaying Greeting with name and Asking for name if page loaded for first time, saving that name in localStorage and-
// when page loaded again first checking if there there is any name saved in localStorage already if yes diplaying that name with greeting

//Creating a variable 'name' and retrieving the value associtaed with the key 'name' from local storage
//case 1. Case 1: If a value already exists for the key 'name', it means the user has visited before and provided a name.
//case 2. Case 2: If the key 'name' does not exist in localStorage, getItem() returns null 
let name =localStorage.getItem("name");

console.log(name);


// Now before asking for name using prompt, we first check wether the name we retrieved from local storage earlier has null value or any name stored
//If it is null the we ask for name using prompt, if there is already any value to the key 'name' in local storage we can just skip this if else part below 
if(name === null){
    
name = prompt("Enter Your Name: ");
console.log(name);

 if(name!==null && name.trim()!==""){         // this condtion checks weather prompt was cancelled or empty space was entered,
    localStorage.setItem("name",name);        // if name is entered, it is stored on localStorage
 }else{
    name = "Dear";                            //if cancelled or empty space entered we assign "Dear" to name but it is not stored on localStorage
 }
}

// Create a Date object representing the current date and time.
let time = new Date();
console.log(time);
let hours = time.getHours();   // Extract the current hour (0–23) from the Date object.
console.log(hours);

greeting(hours,name);   //Passing both the name and hours value for greeting display

//using if else condition to show good moring evening etc depending upon time
function greeting(hours,name){
    if(hours>= 5 && hours<12){
    document.querySelector("#greet").innerText = `Good Morning ${name}`;
}else if(hours>= 12 && hours< 17 ){
    document.querySelector("#greet").innerText = `Good Afternoon ${name}`;
}else if(hours> 17 && hours<=21){
    document.querySelector("#greet").innerText = `Good Evening ${name}`;
}else{
    document.querySelector("#greet").innerText = `Good Night ${name}`;
}
}


// ----------------------------------------------------------------


let count = localStorage.getItem("clickCount");
document.querySelector("#count").innerText = (count===null)? "":count;
if(count>0){
     if(count%2===0){
        document.querySelector("#click").style.backgroundColor = "limegreen";
    }else{
        document.querySelector("#click").style.backgroundColor = "salmon";
    }
}
console.log("Count: "+count);
function clickCounter(){

    if(count===null){
        count = 0;
    }

    count++;
    localStorage.setItem("clickCount",count);
    document.querySelector("#count").innerText = ` `+count;

    if(count%2===0){
        document.querySelector("#click").style.backgroundColor = "limegreen";
    }else{
        document.querySelector("#click").style.backgroundColor = "salmon";
    }
}


//  document.querySelector("#click").innerHTML = `Click here! <br>  ${count}`;