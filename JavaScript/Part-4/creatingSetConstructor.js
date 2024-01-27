// Create set from an array and array from Set
// Creating set from an array:
// ---------------------------
// To create a set from an array in javascript, set constructor can be used and pass the array as an argument.

// Create set from an array
const arr = ["apple", "Mango", "Banana", "Orange"];
const setDemo = new Set(arr);
console.log(setDemo);
// output - Set(4) { 'apple', 'Mango', 'Banana', 'Orange' }

// remove duplicate element from an array
const numb = [1, 3, 4, 5, 2, 6, 3, 3];
const uniqNum = new Set(numb);
console.log(uniqNum);
// Set(6) { 1, 3, 4, 5, 2, 6 }



// Creating an Array from set 
// --------------------------
// To create an array from set in javascript, array.from() method can be used and pass the array as an argument.

// create array from set 
const setData = new Set();
setData.add(1);
setData.add(2);
setData.add(3);

console.log(setData); // output - Set(3) { 1, 2, 3 }

const arrSet = Array.from(setData);
console.log(arrSet); // output - [ 1, 2, 3 ]