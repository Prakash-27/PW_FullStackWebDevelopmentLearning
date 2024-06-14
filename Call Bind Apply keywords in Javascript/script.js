// call, Bind and Apply in Javascript (Explicit Binding)

// Question 1 - What is Call?

// var obj = { name: "Piyush" };

// function sayHello(age) {
//     return "Hello " + this.name + " is " + age; 
// }

// console.log(sayHello()); // Hello undefined // here this.name is refering to window object.
// console.log(sayHello.call(obj, 24));


//---------------------------------------------------------------------------------------------------------------

// Question 2 - What is Apply?

// var obj = { name: "Piyush" };

// function sayHello(age, profession) {
//     return "Hello " + this.name + " is " + age + " and is an " + profession; 
// }
 
// console.log(sayHello.call(obj, 24, "Software Engineer")); // Hello Piyush is 24 and is an Software Engineer
// // console.log(sayHello.apply(obj, 24, "Software Engineer")); // TypeError: CreateListFromArrayLike called on non-object
// console.log(sayHello.apply(obj, [24, "Software Engineer"])); // Hello Piyush is 24 and is an Software Engineer

//---------------------------------------------------------------------------------------------------------------

// Question 3 - What is Bind?

// var obj = { name: "Piyush" }; 

// function sayHello(age, profession) {
//     return "Hello " + this.name + " is " + age + " and is an " + profession; 
// }
 
// const bindFunc = sayHello.bind(obj);

// console.log(bindFunc); // this bindFunc will return the sayHello().
// /**
//  * ƒ sayHello(age, profession) {
//  *   return "Hello " + this.name + " is " + age + " and is an " + profession; 
//  * }
//  */
// console.log(bindFunc(24, "Software Engineer")); // Hello Piyush is 24 and is an Software Engineer
// console.log(bindFunc(69, "Youtuber")); // Hello Piyush is 69 and is an Youtuber

//---------------------------------------------------------------------------------------------------------------

// Question 4 - Output Based Question

// const person = { name: "Piyush" };

// function sayHi(age) {
//     return `${this.name} is ${age}`;
// }

// console.log(sayHi.call(person, 24)); // Piyush is 24
// console.log(sayHi.bind(person, 24));
/**
 * ƒ sayHi(age) {
 *  return `${this.name} is ${age}`;
 * }
 */

//---------------------------------------------------------------------------------------------------------------

// Question 5 - Call with function inside object

// const age = 10;

// var person = {
//     name: "Piyush",
//     age: 20,
//     getAge: function () {
//         return this.age;
//     },
// };

// var person2 = { age: 24 };

// console.log(person.getAge()); // 20
// console.log(person.getAge.call(person2)); // 24
// console.log(person.getAge.apply(person2)); // 24
// console.log(person.getAge.bind(person2)()); // 24

//---------------------------------------------------------------------------------------------------------------

// Question 6 - What is the output?

// var status = "Smile";

// setTimeout(() => {
//     const status = "happy Smile";

//     const data = {
//         status: "Avacado",
//         getStatus() {
//             return this.status;
//         },
//     };

//     console.log(data.getStatus()); // Avacado
//     console.log(data.getStatus.call(this)); // Smile
// }, 0);

//---------------------------------------------------------------------------------------------------------------

// Question 7 - Call printAnimals such that it prints all animals in object

// const animals = [
//     { species: "Lion", name: "King" },
//     { species: "Whale", name: "Queen" },
// ];

// function printAnimals(i) {
//     this.print = function () {
//         console.log("#" + i + " " + this.species + ": " + this.name);
//     };
//     this.print();
// }

// printAnimals.call(animals); // #undefined undefined: undefined

// // we need to iterate through the for loop because animals are Array.

// for (let i = 0; i < animals.length; i++) {
//     printAnimals.call(animals[i], i); // #0 Lion: King #1 Whale: Queen
// };

// animals.forEach((animal, i) => {
//     printAnimals.call(animal, i); // #0 Lion: King #1 Whale: Queen
// });

//---------------------------------------------------------------------------------------------------------------

// Question 8 - Append an array to another array

// const array = ["a", "b"];
// const elements = [0, 1, 2];

// array.push(elements);
// console.log(array);
/** 
 * (3) ['a', 'b', Array(3)]
 *   0: "a"
 *   1: "b"
 *   2: (3) [0, 1, 2]
 *   length: 3
[[Prototype]]: Array(0)
 */

// array.push.apply(array, elements);
// console.log(array); // (5) ['a', 'b', 0, 1, 2]

// How to append 2 arrays using concatination.
// How to append 2 arrays using for loop.

//---------------------------------------------------------------------------------------------------------------

// Question 9 - Using apply to enhance Built-in functions

// // Find min/max number in an array
// const numbers = [2, 1, 5, 3, 4];

// // Loop based algorithm:
// function maximum(number) {
//    let max = -Infinity; 
//    let min = Infinity;

