// What is currying in Javascript?
// currying is a function that takes one argument at a time, and returns a new function expecting the next arguments.
// It is a conversion of function from callable as f(a, b) into callable as f(a)(b).
// And curried function are constructed by chaining closures immediately returning their inner function simultaniously

// function f(a, b) {
//     return `${a} ${b}`;
// }
// console.log(f(5, 6)); // 5 6

// function f(a) {
//     return function (b) {
//         return `${a} ${b}`;
//     };
// };

// console.log(f(5));
// console.log(f(5)(6));

//--------------------------------------------------------------------------------------------------------------------

// Question - Why should we use currying?

// Following are the reasons why currying is good :

// ✅ It makes a function pure which makes it expose to less errors and side effects.

// ✅ It helps in avoiding the same variable again and again.

// ✅ It is a checking method that checks if you have all the things before you proceed.

// ✅ It divides one function into multiple functions so that one handles one set of responsibility.

//--------------------------------------------------------------------------------------------------------------------

// How does currying work?

// Currying is a function that takes multiple arguments as input. It transform the function 
// into a number of functions where every function will accept one argument.

// /*Simple function*/ 
// const add = (a, b, c)=>{
//     return a + b + c
// }
// console.log(add(1,2,3)); // 6

// /* Curried Function */
// const addCurry = (a) => { // takes one argument
//     return (b)=>{                 //takes second argument
//         return (c)=>{             //takes third argument
//             return a+b+c
//         }
//     }
// }
// console.log(addCurry(1)(2)(3)); //6

//--------------------------------------------------------------------------------------------------------------------

// Question 1 - Convert sum(2,6,1) to sum(2)(6)(1)

// /*Simple function*/ 
// function sum(a, b, c) {
//     return a + b + c;
// }

// console.log(sum(2, 3, 4)); // 9

// function sum(a) {
//     return function (b) {
//         return function (c) {
//             return a + b + c;
//         }; 
//     };
// };

/* you can call it in two ways*/
// console.log(sum(2)(3)(4)); // 9

// const sum1 = sum(2);
// const sum2 = sum1(3);
// const result = sum2(4);

// console.log(result); // 9

//-------------------------------------------------------------------------------------------------------------------

/* Question 2 - 
    evaluate("sum")(4)(2) => 6
    evaluate("multiply")(4)(2) => 8
    evaluate("divide")(4)(2) => 2
    evaluate("substract")(4)(2) => 2
*/

// function evaluate(operation) {
//     return function (a) {
//         return function (b) {
//             if (operation === "sum") return a + b;
//             else if (operation === "multiply") return a * b;
//             else if (operation === "divide") return a / b;
//             else if (operation === "substract") return a - b;
//             else return "Invalid Operation";
//         };
//     };
// }

// console.log(evaluate("sum")(4)(2)); // 6
// console.log(evaluate("multiply")(4)(2)); // 8
// console.log(evaluate("divide")(4)(2)); // 2
// console.log(evaluate("substract")(4)(2)); // 2

// // This is one of the use cases of currying that we initialized the evaluate() function with once like multiply, sub, add, divide we wanted to, so we cannot initialize it again and again by providing multiply every time we call mul(3)(5), we just provided it and initialize it once and now we can use this mul(3)(5) function here to multiply the number again and again.    

// const mul = evaluate("multiply");

// console.log(mul(3)(5)); // 15
// console.log(mul(2)(6)); // 12

//--------------------------------------------------------------------------------------------------------------------

// Question 3 - Infinite Currying -> sum(1)(2)(3)....(n)

// function add(a) {
//     return function (b) {
//         if (b) {
//             return add(a + b);
//         } else {
//             return a;
//         }
//     }
// }

// console.log(add(1)(2)(3)(4)());

//-------------------------------------------------------------------------------------------------------------------

// Question 4 - Partial Application vs Currying

// Let's see the partial application of the same function sum: 
//------------------------------------------------------------

// partial application transform function into another function with small arity(just means the number of operands or the arguments a function receives)
// in partial application we have three arguments but we are returning two functions.

