//Array Methods

//Array Length
//The length property returns the lenght(size) of an array.
let city = ["Jaipur","Puri","Itanagar","Gangtok","Rajgir"];
console.log(city);          //(5) ['Jaipur', 'Puri', 'Itanagar', 'Gangtok', 'Rajgir']
console.log(city.length);  //5

//Array toString()
//The toString() method returns the elements of an array as a comma separated string.
//Every JavaScript object has a toString() method.
//The toString() method is used internally by JavaScript when an object needs to be displayed as a text (like in HTML), or when an object needs to be used as a string.
console.log(city.toString());  //Jaipur,Puri,Itanagar,Gangtok,Rajgir

// Array at()
// the at() method returns an indexed element from an array
//the at() method returns the same as [].
console.log(city[0]);     //Jaipur
console.log(city.at(0));  //Jaipur
console.log(city.at(-1));  //Rajgir
console.log(city[-1]);    //undefined


//Array join()
//The join() method also joins all array elements into a string.
// Works same as toString, in addition we can specify the separator
console.log(city.join(" # "));  //Jaipur # Puri # Itanagar # Gangtok # Rajgir


//pop()
//The pop() method removes the last element from an array
city.pop();
console.log(city);  //(4) ['Jaipur', 'Puri', 'Itanagar', 'Gangtok']
//The pop() method returns the value that was "popped out"
let popedCity = city.pop();
console.log(popedCity); //Gangtok
console.log(city);  // (3) ['Jaipur', 'Puri', 'Itanagar']

//push()
//The push() method adds a new element to an array(at the end).
city.push("Darjaling");
console.log(city);  // (4) ['Jaipur', 'Puri', 'Itanagar', 'Darjaling']
//pushed() method returns the new array length
let pushedCity = city.push("Delhi");
console.log(pushedCity); //5

//Shifting Elements
//Shifting is equivalent to popping, but working on the first element instead of the last.
//The shift() method removes the first array element and "shifts" all other elements to a lower index.
city.shift();
console.log(city);  // (4) ['Puri', 'Itanagar', 'Darjaling', 'Delhi']
//The shift() method returns the value that was "shifted out"
let shiftedCity = city.shift();
console.log(shiftedCity);  //puri
console.log(city);    // (3) ['Itanagar', 'Darjaling', 'Delhi']

//Unshift()
// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements
let unshiftCity = city.unshift("Ranchi");
console.log(unshiftCity); // 4  The unshift() method returns the new array length
console.log(city);    //(4) ['Ranchi', 'Itanagar', 'Darjaling', 'Delhi']

// Array.length to append element at the end
city[city.length]= "Kanpur";
console.log(city);  //(5) ['Ranchi', 'Itanagar', 'Darjaling', 'Delhi', 'Kanpur']

// delete() -> Leaves undefined holes in th array
// Use pop() or shift() instead
// delete city[0];

console.log("");
console.log("---------------(Merging Arrays(Concatenating))-------------");

// concat()
//The concat() method creates a new array by merging (concatenating) existing arrays
const capitals = ["Panji","Gandhinagar","Shimla"];
const cities = city.concat(capitals);
console.log(cities); // (8) ['Ranchi', 'Itanagar', 'Darjaling', 'Delhi', 'Kanpur', 'Panji', 'Gandhinagar', 'Shimla']
//The concat() method does not change the existing arrays. It always returns a new array.
//The concat() method can take any number of array arguments.
// i.e.: const newArr = arr1.concat(arr2,arr3);

//concate() method can also take strings as arguments
const cities2 = cities.concat("Chandigarh","Bhopal");
console.log(cities2);  //(10) ['Ranchi', 'Itanagar', 'Darjaling', 'Delhi', 'Kanpur', 'Panji', 'Gandhinagar', 'Shimla', 'Chandigarh', 'Bhopal']

console.log("-------------------------------");

//copyWithin()
//The copyWithin() method copies array elements to another position in an array
console.log(city);     // (5) ['Ranchi', 'Itanagar', 'Darjaling', 'Delhi', 'Kanpur']
city.copyWithin(2,4);
console.log(city);     //  ['Ranchi', 'Itanagar', 'Kanpur', 'Delhi', 'Kanpur']

// The copyWithin() method overwrites the existing values.
// The copyWithin() method does not add items to the array.
//  The copyWithin() method does not change the length of the array.


// Flattening an Array
//  The flat() method creates a new array with sub-array elements concatenated to a specified depth.
const myArr = [[1,2],[3,4],[5,6]];
console.log(myArr);  // (3) [Array(2), Array(2), Array(2)]
const newArr = myArr.flat();
console.log(newArr);  //  (6) [1, 2, 3, 4, 5, 6]


// flatMap()
// The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
const myArr1 = [1, 2, 3, 4, 5, 6];
console.log(myArr1);     // (6) [1, 2, 3, 4, 5, 6]
const newArr1 = myArr.flatMap(x => [x, x * 10]);
console.log(newArr1);


// splice()
//  The splice() method can be used to add new items to an array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits);  //(6) ['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango']
// splice() to Remove Elements
// With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array
fruits.splice(0, 1);
console.log(fruits); // (5) ['Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango']

//slice()
// The slice() method slices out a piece of an array into a new array
const citrus = fruits.slice(1);
console.log(citrus); // ['Lemon', 'Kiwi', 'Apple', 'Mango']
//The slice() method creates a new array.
//The slice() method does not remove any elements from the source array.
//The slice() method can take two arguments like slice(1, 3).
//The method then selects elements from the start argument, and up to (but not including) the end argument.

