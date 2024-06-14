// So Polyfills are basically our own Implementation of an inbuilt function in javascript

// 1. Polyfill for map()

// Reference: 
// Array.map((num,i,arr) => { })

// Array.prototype.myMap = function(cb) {
//     let temp = [];
//     for (let i = 0; i < this.length; i++) {
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

// 2. Polyfill for filter()

// Reference: 
// Array.filter((num, i, arr) => {})

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

// 3. Polyfill for reduce()

// Reference: 
// Array.reduce((accumulator, currentValue, index, array) => {}, initialValue)

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

// 4. Polyfill for Call Method

// let car1 = {
//     color: "Red",
//     company: "Ferrari",
// };

// function purchaseCar(currency, price) {
//     console.log(
//         `I have purchased ${this.color} - ${this.company} car for ${currency}${price}`
//     );
// }

// Function.prototype.myCall = function (context = {}, ...args) {
//             // here this is purchaseCar  
//     if (typeof this !== "function") {
//         throw new Error(this + "It's not Callable");
//     }

//     context.fn = this; // here this is purchaseCar
//     context.fn(...args);
// }

// // purchaseCar.call(car1, "$", 50000);

// purchaseCar.myCall(car1, "$", 50000);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 

// 5. Polyfill for Appy Method

// let car1 = {
//     color: "Red",
//     company: "Ferrari",
// };

// function purchaseCar(currency, price) {
//     console.log(
//         `I have purchased ${this.color} - ${this.company} car for ${currency}${price}`
//     );
// }

// Function.prototype.myApply = function (context = {}, args = []) {  
//     if (typeof this !== "function") {
//         throw new Error(this + "It's not Callable");
//     }

//     if (!Array.isArray(args)) {
//         throw new TypeError("CreateListFromArrayLike called on non-object")
//     }

//     context.fn = this; 
//     context.fn(...args);
// }

// // purchaseCar.apply(car1, ["$", 50000]);

// purchaseCar.myApply(car1, ["$", 50000]);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 

// 6. Polyfill for Bind Method

// let car1 = {
//     color: "Red",
//     company: "Ferrari",
// };

// function purchaseCar(currency, price) {
//     console.log(
//         `I have purchased ${this.color} - ${this.company} car for ${currency}${price}`
//     );
// }

// Function.prototype.myBind = function (context = {}, ...args) {  
//     if (typeof this !== "function") {
//         throw new Error(this + "cannot be bound as it's not callable");
//     }

//     context.fn = this;
//     return function (...newArgs) {
//         return context.fn(...args, ...newArgs);
//     };
// };

// // const newFunc = purchaseCar.bind(car1, "$", 50000);
// // newFunc();

// // const newFunc = purchaseCar.myBind(car1);
// // newFunc("$", 50000);

// const newFunc = purchaseCar.myBind(car1, "$");
// newFunc(50000);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 

// Closures in Javascript
// 7. Polyfill for Once function

// It is more Generic Method to solve the Ques 7: Make this run only once.
// using Lodash

// function once(func, context){
//     let ran;

//     return function (){
//         if(func){
//             ran = func.apply(context || this, arguments);
//             func = null;
//         }
//         return ran;
//     };
// }

// const hello = once(function(a, b){
//     console.log("hello", a, b);
// });

// hello(1, 2);
// hello(1, 2);
// hello(1, 2);
// hello(1, 2);
// hello(1, 2);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 

// 8. Polyfill for Implement Caching/Memoize 

// // const clumsySquare = (num1, num2) => {
// //     for(let i = 1; i <= 100000000; i++){
// 
// //     }
// //     return num1 * num2;
// // };

// // console.time("First call");
// // console.log(clumsySquare(9467, 7649)); // 72413083
// // console.timeEnd("First call");  // First call: 174.943115234375 ms
// // 
// // console.time("Second call");
// // console.log(clumsySquare(9467, 7649)); // 72413083
// // console.timeEnd("Second call"); // Second call: 180.554931640625 ms


// function myMemoize(fn, context){
//     const res = {}; // this will be the place where the result for our previously executed function clumsySquare() will store or for the cache for our function

//     return function(...args){
//         var argsCache = JSON.stringify(args); // In return function all the parameter we are passing is to converted as string to push it over for res object, the the operational square value is as number.

//         if (!res[argsCache]) {
//             res[argsCache] = fn.call(context || this, ...args);
//         } 
//         return res[argsCache];
//     };
// }

// // this is how the res object look like in myMemoize function. and if it's find's out it already has those parameters so it's just going to return us this value. 
// // res = {
// //     "9467, 7649": 72413083,
// // }

// const clumsySquare = (num1, num2) => {
//     for(let i = 1; i <= 100000000; i++){

//     }
//     return num1 * num2;
// };

// const memoizedClumzySquare = myMemoize(clumsySquare);

// console.time("First call");
// console.log(memoizedClumzySquare(9467, 7649));
// console.timeEnd("First call");

// console.time("Second call");
// console.log(memoizedClumzySquare(9467, 7649));
// console.timeEnd("Second call");

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- 
