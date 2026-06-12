/*
Local Storage in JavaScript
Local Storage is a browser feature that lets you store data on the user's device as key-value pairs.

Persistent data storage in the browser.

Unlike variables, the data remains even after:
Refreshing the page
Closing the browser
Restarting the computer

Uses: 
Save dark/light theme preference
Save game scores
Save shopping cart items
Save user settings
_____________________________________________________________________
Syntax-
Store data -> localStorage.setItem("name", "Kelly");
setItem: Store data as key-value pairs.(Only String can be stored).

Retrieve data
let name = localStorage.getItem("name");
console.log(name);
OUTPUT: Kelly
getItem: Retrieve data based on key.

Remove one item
localStorage.removeItem("name");
removeItem()

Remove everything
localStorage.clear();
__________________________________________________________________

(Do not store sensitive information. Viewable in storage console.)


*/


//local storage example
localStorage.setItem("name","Kelly");   // Key: name, Value: kelly   (These can be checked in Application local storage console of Inspect) 
localStorage.setItem("Age","25");         // Key: Age, Value: 25.
localStorage.setItem("PIN",831009);       //Key: PIN, Value: 831009

console.log(localStorage.getItem("name"));  //kelly
console.log(localStorage.getItem("PIN"));   //831009

console.log("_________________(Storing Object on Local Storage)____________________");


//Storing Object in Local Storage
let product= {
    name: "Usha Fan",
    price: 1100,
    rating: {
        stars: 3.8,
        NoOfReviews: 529,
    },
};

console.log(product);  //{name: 'Usha Fan', price: 1100, rating: {…}}

//Now Storing the product Object in local Storage
//Convert Object into JSON string
localStorage.setItem("Product",JSON.stringify(product));

// Getting Obejct Back 
// Converting JSON string into Object 
let product1 = JSON.parse(localStorage.getItem("Product"));
console.log(product1);  // {name: 'Usha Fan', price: 1100, rating: {…}}


console.log("------------(Removing One Item)-------------");

localStorage.removeItem("Age");  //Age removed from local storage (Check in Local Storage Application console).

//localStorage.clear();  // this will clear everything from local storage