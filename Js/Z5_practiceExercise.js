
console.log("--1-------------------------------------");

// 1. Create a varibale multiply and assign a function to this varibale that multiplies two numbes. 
//    Call the function using the variable.

// 1.1 Using normal function-----------------------------

function product(x,y){
    return x*y;
}

console.log(product(5,6)); //30
/*

1.1 Explanation
-> product is a named function.
-> JavaScript stores the function in memeory and associates it with the name product.
-> we can call it using its name.

Memory Representation(Conceptually):
product -> function(x,y) {return x*y;} 
*/


// 1.2 Using Anonymous function-----------------------------

let multiply = function(a,b){
    return a*b;
}

console.log(multiply(3,6));    //18
/*

2.2 Anonoymous function Assigned to a Varibale (Function Expression)
-> The function has no name, so it's called an anonymous function.
-> It is asigned to the varibale multiply
-> The varibale now holds a reference to the function
-> We invoke it using the varibale name.

Conceptually:
multiply -> funcion(a,b) { return a*b;}
            The function here has no name itself
*/




// 1.3 Using Arrow function----------------------------------

let multi = (num1,num2) => num1*num2;
console.log(multi(4,5));  //20

/*

1.3 Arrow Function explanation
-> This is simply shorter syntax for a function expression.
-> It is also stored in a varibale
-> num1 * num2 is automatically returned becausethere are no braces {}

*/


console.log("--2-------------------------------------");

// 2. Create a function runTwice that takes a function as a parameter and then runs that method twice.

// 1.1 Using normal function-----------------------------

function mygreetings(){
    console.log("Good Morning everyone.");
}

function callingTwice(aFunction){
    aFunction();
    aFunction();
}

callingTwice(mygreetings);

// 2.2 Using Anonymous function--------------------------

let greetings = function(){
    console.log("Hey there.");
}

let runTwice = function(myFunction){
    myFunction();
    myFunction();
}

runTwice(greetings);

// Using arrow function------------------------------------

let heyMsg = () => console.log("Hello everyone");

let runTwoTime = myInputFunction => {
    heyMsg();
    heyMsg();
}

runTwoTime(heyMsg);






console.log("--3----------------------------------------");


// 3. Create a button which should grow double in size on clicking after 2 seconds.


// exercise 3 without delay:

let myButtonElement = document.querySelector("#myButton");
let myWishlist = false;

let buttonBehavior = function(){
    
    // Instead of add/remove in if-else if can use toggle instead
   // myButtonElement.classList.toggle("myButtonMod");

    if(myWishlist== false){
        myWishlist= true;
        myButtonElement.classList.add("myButtonMod");
        myButtonElement.classList.remove("normalButton");
        myButtonElement.textContent = "❤️";
    }else if(myWishlist== true){
        myWishlist = false;
        myButtonElement.classList.remove("myButtonMod");
        myButtonElement.classList.add("normalButton");
        myButtonElement.textContent= "🤍"
    }
}
myButtonElement.addEventListener("click",buttonBehavior);    


/*

.classList.add("className") is used to add an existing CSS class to an HTML element.

Example:

1. We have a button:
   <button id="myButton">Click Here</button>

2. It already has CSS applied using its id:
   #myButton { ... }

3. Now, after clicking the button, we want to apply some additional CSS styles.

4. We create another CSS class:
   .myButtonMod { ... }

5. Using JavaScript:
   myButtonElement.classList.add("myButtonMod");

This adds the "myButtonMod" class to the button. The browser then applies the CSS rules from both #myButton and .myButtonMod. 
If both contain the same CSS property (e.g., background-color), the rule with higher CSS specificity or later declaration takes precedence.
*/


/*


 Exercise 3 ---- with delay of 1 sec----

 let myButtonElement = document.querySelector("#myButton");
 let myWishlist = false;

 let buttonBehavior = function(){
    
     // Instead of add/remove in if-else if can use toggle instead
    // myButtonElement.classList.toggle("myButtonMod");

     if(myWishlist== false){
         myWishlist= true;
         myButtonElement.classList.add("myButtonMod");
         myButtonElement.classList.remove("normalButton");
         myButtonElement.textContent = "❤️";
     }else if(myWishlist== true){
         myWishlist = false;
         myButtonElement.classList.remove("myButtonMod");
         myButtonElement.classList.add("normalButton");
         myButtonElement.textContent= "🤍"
     }
 }

myButtonElement.addEventListener("click", function(){ setTimeout(buttonBehavior,1000);});


*/





console.log("--4-----------------------------------------------------------------------");

// 4. Create a function that sums an array of numbers. Do this using a for-each loop

let arr = [10,5,10,1];

function arrSum(nums){
    let sum = 0;
    nums.forEach(function(nums){
        sum = sum + nums;
    })
    console.log(sum);
}

arrSum(arr);  //26


// 5. Create a function that takes an array of numbers and return thier squares using map function.

let nums = [1,2,3,4,5];

let square = function(arr){
   return arr.map(function(nums){
        return nums*nums;
    });
}
console.log(square(nums));