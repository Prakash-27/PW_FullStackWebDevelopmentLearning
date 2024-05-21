// Function in Javascript

// Q1 - What is function Declarations/function Definition/function statement?

// function square(num){
//     return num * num;
// }

// console.log(square(5));

// -------------------------------------------------------------------------------------------------------------------------------------------------------

// Q2 - What is Function Expression?

// const sqr = function (num){
//     return num * num;
// }

// console.log(sqr(3));

// -------------------------------------------------------------------------------------------------------------------------------------------------------

// Q3 - What are First Class Functions?

// In a language were a function can be treated like variable there function are called first class function.
// function can be passed into another functions, can we use to manipulated it to return from the functions, basically everything the variable can do the function can also do.

// function square(num){
//     return num * num;
// }

// function displaySquare(fn){
//     console.log("Square is: "+ fn(5));
// }

// displaySquare(square);

// -------------------------------------------------------------------------------------------------------------------------------------------------------

// Q4 - What is IIFE?

// Immediately Invoke function Expression.

// (function square(num){
//     console.log(num * num); 
// })(5);

// -------------------------------------------------------------------------------------------------------------------------------------------------------

// Q5 - IIFE - O/P Based Question?

// (function(x){
//     return (function (y){
//         console.log(x); // 1
//     })(2);
// })(1);

// -------------------------------------------------------------------------------------------------------------------------------------------------------

// Q6 - function Scope

// var num1 = 20,
//     num2 = 3,
//     name = "Roadside Coder";

// function multiply(){
//     return num1 * num2;
// }    

// multiply(); // Returns 60

// A nested function example
// function getScore(){
//     var num1 = 2,
//         num2 = 3;

//     function add(){
//         return name + " scored " + (num1 + num2);
//     }  
    
//     return add();
// } 

// console.log(getScore()); // Returns "Roadside Coder scored 5"

// -------------------------------------------------------------------------------------------------------------------------------------------------------

// Q7 - Function Scope - O/P Based Question

// (function () {
//     for(let i = 0; i < 5; i++){
//         setTimeout(function (){
//             console.log(i);
//         }, i * 1000);
//     }
// })(); // 0 1 2 3 4 

// (function () {
//     for(var i = 0; i < 5; i++){
//         setTimeout(function (){
//             console.log(i);
//         }, i * 1000);
//     }
// })(); // 5 5 5 5 5

// -------------------------------------------------------------------------------------------------------------------------------------------------------

// Q8 - Function Hoisting

// functionName();
// function functionName(){
//     console.log(x); // undefined
//     var x = 5;

//     console.log("Roadside Coder"); // Roadside Coder
// }

// console.log(y); // undefined
// var y = 5;

// Hoisting works little different incase of function, we don't have functionName() as undefined we has a complete function, it doesn't matter if you call the function before or after declaring it, it's still going to work  .

// -------------------------------------------------------------------------------------------------------------------------------------------------------

// Q9 - Function Hoisting - O/P Based Question

// var x = 21;

// var fun = function () {
//     console.log(x); // undefined
//     var x = 20;
// };

// fun();

// -------------------------------------------------------------------------------------------------------------------------------------------------------

// Q10 - Parameters vs Arguments

             // Parameters
// function square(num){
//     console.log(num * num);
// }

   // Arguments
// square(5);

// -------------------------------------------------------------------------------------------------------------------------------------------------------

// Q11 - Spread vs Rest

// Spread:
// function multiply(num1, num2){
//     console.log(num1 * num2);
// }

// var arr = [5, 6];

// multiply(...arr);

// Rest:
// function multiplys(...nums){
//     console.log(nums[0] * nums[1]);
// }

// var arr = [5, 6];

// multiplys(...arr);

// -------------------------------------------------------------------------------------------------------------------------------------------------------

// Q12 - Parameters vs Arguments - O/P Based Questions

// const fn = (a, x, y, ...numbers) => { // Rest or Spread Parameter should be at last
//     console.log(x, y, numbers);
// };

// fn(5, 6, 3, 7, 8, 9);

// -------------------------------------------------------------------------------------------------------------------------------------------------------

// Q13 - What is callback function

// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// function greeting(name) {
//     alert('Hello '+ name);
// }

// function processUserInput(callback) {
//     var name = prompt('Please enter your name.');
//     callback(name);
// }

// processUserInput(greeting);

// -------------------------------------------------------------------------------------------------------------------------------------------------------

// Q14 - Arrow functions vs Regular function

// 1 - Syntax
// const add = (firstNum, secondNum) => {
//     return firstNum + secondNum;
// };

// 2 - Syntax
// function square(num) {
//     return num * num;
// }

// 2 - Implicit "return" keyword
// const squar = (num) => num * num;

// 3 - arguments
// function fn(){
//     console.log(arguments);
// }

// fn(1, 3, 2); 

// const fnArr = () => {
//     console.log(arguments);
// }

// fnArr(1, 3, 2); // we cannot use arguments keyword inside the Arrow function.
//Uncaught ReferenceError: arguments is not defined at fnArr (script.js:223:17)

// 4 - "this" keyword

// let user = {
//     username: "Roadside Coder",
//     rc1: () => {
//         console.log("Subscribe to " + this.username); // This arrow function is pointing to Global object.
//     },
//     rc2() {
//         console.log("Subscribe to " + this.username); // This function is pointing to user object.
//     },
// };

// user.rc1(); // undefined
// user.rc2(); // Roadside Coder



