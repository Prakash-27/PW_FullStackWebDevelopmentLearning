// Lecture CheckList
/**
 * 1. Introduction to exceptional handling in JavaScript.
 * 2. Introduction to try-catch.
 * 3. Syntax & Flowchart of try-catch.
 * 4. try-catch-finally.
 */

// function isEvenOrOdd(x) {
//     if (x % 2 == 0) {
//         return "Even";
//     } else {
//         return Odd;
//     }
// }
// console.log(isEvenOrOdd(8));
// console.log(isEvenOrOdd(11));

/**
 * PS C:\Users\Prakash\Desktop\Full Stack Web Development Learning\JavaScript> node Part-7/errorHandlingUsingTryCatch.js
Even
C:\Users\Prakash\Desktop\Full Stack Web Development Learning\JavaScript\Part-7\errorHandlingUsingTryCatch.js:13
        return odd;
        ^

ReferenceError: odd is not defined
    at isEvenOrOdd (C:\Users\Prakash\Desktop\Full Stack Web Development Learning\JavaScript\Part-7\errorHandlingUsingTryCatch.js:13:9)        
    at Object.<anonymous> (C:\Users\Prakash\Desktop\Full Stack Web Development Learning\JavaScript\Part-7\errorHandlingUsingTryCatch.js:18:13)    at Module._compile (node:internal/modules/cjs/loader:1256:14)      
    at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
    at Module.load (node:internal/modules/cjs/loader:1119:32)
    at Module._load (node:internal/modules/cjs/loader:960:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

Node.js v18.17.1
 */

// function isEvenOrOdd(x) {
//     if (x $ 2 == 0) {
//         return "Even";
//     } else {
//         return Odd;
//     }
// }
// console.log(isEvenOrOdd(8));
// console.log(isEvenOrOdd(11));
/**
 * PS C:\Users\Prakash\Desktop\Full Stack Web Development Learning\JavaScript> node Part-7/errorHandlingUsingTryCatch.js
C:\Users\Prakash\Desktop\Full Stack Web Development Learning\JavaScript\Part-7\errorHandlingUsingTryCatch.js:39
    if (x $ 2 == 0) {
          ^

SyntaxError: Unexpected identifier
    at internalCompileFunction (node:internal/vm:73:18)
    at wrapSafe (node:internal/modules/cjs/loader:1178:20)
    at Module._compile (node:internal/modules/cjs/loader:1220:27)      
    at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
    at Module.load (node:internal/modules/cjs/loader:1119:32)
    at Module._load (node:internal/modules/cjs/loader:960:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

Node.js v18.17.1
 */

// function isEvenOrOdd(x) {
//     console.log("Entering the even odd function");
//     if (x % 2 == 0) {
//         return "Even";
//     } else {
//         return "Odd";
//     }
// }
// console.lo(isEvenOrOdd(8));

/**
 * PS C:\Users\Prakash\Desktop\Full Stack Web Development Learning\JavaScript> node Part-7/errorHandlingUsingTryCatch.js
Entering the even odd function
C:\Users\Prakash\Desktop\Full Stack Web Development Learning\JavaScript\Part-7\errorHandlingUsingTryCatch.js:74
console.lo(isEvenOrOdd(8));
        ^

TypeError: console.lo is not a function
    at Object.<anonymous> (C:\Users\Prakash\Desktop\Full Stack Web Development Learning\JavaScript\Part-7\errorHandlingUsingTryCatch.js:74:9) 
    at Module._compile (node:internal/modules/cjs/loader:1256:14)      
    at Module._extensions..js (node:internal/modules/cjs/loader:1310:10)
    at Module.load (node:internal/modules/cjs/loader:1119:32)
    at Module._load (node:internal/modules/cjs/loader:960:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12)
    at node:internal/main/run_main_module:23:47

Node.js v18.17.1
 */

function isEvenOrOdd(x) {
    // console.log("Entering the even odd function");
    if (x % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
console = {lo: function f(A) {}}
console.lo(isEvenOrOdd(8));

// no error 

