// 1. click event -> User clicks an element  
// 'click here' button on page -> After clicking alert pops up
let buttonElement = document.querySelector("#myButton");
buttonElement.addEventListener("click", () =>alert("Button Clicked"));



console.log("--Multiple Listener-----------------------------------------");



// 2. Multiple Listeners: You can add more than one

const button2Element = document.querySelector("#myButton1");

// First Listener
let greetMsg = () => alert("Hello!!!!");

// Second listener
// Now adding another event to same button(click me)
let showTime = () => {
    let time = new Date();
    alert(time);
}


button2Element.addEventListener("click", greetMsg);
button2Element.addEventListener("click",showTime);


console.log("-- removeEventListener()------------------------------------");


// 3. removeEventListener()
//  removeEventListener() is used to remove an event listener that was previously added with addEventListener().
// Syntax: element.removeEventListener("event", functionName);

const myButton2Element = document.querySelector("#myButton2");

// First Listener
let greetMessage = () => alert("Hello!!!!");

// Second listener
// Now adding another event to same button(click me)
let showMyTime = () => {
    let time = new Date();
    alert(time);
}

myButton2Element.addEventListener("click",greetMessage);
myButton2Element.addEventListener("click",showMyTime);

myButton2Element.removeEventListener("click",greetMessage);  // Due to this hello alert wont pop up