// IIFE - Immediately-Invoked Function Expression

// Pronounced "Iffy" by Ben Alman who introduced the acronym

// Variations:

// with anonymous arrow function inside:
(() => {
    // do stuff
})();

// with the function keyword:
(function () {
     // do stuff
})();

// with a function name (allows for recursion):
(function myIIFE() {
    num++;
    console.log(num);
    return num !== 5 ? myIIFE(num) : console.log('finished!');
})(num = 0);
/* 1
   2
   3
   4
   5
   finished!
 */

//------------------------------------------------------------------------------   

// Reason 1) Does not pollute the global object namespace

// global
const x = "whatever";
const helloWorld = () => "Hello World!";

// isolate declarations within the function
(() => {
    const x = "iife whatever";
    const helloWorld = () => 'Hello IIFE!';
    console.log(x); // iife whatever
    console.log(helloWorld()); // Hello IIFE!
})();

console.log(x); // whatever
console.log(helloWorld()); // Hello World!

//------------------------------------------------------------------------------   

// Reason 2) Private Variables and Methods from Closure

const increment = (() => {
    let counter = 0;
    console.log(counter);
    const credits = (num) => console.log(`I have ${num} credit(s).`);
    return () => { 
        counter++; 
        credits(counter); 
    }
})(); // 0 (IIFE will run Only one time), it just called counter only, not credits and return function.

increment(); // I have 1 credit(s).
increment(); // I have 2 credit(s).
// console.log(counter); // script.js:63 Uncaught ReferenceError: counter is not defined ((because it is not defined in Global Scope.)
// credits(3); // Uncaught ReferenceError: credits is not defined (because it is not defined in Global Scope, we can only access in function, block, lexical scope.)

//------------------------------------------------------------------------------   

// Reason 3) The Module Pattern

const Score = (() => {
    let count = 0;

    return {
        current: () => { return count },
        increment: () => { count++ },
        reset: () => { count = 0 }
    }
})();

console.log(Score.current());

Score.increment();
console.log(Score.current());

Score.increment();
console.log(Score.current());

Score.reset();
console.log(Score.current());

//------------------------------------------------------------------------------   

// The Revealing Pattern is a variation of the Module Pattern

const Game = (() => {
    let count = 0;
    const current = () => { return `Game score is ${count}.`};
    const increment = () => { count++ };
    const reset = () => { count = 0 };

    return {
        current: current,
        increment: increment,
        reset: reset
    }
})();

console.log(Game.current()); 

Game.increment();
console.log(Game.current()); // Game score is 1.

Game.increment();
console.log(Game.current()); // Game score is 2.

Game.reset();
console.log(Game.current()); // Game score is 3.

//------------------------------------------------------------------------------   

// Injecting a namespace object

((namespace) => {
    namespace.count = 0;
    namespace.current = function () { return `App count is ${this.count}.` };
    namespace.increment = function () { this.count++ };
    namespace.reset = function () { this.count = 0 };
})(window.App = window.App || {});

App.increment();
console.log(App.current()); // App count is 1.

App.increment();
console.log(App.current()); // App count is 2.

App.reset();
console.log(App.current()); // App count is 0.