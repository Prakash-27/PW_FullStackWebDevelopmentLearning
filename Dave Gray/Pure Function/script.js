// Pure Functions

// A part of the Functional Programming Paradigm

// Why write Pure functions?
// 1) Clean Code 
// 2) Easy to test
// 3) Easy to debug
// 4) Decoupled and Independent
// 5) Could be added to your utility functions

// Rules for Pure Functions:
// 1) The same input Always gives the same output
// 2) No side effects

// Let's break this rule 1) down with examples:

// The same input Always gives the same output

const add = (x, y) => x + y;
console.log(add(2, 3));

const fullName = (first, last) => `${first} ${last}`;
console.log(fullName("Dave", "Gray"));


// we can replace the function with the output
// This is called "referential transparency" it is very important for pure functions that's what makes these easy to test and easy to debug. 

// rule 1a) A pure function should have at least one parameter.

// Otherwise, it is the same as a constant because they 
// can only work with their input.

const firstName = () => "Dave";

const firstname = "Dave";

// rule 2) No side effects

// This also means accessing the scope outside the function makes the function Impure.

const z = 5;
const sum = (x, y) => x + y + z;
console.log(sum(2, 2)); // 5

// Pure functions cannot:
// 1) Access a database, API, file system, storage, etc.
// 2) cannot Modify the DOM.
// 3) Or even log to the console

// That said, clearly "Impure" functions are necessary
// but they are harder to test and debug but Access a database, API, file system, storage, Modify the DOM etc.

// Further, no input state can be modified when we are writing a pure function
// That means, no data should be "mutated".
// Consider all input data to be immutable

// you can see after we call increment we are logging 2 and then we check the value of x on the next line and the value is 2. 
// so we mutated the state of the x variable it's now equal to 2 and our increment function also reached outside of the function to reference the value of x or to reference the variable itself actually and that is what increased the value of x to 2.

// Impure Example 1:
let x = 1;
const increment = () => x += 1;
console.log(increment()); // 2
console.log(x); // 2

// Impure Example 2:
const myArray = [1, 2, 3];
const addToArray = (array, data) => {
    array.push(data);
    return array;
}
console.log(addToArray(myArray, 4)); // [1, 2, 3, 4]
console.log(myArray); // [1, 2, 3, 4]

// now what we would want is a function that would return a value without incrementing the actual variable x we don't want to mutate x but we do want do return new value, so this is impure function it breaks both rules there we we don't pass in x and then we also mutate the value of x  

// refactored Example 1:
let y = 1; 
const pureIncrement = (num) => num += 1;
console.log(pureIncrement(y));
console.log(y);

// refactored Example 2:
const pureAddToArray = (array, data) => [...array, data];
console.log(pureAddToArray(myArray, 5)); // [1, 2, 3, 4, 5]
console.log(myArray); // [1, 2, 3, 4]

// Note: If you have a nested data structure, watch my turorial 
// on shallow copy vs deep copy!

// refactored example 2 above will not work if it is a nested data structure, If the original array we are passing in has nested data you need to make a deep copy and i show you how to do that in that tutorial, that i will show up above right now and of course.

// Also notice how Pure Functions always return something.
// No return means you definitely do not have a pure function.

// You may have already been working with some great examples of 
// Pure Functions and not realized it.

// These common Higher Order Functions are Pure Functions:

const oneToFive = [1, 2, 3, 4, 5];
const oddToFive = oneToFive.filter(elem => elem % 2 !== 0);
console.log(oddToFive); // [1, 3, 5]

const doubled = oneToFive.map(elem => elem * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const summed = oneToFive.reduce((acc, elem) => acc + elem);
console.log(summed); // 15

console.log(oneToFive);

// Review the Rules for Pure Functions:
// 1) The same input Always gives the same output. 
// 2) No side effects (no mutations!)

// The goal: Write small, pure functions when you can for code
// that is clean, easy to test, and easy to debug








