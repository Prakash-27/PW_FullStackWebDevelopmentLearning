// Object Binding - 1) Implicit 2) Explicit

// 1) Implicit: implicit binding is applied when you invoke a function in an object using a (.) Notation, this keyword in such secnario point to object using which the function was invoked or simply object on the left hand side.

// 2) Explicit: explicit binding can applied using call, bind, apply.

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 'this' Keyword in Javascript (Implicit Binding)
// Explain 'this' keyword?

// Global object

// this.a = 5; 
// console.log(this.a); // 5

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Window object
// In window object have the a = 5 value. 

// console.log(this); // Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// function getParam() {
//     console.log(this.a); // this keyword will target parent in thiscase parent is getParam() (which is Window object).
// }
// getParam(); // 5

// const getParams = () => {
//     console.log(this.a); // this keyword is working in arrow function because it is refering window object, that why it's working, if we use this keyword in object with arrow functions it will throw error.
// }

// getParams(); // 5 

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// let user = {
//     name: 'Piyush',
//     age: 24,
//     childObj: {
//         newName: "Roadside Coder",
//         getDetails() {
//             console.log(this.newName, "and", this.name);
//         },
//     },
//     getItems: () => {
//         console.log(this.name);
//     },
//     getInformation() {
//         const nestedArrow = () => console.log(this.name);
//         nestedArrow();
//     }
// };

// user.childObj.getDetails();
// user.getItems();
// user.getInformation();

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// class Users {
//     constructor(name){
//         this.name = name;
//     }

//     getName() {
//         console.log(this.name);
//     }
// }

// const users = new Users("Piyush");

// console.log(users);
// users.getName();

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 1 - What is the Output?

// const user = {
//     firstName: "Piyush!",
//     getName() {
//         const firstName = "Piyush Agarwal!";
//         return this.firstName;
//     },
// };

// console.log(user.getName()); // Piyush!

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 2 - What is the result of accessing its ref? Why?

// function makeUser() {
//     return {
//         name: "John",
//         ref: this,
//     };
// }

// let user = makeUser();

// console.log(user.ref.name); // no output empty in console
// console.log(user.name); // John
// console.log(user.ref); // here 'ref: this' is refer to window object, because 'ref: this', parent 'return{}' have no parent object, that's why it logging window object -> Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// Modifiying the function:

// function makeUser() {
//     return {
//         name: "John",
//         ref() {
//             return this; // ref() is point to parent above return object, now the 'return this' is no longer pointing to window object, it's already inside the object so 'return this' will point to name: "John". 
//         }
//     };
// }

// let user = makeUser();

// console.log(user.ref());
// console.log(user.ref().name);

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 3 - What is the Output?

// const user = {
//     name: "Piyush Agarwal!",
//     logMessage() {
//         console.log(this.name);
//     },
// };

// setTimeout(user.logMessage, 1000); // undefined because, set timeout is using  user.logMessage as a callback rather than a method so this complete, logMesssage() function right here will be copied inside set timeout and user.logMessage in set timeout will no longer have access to this user object right over here and so obviously user.logMessage in set timeout will since it's executing independently, in user.logMessage in set timeout case this will have the window object, and window object doesn't have anything such as this.name, that's why it is printing undefined.   

// modified one to access user.logMessage in setTimeout()

// setTimeout(function () {
//     user.logMessage(); // we can avoid creating user.logMessage as an callback for setTimeout(), instead we can wrap user.logMessage() inside the Anonyumous function, we are calling user.logMessage() inside Anonyumous function, then user.logMessage() inside Anonyumous function will invoke logMessage() method of user object.     
// }, 1000);

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 4 - What is the Output?

// const user = {
//     name: "Piyush",
//     greet() {
//         return `Hello, ${this.name}!`;
//     },
//     farewell: () => {
//         return `Goodbye, ${this.name}!`;
//     },
// };

// console.log(user.greet()); // Hello, Piyush!
// console.log(user.farewell()); // Goodbye, undefined!

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 5 - Create an object calculator

// let calculator = {
//     read(){
//         this.a = +prompt("a = ", 0);
//         this.b = +prompt("b = ", 0);
//     },

//     sum(){
//         return this.a + this.b;
//     },

//     mul(){
//         return this.a * this.b;
//     },
// };

// calculator.read();
// console.log(calculator.sum()); // 7
// console.log(calculator.mul()); // 10

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 6 - What will be the Output?

// var length = 4;
// function callback() {
//     console.log(this.length);
// }

// const object = {
//     length: 5,
//     method(fn) {
//         fn();
//     },
// };

// object.method(callback); // 4


// modified one

// var length = 4;
// function callback() {
//     console.log(this.length);
// }

// const object = {
//     length: 5,
//     method() { // arguments = [callback, 2, 3], this arguments array in itself is an object, so when you call this callback over arguments[0], this will obviously will target to parent object, the parent object is '[callback, 2, 3]' this array over here, and if you go on and check the prototype of an array it has a property called length, so length of an array will be 3 here as an output.
//         console.log(arguments);    
//         arguments[0]();
//     },
// };

// object.method(callback, 2, 3);

//------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 7 - Implement calc

// const calc = {
//     total: 0,
//     add(a) {
//         this.total += a;
//         return this;
//     },
//     multiply(b) {
//         this.total *= b;
//         return this;
//     },
//     subtract(c) {
//         this.total -= c;
//         return this;
//     },
// }

// const result = calc.add(10).multiply(5).subtract(30).add(10);
// console.log(result.total); // 30
