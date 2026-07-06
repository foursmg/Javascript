/*

setTimeout
Functions for executing code asynchronously after a delay.
setTimeout is a JavaScript function that schedules code to run once after a specified delay.

Syntax:
setTimeout(callback, delayInMilliseconds, ...args);


*/


// 1. Passing an existing function to setTimeout
let alarm = function(){
    console.log("It's getting late, hurry up");
}

setTimeout(alarm,3000);   // console will print the message after 3 sec delay
console.log("Movie was at 4:12, its 4:05 already!");


console.log("--------------------------------");



// 2. passing an anonymous arrow function.
// here function is craeted right where it's needed.
setTimeout(function(){console.log("Train has arrived");},2000);    // this and 
setTimeout(() => console.log("Train has left."),3000);             // is similar way of creating an anonymous arrow function and passing it in setTimeout



console.log("--TimerId----------------------------");

//TimerId
// timerId is the value returned by setTimeout(). It is an identifier(ID) that represents the scheduled timer.
// Its main purpose is to cancel the timer before it executes using clearTimeout().
// Syntax -> let timerId = setTimeout(callback,delay);

let timerIdgreet = setTimeout(()=> console.log("Hello, Good Morning :)"),4000);
console.log(timerIdgreet);  // 5
clearTimeout(timerIdgreet);   // Now the "Hello, Good Morning :) " won't appear


/*

setTimeout runs once, setInterval runs repeatedly

setTimeout:
    Syntax: setTimeout(function,time)
    cancel: clearTimeout(timerId)

setInterval:
    Syntax: setInterval(function,time)
    cancel: clearInterval(intervalID)    

*/


console.log("--setInterval-----------------------");

let wakeup = () => console.log("Wake up, it's past 6AM!");

setInterval(wakeup,1000);


console.log("--clearInterval----------------------------------");

// clearInterval() is used to stop a repeating timer that was created with setInterval().
// Syntax: clearInterval(intervaId);

let intervalId = setInterval(()=> console.log("Warning!!!, Cyclone coming!"),1000);

//clearInterval(intervalId); // this will immediately stop the Warning message from displaying

setTimeout(() =>clearInterval(intervalId),5000); // This will stop the warning message after 5 sec (comment out first clearInterval to see this ones working)

