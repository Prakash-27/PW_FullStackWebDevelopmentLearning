// Closures in Javascript
// Lexical Scope

// let username = 'Javascript';
// //global scope
// function local(){
//     // local scope
//     console.log(username);
// }
// local();


//global scope
// function local(){
//     // local scope
//     let username = 'Javascript';
// }
// console.log(username);
// local();

//----------------------------------------------------------------------------------------------------------------------
// Closures Eg:
//-------------
// A Closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). 
// In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript closures are created every time a function is created. at function creation time. 

//global scope
function subscribe(){
    let name = 'Roadside Coder'; //name is a local variable created by subscribe 
    // inner scope 2
    function displayName(){ // displayName() is the inner function, a closure.
        // inner scope
        alert(name); // use variable declared in the parent function
    }
    displayName();
}
// subscribe();


let userName = 'Prakash';
function makeFunc(){
    let name = 'Mozilla';
    function displayName(num){
        console.log(name, num, userName);
    } 
    return displayName;
}

// var myFunc = makeFunc();
// myFunc();

makeFunc()(5);

//----------------------------------------------------------------------------------------------------------------------
// Closure Scope Chain 

// Every closure has three scopes:
   // 1. Local Scope (Own scope)
   // 2. Outer Function Scope
   // 3. Global Scope  

// global scope
// let e = 10;
// function sum(a){
//     return function(b){
//         return function(c){
//             // outer functions scope
//             return function(d){
//                 // local scope
//                 return a + b + c + d + e;
//             };
//         };
//     };
// }

// console.log(sum(1)(2)(3)(4));

//another Eg:
// let e = 10;
// function sum(a){
//     return function sum2(b){
//         return function sum3(c){
//             // outer functions scope
//             return function sum4(d){
//                 // local scope
//                 return a + b + c + d + e;
//             };
//         };
//     };
// }

// var sum2 = sum(1);
// var sum3 = sum2(2);
// var sum4 = sum3(3);
// var result = sum4(4);
// console.log(result); // 20

//----------------------------------------------------------------------------------------------------------------------

// Ques 1: What will be logged to console?

// let count = 0;
// (function printCount(){
//     if(count === 0){
//         let count = 1; // shadowing
//         console.log(count); // 1
//     }
//     console.log(count); // 0
// })();

//----------------------------------------------------------------------------------------------------------------------

// Ques 2: Write a function that would allow you to do this

// function createBase(num){
//     return function(innerNum){
//         console.log(innerNum + num);
//     };
// }

// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27

//----------------------------------------------------------------------------------------------------------------------

// Ques 3: Time Optimization

// function find(index){
//     let a = [];
//     for(let i = 0; i < 1000000; i++){
//         a[i] = i * i;
//     }
//     console.log(a[index]);
// }

// console.time('6');
// find(6);
// console.timeEnd('6');
// console.time('12');
// find(12);
// console.timeEnd('12');

// Optimization code in closure
// function find(){
//     let a = [];
//     for(let i = 0; i < 1000000; i++){
//         a[i] = i * i;
//     }

//     return function(index){
//         console.log(a[index]);
//     }
// }

// const closure = find();

// console.time('6');
// closure(6);
// console.timeEnd('6');
// console.time('50');
// closure(50);
// console.timeEnd('50');

//----------------------------------------------------------------------------------------------------------------------

// Ques 4: Block scope and setTimeout

// for(var i = 0; i < 3; i++){
//     setTimeout(function log(){
//         console.log(i); // What is logged?
//     }, 1000);
// }

// output: 3 3 3

// optimized solution
// for(let i = 0; i < 3; i++){
//     setTimeout(function log(){
//         console.log(i); 
//     }, 1000);
// }

// output: 0 1 2

// Without using let, we need to print 0 1 2 as output
// for(var i = 0; i < 3; i++){
//     function inner(i){
//         setTimeout(function log(){
//             console.log(i); 
//         }, 1000);
//     }
//     inner(i);
// }

// output: 0 1 2

//----------------------------------------------------------------------------------------------------------------------

// Ques 5: How would you use a closure to create a private counter?
// This type of Question, solved by module pattern that are we gonna to see in next Question. 
function counter(){
    var _counter = 0;

    function add(increment){
        _counter = _counter + increment; 
    }

    function retrive(){
        return `Counter = ${_counter}`;
    }

    return{
        add,
        retrive,
    }
}

const c = counter();
c.add(5);
c.add(10);
console.log(c.retrive());

//----------------------------------------------------------------------------------------------------------------------

// Ques 6: What is Module Pattern?

// var Module = (function(){
//     function privateMethod(){
//         // do something
//         console.log("private");
//     }

//     return{
//         publicMethod: function(){
//             // can call privateMethod();
//             console.log("public");
//         },
//     };
// })();

// Module.publicMethod();
// Module.privateMethod();

//----------------------------------------------------------------------------------------------------------------------

// Ques 7: Make this run only once 

// let view;
// function likeTheVideo(){
//     let called = 0;

//     return function(){
//         if(called > 0){
//             console.log("We Called this function Already, Won't able to call one more time.");
//         } else{
//             view = "IPL";
//             console.log(view, "On Disnep+ Hotstar");
//             called++;
//         }
//     }
// }

// let iplOnHotstar = likeTheVideo();

// iplOnHotstar();
// iplOnHotstar();

//----------------------------------------------------------------------------------------------------------------------

// It is more Generic Method to solve the Ques 7: Make this run only once.
// using Lodash
// Once Polyfill

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

//----------------------------------------------------------------------------------------------------------------------

// Ques 9: Implement Caching/Memoize Polyfill

// function myMemoize(fn, context){
//     const res = {};

//     return function(...args){
//         var argsCache = JSON.stringify(args);

//         if (!res[argsCache]) {
//             res[argsCache] = fn.call(context || this, ...args);
//         } 
//         return res[argsCache];
//     };
// }

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

//----------------------------------------------------------------------------------------------------------------------

// Ques 10: Difference between Closure and Scope

// Whenever you create a function with in another function then the inner function is the closure, this closure is usually return so we can use the outer function variables at later time this is what a Closure is.

// Where as Scope in javascript defines what variable you have access to there are two kinds of a scope 1) Global 2) Local Scope 

