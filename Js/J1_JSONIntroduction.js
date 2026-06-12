/*
JSON - JavaScript Object Notation.
It exists because programs often need a standard format to store and exchange data between:
     -> Javacript and Servers
     -> Different Programming Languages
     -> Files and applications

Example: JavaScript Object
    let student = {
        name: "Kelly",
        age: 19,
        course: 'BCA',
    };
    
Same data In JSON

     {
        "name": "Kelly",
        "age": 19,
        "course": 'BCA',   
     }

-------------------Difference-----------------
(JavaScript Object)	               (JSON)
Keys may be unquoted	    Keys must be in double quotes
Can contain functions	    Cannot contain functions
Can contain undefined	    Cannot contain undefined
Used inside JS code	        Used for data exchange/storage


----------------------------------------------

-> Common in network calls and data storage.
-> JSON.stringify() and JSON.parse()
-> Strings are easy to transport over network.
-> JSON requires double quotes. Escaped as \".
-> JSON is data format, JS object is a data structure.

----------------------------------------------------------


Why is JSON used?
Suppose a website asks a server for user information.

Server sends:
{
    "name": "Gautam",
    "age": 22
}

JavaScript receives it and converts it into an object:

let jsonString = '{"name":"Gautam","age":22}';
let user = JSON.parse(jsonString);
console.log(user.name); // Gautam

JSON.parse() converts JSON string → JavaScript object.

--------------------------------------------------

Converting Object to JSON

let student = {
    name: "Gautam",
    age: 22
};
let jsonData = JSON.stringify(student);
console.log(jsonData);

Output:
{"name":"Gautam","age":22}

JSON.stringify() converts JavaScript object → JSON string.

----------------------------------------------------

JSON use cases: API, Fetch request, Local Storage, Configuration files, DataBases, Sending data between frontend and backend 


The server typically sends JSON, and JavaScript converts it into an object for use in your code.


*/


