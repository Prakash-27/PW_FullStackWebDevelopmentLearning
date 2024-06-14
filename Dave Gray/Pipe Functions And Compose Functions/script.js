// Functional Programming

// Often uses pipe and compose = higher order functions

/* A higher order function is any function which takes a function as an  
argument, returns a function, or both (it takes it as argument and returns a function).*/

// Here's how a "compose" function works:

// Start with small unary (one parameter) functions
const add2 = (x) => x + 2;
const subtract1 = (x) => x - 1;
const multiplyBy5 = (x) => x * 5;

// Notice how the functions execute from inside to outside & right to left
const result = multiplyBy5(subtract1(add2(4)));
console.log(result); // 25

// The above is NOT a compose function - let's make one.

// Making our own compose and pipe functions

/* Note: Ramda.js and lodash libraries have their own built-in 
compose and pipe functions. lodash calls pipe "flow".*/

/* To get the compose order from right to left as we see with nested 
function calls in our example above, we need reduceRight... 
(Notice how the functions execute from inside to outside & right to left)*/

function compose (...fns) {
    return function (val) {
       return fns.reduceRight((prev, fn) => {
            return fn(prev);
        }, val);
    }
}
// OR
// Single line function
// const compose = (...fns) => (val) => fns.reduceRight((prev, fn) => fn(prev), val);

const compResult = compose(multiplyBy5, subtract1, add2)(4);
console.log(compResult); // 25

/* To do the same, but read from left to right... we use "pipe".
It is the same except uses reduce instead of reduceRight (so we can list the functions order from left to right that we want to use them).*/

function pipe (...fns) {
    return function (val) {
       return fns.reduce((prev, fn) => {
            return fn(prev);
        }, val);
    }
}
// (OR)
// Single line function
// const pipe = (...fns) => (val) => fns.reduce((prev, fn) => fn(prev), val);

const pipeResult = pipe(add2, subtract1, multiplyBy5)(5);
console.log(pipeResult); // 30

// You will often see the functions on seperate lines

const pipeResult2 = pipe(
    add2,
    subtract1,
    multiplyBy5
)(6);
console.log(pipeResult2); // 35

// The examples we have been looking at use a "pointer free" style and with a unary function you don't see the parameter passed between each function you just see the parameter added at the end of the compose or pipe function if we're call if we're immediately invoking function it doesn't have to be that way and I will show you an example of that as well but now let's look at some examples to where if you had possibly more than one parameter or you're not working with a unary function 

// example with a 2nd parameter
function divideBy (divisor, num) {
    return num / divisor;
}
// (OR)
// Single line function:
//const divideBy = (divisor, num) => num / divisor;

const pipeResult3 = pipe(
    add2, // 7
    subtract1, // 6
    multiplyBy5, // 35
    x => divideBy(2, x)
)(5);
console.log(pipeResult3); // 15

// Or you could curry the divideBy function for a custom unary function:

function divBy (divisor) {
    return function (num) {
        return num / divisor;
    }
}
// (OR)
// Single line function:
// const divBy = (divisor) => (num) => num / divisor;

const divideBy2 = divBy(2); // partially applied

const pipeResult4 = pipe(
    add2,
    subtract1,
    multiplyBy5,
    divideBy2
)(5);
console.log(pipeResult4); // 15

// Let's look at some examples beyond math functions

