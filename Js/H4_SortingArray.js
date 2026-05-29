// sort()
//The sort() method sorts an array alphabetically
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits);  // (4) ['Apple', 'Banana', 'Mango', 'Orange']

// reverse()
// The reverse() method reverses the elements in an array
fruits.reverse();
console.log(fruits);  //(4) ['Orange', 'Mango', 'Banana', 'Apple']

const nums = [55,33,77,99,22,11,55,77,88];
nums.sort();
console.log(nums);  // (9) [11, 22, 33, 55, 55, 77, 77, 88, 99]

//toSorted()
//toSorted() method as a safe way to sort an array without altering the original array
//The difference between toSorted() and sort() is that the first method creates a new array, keeping the original array unchanged, while the last method alters the original array.
const months = [ "Feb", "Mar", "Apr","Jan"];
const sorted = months.toSorted();
console.log(sorted);  // (4) ['Apr', 'Feb', 'Jan', 'Mar']
console.log(months);  //  (4) ['Feb', 'Mar', 'Apr', 'Jan']

// toReversed()
//  toReversed() method as a safe way to reverse an array without altering the original array
const reversed = months.toReversed();
console.log(months);
console.log(reversed);   // ['Jan', 'Apr', 'Mar', 'Feb']

console.log("--------------(Numeric Sort)------------------");

// Numeric Sort
// By default, the sort() function sorts values as strings.
//This works well for strings ("Apple" comes before "Banana").
// If numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".
//