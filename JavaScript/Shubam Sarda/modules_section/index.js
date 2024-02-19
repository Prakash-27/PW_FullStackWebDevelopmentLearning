// In javascript all file are known as modules may be i create a another file as config.js which is also called as module.
// Every file in javascript as considered as module.

// As we grow in future we have more complexity, more information, we are going to write function and class that means we are stick to one file we need to divide our project into multiple files
// hence for configuration we can create config.js file, are may be we have a helper file we can store all type of small functions there, are we have a file that have a function related to conversion so maybe have a converted.js, so in this we are going to divide this in multiple files and that were the hole module come into picture.

// default way to import connect 
// import connect, {username, age, disconnect} from "./config.js";

import {username, age, connect, disconnect} from "./config.js";
import {convert as conversion} from "./helper.js";

console.log(username);
console.log(age);
console.log(connect());
console.log(disconnect());


const currency = conversion(10);

console.log(currency);