// function sum(a) {
//     return function (b, c) {
//         return a + b + c;
//     }
// }

/* you can call it in two ways*/

// console.log(sum(20)(1, 4)); // 25

           // (Or)

// const x = sum(10);
// console.log(x(5, 6)); // 21           
// console.log(x(3, 2)); // 15          


// Normally how do we write a curried function:
//---------------------------------------------

// if we were to write this same function with currying we would have written it something like this because in this we have three arguments and we are returning three functions    

// function sum(a) {
//     return function (b) {
//         return function (c) {
//            return a + b + c;
//         };
//     };
// }

// console.log(sum(10)(5)(6)); // 21
// console.log(sum(10)(3)(2)); // 15

//-------------------------------------------------------------------------------------------------------------------

// Question 5 - Manipulating DOM

// function updateElementText(id){
//     return function (content) {
//         document.querySelector("#" + id).textContent = content;
//     };
// }

// // updateElementText("heading")("Hello Javascript");

// const updateHeading = updateElementText("heading");

// updateHeading("Hello Javascript"); // we can use this function again and again in our code according let say the condition click on a button we can call this function again and again
// // we don't need to use query selector again and again by providing it the id we just need to initialize it once and we can use it just like this. 

//-------------------------------------------------------------------------------------------------------------------

// Question 6 - curry() implementation
// Converts f(a, b, c) into f(a)(b)(c)

function curry(func) {
    // args takes arguments in the form of array eg - [a, b, c]
    return function curriedFunc(...args) {
        // console.log(args.length, func.length);
        //check if current args passed equals the number of args function expects 
        if (args.length >= func.length) {
            // if yes, we spread args elements to pass into func (spread). This is our base case.
            return func(...args);
        } else {
            /* if not, we return a function that collects the next arguments passed in next and 
               we recursively call curriedFunc, accumulating and spreading the values of args first and then
               the values of next. next will take into consideration a variable amount of next arguments
               e.g (1, 2) (1) (1,2,3) */
            return function (...next) {
                return curriedFunc(...args, ...next);
            };
        };
    };
}

// const sum = (a, b, c) => a + b + c;

// const totalSum = curry(sum);

// console.log(totalSum(1)(2)(3));

//-------------------------------------------------------------------------------------------------------------------

// Question 7 - Write a function curry() that converts f(a,b,c) into a curried function f(a)(b)(c) with placeholder ( _ ) support.

// function curry(func) {

//     return function curried(...args) {   // we need to return a function to make it curry-able.
  
//       // 1. If the arguments are extra then eliminate them
//       // we don't want to pass 6 arguments when the expected is 3.
//       // it will interfere with our placeholder logic
//       const sanitizedArgs = args.slice(0, func.length);
  
//       // see if placeholder is available in arguments
//       const hasPlaceholder = sanitizedArgs.some(arg => arg == curry.placeholder);
  
//       // if no placeholder and arguements are equal to what expected then it is normal function call
//       if(!hasPlaceholder && sanitizedArgs.length == func.length) {
//         return func.apply(this, sanitizedArgs);
//       }
  
//       // else we need to replace placeholders with actual values
//       // we call helper function `mergeArgs` for this
//       // we pass first and next arguments to helper function
//       return function next(...nextArgs) {
//         return curried.apply(this, mergeArgs(sanitizedArgs, nextArgs));
//       }
  
//     } 
//   }
  
//   function mergeArgs(args, nextArgs) {
  
//     let result = [];
  
//     // iterate over args (because we need to replace from it) 
//     // in each iteration, if we find element == curry.placeholder
//     // then we replace that placeholder with first element from nextArgs
//     // else we put current element
//     args.forEach((arg, idx) => {
//       if(arg == curry.placeholder) {
//         result.push(nextArgs.shift());
//       } else {
//         result.push(arg);
//       }
//     });
  
//     // we merge both, because there might be chance that args < nextArgs
//     return [...result, ...nextArgs];
//   }
  
//   curry.placeholder = Symbol()

//-------------------------------------------------------------------------------------------------------------------