//     for(let i = 0; i < number.length; i++) {
//         if(number[i] > max) {
//            max = number[i];
//         }
//         if(number[i] < min) {
//            min = number[i];
//         }
//     };

//     console.log("Maximum value is: " + max); // 5
//     console.log("Minimum value is: " + min); // 1
// }
// console.log(maximum(numbers)); 

// console.log(Math.max(...numbers)); // 5

// console.log(Math.max.apply(null, numbers)); // 5
// console.log(Math.min.apply(null, numbers)); // 1


//---------------------------------------------------------------------------------------------------------------

// Question 10 - Bound function

// function f() {
//     console.log(this); // this will invoke window object.
// }

// let user = {
//     g: f.bind(null),
// };

// user.g(); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}

//---------------------------------------------------------------------------------------------------------------

// Question 11 - Bind Chaining

// function f() {
//     console.log(this.name);
// }

// // f.bind({ name: "John" }).bind({ name: "Ann" }); // bind will not allow Bind Chaining, the function which is bound by using bind keyword cannot be rebound.
// f = f.bind({ name: "John" });

// f();

//---------------------------------------------------------------------------------------------------------------

// Question 12 - Fix the line  to make code work properly

// function checkPassword(success, failed) {
//     let password = prompt("Password?", "");
//     if (password == "Roadside Coder") success();
//     else failed();
// }

// let user = {
//     name: "Piyush Agarwal",

//     loginSuccessful() {
//         console.log(`${this.name} logged in`);
//     },

//     loginFailed() {
//         console.log(`${this.name} failed to log in`);
//     },
// };

// checkPassword(user.loginSuccessful.bind(user), user.loginFailed.bind(user));

//---------------------------------------------------------------------------------------------------------------

// Question 13 - Partial application for login function

// function checkPassword(ok, fail) {
//     let password = prompt("Password?", "");
//     if (password == "Roadside Coder") ok();
//     else fail();
// }

// let user = {
//     name: "Piyush Agarwal",

//     login(result) {
//         console.log(this.name + (result ? " login successful" : "login failed"));
//     },
// };

// console.log(user.login.bind());

// // we need to return a function so use bind. 
// checkPassword(user.login.bind(user, true), user.login.bind(user, false));

//---------------------------------------------------------------------------------------------------------------

// Question 14 - Explicit Binding with Arrow Function

// const age = 10;

// var person = {
//     name: "Piyush",
//     age: 20,
//     getAgeArrow: () => console.log(this, this.age), // Arrow function regardless of if it's been called by itself call, bind, apply, we can't manipualte the context of the Arrow function with the help of call, bind, apply, so it doesn't work at all.
//     getAge: function () {
//         console.log(this.age);
//     },
// };

// var person2 = { age: 24 };

// person.getAgeArrow.call(person2); // Arrow function is depend on the parent normal function to get this values, but in thiscase arrow function doesn't have any parent normal function, so it point to window object.
// person.getAge.call(person2); // 24

//---------------------------------------------------------------------------------------------------------------

// Question 15 - Polyfill for Call Method

// let car1 = {
//     color: "Red",
//     company: "Ferrari",
// };

// function purchaseCar(currency, price) {
//     console.log(
//         `I have purchased ${this.color} - ${this.company} car for ${currency}${price}`
//     );
// }

// // purchaseCar.call(car1, "$", 50000);

// Function.prototype.myCall = function (context = {}, ...args) {
//             // here this is purchaseCar  
//     if (typeof this !== "function") {
//         throw new Error(this + "It's not Callable");
//     }

//     context.fn = this; // here this is purchaseCar
//     context.fn(...args);
// }

// // purchaseCar.myCall(car1, "$", 50000);

//---------------------------------------------------------------------------------------------------------------

// Question 16 - Polyfill for Appy Method

// let car1 = {
//     color: "Red",
//     company: "Ferrari",
// };

// function purchaseCar(currency, price) {
//     console.log(
//         `I have purchased ${this.color} - ${this.company} car for ${currency}${price}`
//     );
// }

// // purchaseCar.apply(car1, ["$", 50000]);

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

// purchaseCar.myApply(car1, ["$", 50000]);

//---------------------------------------------------------------------------------------------------------------

// Question 17 - Polyfill for Bind Method

// let car1 = {
//     color: "Red",
//     company: "Ferrari",
// };

// function purchaseCar(currency, price) {
//     console.log(
//         `I have purchased ${this.color} - ${this.company} car for ${currency}${price}`
//     );
// }

// // const newFunc = purchaseCar.bind(car1, "$", 50000);
// // newFunc();

// Function.prototype.myBind = function (context = {}, ...args) {  
//     if (typeof this !== "function") {
//         throw new Error(this + "cannot be bound as it's not callable");
//     }

//     context.fn = this;
//     return function (...newArgs) {
//         return context.fn(...args, ...newArgs);
//     };
// };

// const newFunc = purchaseCar.myBind(car1);
// newFunc("$", 50000);

//---------------------------------------------------------------------------------------------------------------