const lorem = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
               Nisi quae rerum perferendis dolores ad consequuntur ipsum laudantium facere aspernatur, 
               assumenda ratione, nemo odio animi rem sit, corporis officia temporibus. 
               Ea temporibus voluptatum dolorem facilis ullam, a accusamus quidem veniam ipsa rerum totam culpa earum eos quam vel, 
               nisi, accusantium consequuntur quaerat expedita ipsam quod ad provident! Adipisci eaque perferendis delectus vel autem. 
               Libero odio nobis deserunt sint eligendi quasi voluptates quae molestiae natus dolores magnam harum accusamus, 
               aperiam tenetur aliquid aspernatur ipsa. Debitis, aliquam reiciendis reprehenderit temporibus et ipsum harum repellendus 
               dignissimos adipisci cum suscipit rerum vero enim corporis placeat.`;

const splitOnSpace = (string) => string.split(' ');
const count = (array) => array.length;

const wordCount = pipe(
    splitOnSpace,
    count
);

console.log(wordCount(lorem)); // 205

// The pipe function is reusable
const egbdf = "Every good boy does fine.";
console.log(wordCount(egbdf)); // 5

// Combine Processes: Check for palindrome
const pal1 = "taco cat";
const pal2 = "UFO tofu";
const pal3 = "Dave";

const split = (string) => string.split('');
const join = (string) => string.join('');
const lower = (string) => string.toLowerCase();
const reverse = (array) => array.reverse();

const fwd = pipe(
    split,
    join,
    lower
);

console.log(fwd(pal1)); // taco cat
console.log(fwd(pal2)); // ufo tofu
console.log(fwd(pal3)); // dave

const rev = pipe(
    fwd, // a nested pipe function
    split,
    reverse,
    join
);

console.log(rev(pal1)); // tac ocat
console.log(rev(pal2)); // ufot ofu
console.log(rev(pal3)); // evad

console.log(fwd(pal1) === rev(pal1)); // false
console.log(fwd(pal2) === rev(pal2)); // false
console.log(fwd(pal3) === rev(pal3)); // false


// Clone / Copy functions within a pipe or compose function

// 3 approaches:

// 1) Clone the object before an impure function mutates it 
const scoreObj = { home: 0, away: 0 };

const shallowClone = (obj) => Array.isArray(obj) ? [...obj] : { ...obj };

const incrementHome = (obj) => {
    obj.home += 1; // mutation
    return obj; 
};

const homeScore = pipe(
    shallowClone,
    incrementHome
    // another function,
    // and another function, etc
);

console.log(homeScore(scoreObj)); // {home: 1, away: 0}
console.log(scoreObj); // {home: 0, away: 0}
console.log(homeScore(scoreObj) === scoreObj); // false

// Positive: Fewer function calls (we are only calling this shallowClone function once and the entire chain of functions within our pipe)
// Negative: Create impure functions and that creates testing difficulties and possibly debugging difficulties (impure functions are not really want we want if possible in functional programming so this may not be the way to go)


// 2) Curry the function to create a partial that is unary with compose or pipe function

let incrementHomeB = (cloneFn) => (obj) => {
    const newObj = cloneFn(obj);
    newObj.home += 1; // mutation
    return newObj;
}

// Creates the partial by applying the first argument in advance
incrementHomeB = incrementHomeB(shallowClone);

const homeScoreB = pipe(
    incrementHomeB,
    // another function,
    // and another function, etc
);

console.log(homeScoreB(scoreObj)); // {home: 1, away: 0}
console.log(scoreObj); // {home: 0, away: 0}

// Positive: Pure function with clear dependencies
// Negative: More calls to the cloning function (if you need to do something else with an object and you are creating all of these that may mutate object or arrays then need to pass in that clone function to each one of those however this does meet the definition of a pure function and it does allow for easier debugging and testig and that's what functional programming is all about)

// 3) Insert the clone function as a dependency

const incrementHomeC = (obj, cloneFn) => {
    const newObj = cloneFn(obj);
    newObj.home += 1; // mutation
    return newObj;
}

const homeScoreC = pipe(
    x => incrementHomeC(x, shallowClone),
    // another function,
    // and another function, etc
);

console.log(homeScoreC(scoreObj)); // {home: 1, away: 0}
console.log(scoreObj); // {home: 0, away: 0}

// Positive: Pure function with clear dependencies
// Negative: Non-unary functions in your pipe / compose chain (they just don't look as good and they are a little harder to work with but it's not a huge negative so if you wanted to go this route that would be fine I kind of leaned towards the second one that was curried function that creates a partial and then it's unary inside the pipe or compose just like the other functions are)