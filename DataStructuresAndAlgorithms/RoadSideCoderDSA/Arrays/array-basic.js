// Arrays - Decalaration:
// let arr = new Array();

let person = {
    name: "Piyush",
    age: 25,
};

let arr = ["apple", "banana", "cherry", person];

console.log(arr[0], arr[1]);
console.log(...arr);
console.log(arr[3], arr[3].name);
console.log(arr.length);

// Arrays - Add and Remove Elements
// Add From End of the Array
arr.push("orange");
console.log(arr);

// Remove From End of the Array
arr.pop();
arr.pop();
console.log(arr);

// Add to Top of the Array
arr.unshift("orange");
console.log(arr);

// Remove From Top of the Array
arr.shift();
console.log(arr);

// # Looping Arrays

// For Loop
for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
}
  
// While Loop
let i = 0;
while (i < arr.length) {
  // console.log(arr[i]);

  i++;
}

// # Inbuilt Loop Methods
const numbers = [1, 2, 3, 4, 5];

// map in javascript
numbers.map((item, index, array) => {
  return item + 5; //[5, 7, 8, 9, 10]
});

// filter in javascript
numbers.filter((item, index, array) => {
  return item > 3; // [4, 5]
});

// reduce in javascript
numbers.reduce((prev, item) => {
  return prev + item; // 17
}, 2);

// some in javascript
numbers.some((item, index, array) => {
  return item > 3; // true
});

// every in javascript
numbers.every((item, index, array) => {
  return item < 10; // true
});

// find in javascript
numbers.find((item, index, array) => {
  return item > 3;
});

// findIndex
const index = [1, 2, 3].findIndex((item) => item === 2);
// console.log(index);

// Spread and Rest Operators
const nums = [1, 2, 3];
const nums2 = [4, 5, 6, 7];

const finalNums = [...nums, ...nums2]; // Spread Operator

// Rest Operator
function sum(...numbers) {
  return numbers;
}

console.log(sum(nums, nums2, 5, "hello"));

// # More Array Methods

// concat
nums.concat(nums2, arr);

// Slice
arr.slice(-2);

// Splice
arr.splice(1, 2, "orange");

// Fill
const dummy = [2, 5, 1, 6];
dummy.fill(2, 2);

// Flat
const flatEx = [1, [2, 3], [[4, 5], 6]]; // => [1,2,3,4,5,6]

const flattenedArray = flatEx.flat(2);
// console.log(flattenedArray);

// reverse
nums.reverse();
// console.log(nums);

// sort
const unsorted = [5, 2, 10, 7, 3, 1];
unsorted.sort((a, b) => b - a);
console.log(unsorted);

// node DataStructuresAndAlgorithms/RoadSideCoderDSA/Arrays/array-basic.js