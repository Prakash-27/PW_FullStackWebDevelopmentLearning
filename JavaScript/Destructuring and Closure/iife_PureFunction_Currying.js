// IIFE - immediately invoke Function Expression

// (function(){
//     console.log("This is an IIFE Function.");
// })()

//Advantages:
//-----------
//Avoid pollution global variables:
//---------------------------------

// const greet = 'Global variable';
// const greeting = () => {
//     return 'hello global variable';
// }
// console.log(greet);
// console.log(greeting());

// (() => {
//     const greet = 'IIFE variable';

//     const greeting = () => {
//         return 'hello IIFE variable';
//     }
// console.log(greet);    
// console.log(greeting());    
// })()

//data privacy:
//-------------

// (() => {
//     let password = '32323';

//     const showPassword = () => {
//         console.log('Password -', password);
//     }
//     showPassword();
// })()

// showPassword(); //Uncaught ReferenceError: showPassword is not defined at iife_PureFunction_Currying.js:40:1


//module pattern:
//---------------

// const point = (() => {
//     let count = 0;
//     return {
//         balance: () => {
//             return count;
//         },
//         increment: () => {
//             count++;
//         },
//         reset: () => {
//             count = 0;
//         },  
//     }
// })()

// console.log(point.balance());
// point.increment();
// point.increment();
// console.log(point.balance());
// point.reset();
// console.log(point.balance());

//--------------------------------------------------------------------------
//Pure Function:
//--------------
//Fuction that always return same output for every same input. 

// function add(a,b){
//     return a + b;
// }
// console.log(add(10,20));

//Impure Function:
//----------------
// let sum = 0;
// function add(a,b){
//     sum = sum + a + b;
//     return sum;
// }
// console.log(add(10,20));

//--------------------------------------------------------------------------
//Function Currying:
//------------------
//Multiple arguments into as sequence of functions

function volume(length){
    return function(width){
        return function(height){
            return length * width * height;
        }
    }
}

volume(2)(3)(6);

