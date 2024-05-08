//Spread

//creating a new array:
//--------------------- 

// let nums = [10, 20, 30, 40];
// let newArr = [...nums];
// console.log(newArr);

//add new values to array or objects:
//----------------------------------- 
// let arr = [10, 20, 30, 40];
// let newArr = [...arr, 50];
// newArr[0] = 1000
// console.log(newArr);
// console.log(arr);

// let obj = {
//     name: "PW Skills",
//     course: "Full Stack Development"
// };
// let newObj = {...obj, rating:5}
// newObj.instructor = "Hitesh Choudhary";
// console.log(newObj);
// console.log(obj);

//concatenate arrays and objects:
//-------------------------------

// let arr1 = [10, 20, 30];
// let arr2 = [40, 50, 60];
// let newArr = [...arr1, ...arr2];
// console.log(newArr);

// let obj1 = {
//     name: "PW Skills",
//     course: "Full Stack Development",
//     ratings: 4,
// };

// let obj2 = {
//     ratings: 5,
//     reviews: 5000
// };

// let newObj = {...obj1, ...obj2};
// console.log(newObj);

//Spread an array and pass as individual parameters:
//--------------------------------------------------

// let nums = [10, 20, 30];

// function calculateMax(num1, num2, num3){
//     return Math.max(num1, num2, num3);
// }
// console.log(calculateMax(...nums));

//can be used with strings:
//-------------------------

// let name = "PW Skills";
// const arrayOfCharacters = [...name];
// console.log(arrayOfCharacters);

//spread with objects:
//--------------------

// let obj1 = {
//     name: "PW Skills",
//     course: "Full Stack Development",
//     ratings: 4,
// };

// let newObj = {...obj1, review: 4000};
// console.log(newObj);

//---------------------------------------------------------------------------------
//Rest:

//Collect all the remaining parameters in a function:
//---------------------------------------------------

// function sumOfAllNumbers(...numbers){
//     // console.log(numbers);
//     return numbers.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
// }
// console.log(sumOfAllNumbers(10, 20, 30, 40));

//destructuring:
//--------------

let arr = ['HTML', 'CSS', 'JS', 'REACT', 'NODE', 'EXPRESS', 'GIT', 'REDUX'];

let [element1, element2, ...remainingElements] = arr;

console.log(element1, element2);
console.log(remainingElements);
