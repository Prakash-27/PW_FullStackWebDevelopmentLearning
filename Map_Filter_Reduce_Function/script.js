// Map Filter Reduce:
// Map Filter Reduce are Array Methods, that are used to iterate over an Array and perform a transformation or computation each may or may not return a new Array based on result of the function.  

// What is map() ?

// the map method is used for creating a new array from existing one by applying a function to each one of the elements of the first Array.

// const nums = [1, 2, 3, 4];

// const multiplyThree = nums.map((num, index, array) => {
//     return num * 3 + index; 
// });

// console.log(multiplyThree);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 

// What is filter() ?

// the filter method takes each element in an array and it applies a conditional statement against it, if the conditional returns true the elements gets pushed into the output array, if the condition returns false the element does not get pushed into the output array.
// In short filter returns only those elements from the array which fulfils the provided criteria. 

// const moreThanTwo = nums.filter((num, index, array) => {
//     return num > 2;
// });

// console.log(moreThanTwo);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 

// What is reduce() ?

// the reduce method reduces an array of values down to just one value, just like map and filter, reduce also executes the callback for each element of the array so it receives two strings one is callback function and another one is inital value.
// previousValue is Result of initialValue

// const sum = nums.reduce((previousValue, initialValue, currentIndex, array) => {
//     return previousValue + initialValue;
// }, 0);

// console.log(sum);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 

// Reference: 
// Array.map((num, i, arr) => {})

// Polyfill for map() ?
// Array.prototype.myMap = function(cb) {
//     let temp = [];
//     for(let i = 0; i < this.length; i++){
//         temp.push(cb(this[i], i, this));
//     }

//     return temp;
// };

// const nums = [1, 2, 3, 4];

// const multiplyThree = nums.myMap((num, index, array) => {
//     return num * 3; 
// });

// console.log(multiplyThree);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 

// Reference: 
// Array.filter((num, i, arr) => {})

// Polyfill for filter() ?
// Array.prototype.myFilter = function(cb) {
//     let temp = [];
//     for(let i = 0; i < this.length; i++){
//         if(cb(this[i], i, this)){
//             temp.push(this[i]);
//         }
//     }
//     return temp;
// }

// const nums = [1, 2, 3, 4];

// const moreThanTwo = nums.myFilter((num, index, array) => {
//     return num > 2;
// });

// console.log(moreThanTwo);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 

// Reference: 
// Array.reduce((accumulator, currentValue, index, array) => {}, initialValue)

// Polyfill for reduce() ?
// Array.prototype.myReduce = function(cb, initialValue) {
//     var accumulator = initialValue;

//     for (let i = 0; i < this.length; i++) {
//         accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i]; // If we does't provide a initialValue then the accumulator will take the first element of the array as the initial value, the currentValue is the second element in the Array.
//     }

//     return accumulator;
// }

// const nums = [1, 2, 3, 4];

// const sum = nums.myReduce((acc, crr, i, arr) => {
//     return acc + crr;
// }, 0);

// console.log(sum);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 

// map vs forEach

// const arr = [2, 5, 3, 4, 7];

// const mapResult = arr.map((ar) => {
//     return ar + 2; // it returns a new modified Array
// });

// In map we can chain the another function because it will return a array.

// const forEachResult = arr.forEach((ar) => {
//     return ar + 2; // it doesn't return anything, it show undefined in console
// });

// In forEach we can't chain the another function because it will not return a array.

// const forEachCustomModifiedArrayResult = arr.forEach((ar, i) => {
//     arr[i] = ar + 3; 
// });

// console.log(mapResult, forEachResult, arr);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 

// Question 1 - Return only name of student in Capital

// let students = [
//     { name:"Piyush", rollNumber: 31, marks: 80 },
//     { name:"Jenny", rollNumber: 15, marks: 69 },
//     { name:"Kaushal", rollNumber: 16, marks: 35 },
//     { name:"Dilpreet", rollNumber: 7, marks: 55 },
// ];

// Using for loop:
// let names = [];
// for(let i = 0; i < students.length; i++) {
//     names.push(students[i].name.toUpperCase());
// }
// console.log(names);

// Using map():
// let names = students.map((student) => student.name.toUpperCase());
// console.log(names);

// Using forEach():
// let names = students.forEach((student) => {
//     console.log(student.name.toUpperCase()); // forEach does not return new Array so we are console it in the forEach loop itself. 
// });


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 

// Question 2 - Return only details of those who scored more than 60 marks

// let students = [
//     { name:"Piyush", rollNumber: 31, marks: 80 },
//     { name:"Jenny", rollNumber: 15, marks: 69 },
//     { name:"Kaushal", rollNumber: 16, marks: 35 },
//     { name:"Dilpreet", rollNumber: 7, marks: 55 },
// ];

// const mark = students.filter((student) => {
//     return student.marks > 60;
// })
// console.log(mark);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 

// Question 3 - More than 60 marks and rollNumber greater than 15

// let students = [
//     { name:"Piyush", rollNumber: 31, marks: 80 },
//     { name:"Jenny", rollNumber: 15, marks: 69 },
//     { name:"Kaushal", rollNumber: 16, marks: 35 },
//     { name:"Dilpreet", rollNumber: 7, marks: 55 },
// ];

// const markAndRollNumber = students.filter((student) => {
//     return student.marks > 60 && student.rollNumber > 15;
// });
// console.log(markAndRollNumber);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 

// Question 4 - Sum of marks of all students

// let students = [
//     { name:"Piyush", rollNumber: 31, marks: 80 },
//     { name:"Jenny", rollNumber: 15, marks: 69 },
//     { name:"Kaushal", rollNumber: 16, marks: 35 },
//     { name:"Dilpreet", rollNumber: 7, marks: 55 },
// ];

// const sum = students.reduce((acc, curr) => acc + curr.marks, 0);
// console.log(sum);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 

// Question 5 - Return only names of students who scored more than 60

// let students = [
//     { name:"Piyush", rollNumber: 31, marks: 80 },
//     { name:"Jenny", rollNumber: 15, marks: 69 },
//     { name:"Kaushal", rollNumber: 16, marks: 35 },
//     { name:"Dilpreet", rollNumber: 7, marks: 55 },
// ];

// const name = students.filter((stu) => {
//     return stu.marks > 60;
// }).map((stu) => {
//     return stu.name;
// });
// console.log(name);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 

// Question 6 - Return total marks for students with marks greater than 60
//              after 20 marks have been added to those who scored less than 60.    

// let students = [
//     { name:"Piyush", rollNumber: 31, marks: 80 },
//     { name:"Jenny", rollNumber: 15, marks: 69 },
//     { name:"Kaushal", rollNumber: 16, marks: 35 },
//     { name:"Dilpreet", rollNumber: 7, marks: 55 },
// ];

// const totalMarks = students.map((student) => {
//     if(student.marks < 60) {
//         student.marks += 20;
//     }

//     return student;
// }).filter((student) => student.marks > 60)
//   .reduce((acc, curr) => acc + curr.marks, 0);

// console.log(totalMarks);
