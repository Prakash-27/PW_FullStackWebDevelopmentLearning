// Currying 

// Named after Haskell B. Curry

// Concept from lambda calculus 

// Currying takes a function that receives more than one parameter
// and breaks it into a series of unary (one parameter) functions

// Therefore, a curried function only takes one parameter at a time

// Currying can look like this:

const buildSandwich = (ingredient1) => {
    return (ingredient2) => {
        return (ingredient3) => {
            return `${ingredient1}, ${ingredient2}, ${ingredient3}`;
        }
    }
}

const mySandwich = buildSandwich("Bacon")("Lettuce")("Tomato");
console.log(mySandwich);

// It works but thats getting ugly and nested the further we go 

// Let's refactor:

const buildSammy = ingred1 => ingred2 => ingred3 => `${ingred1}, ${ingred2}, ${ingred3}`;

const mySammy =  buildSammy("Turkey")("Cheese")("Bread");
console.log(mySammy);

// Another Example of a curried function

const multiply = (x, y) => x * y;

const curriedMultiply = x => y => x * y;

console.log(multiply(2, 3));
console.log(curriedMultiply(2)(3));

// Partially applied  functions are a common use of currying 
const timesTen = curriedMultiply(10);
console.log(timesTen);
console.log(timesTen(8));

// Another Example Partially applied  functions
const updateElemText = id => content => document.querySelector(`#${id}`).textContent = content;
const updateHeaderText = updateElemText("header");
updateHeaderText("Hello Dave!");


// Another common use of currying is function composition
// Allows calling small functions in a specific order

const addCustomer = fn => (...args) => {
    console.log("saving customer info...");
    return fn(...args);
}

const processOrder = fn => (...args) => {
    console.log(`processing order #${args[0]}`);
    return fn(...args);
}

let completeOrder = (...args) => {
    console.log(`Order #${[...args].toString()} completed.`);
}

completeOrder = (processOrder(completeOrder));
console.log(completeOrder);
/**
 * (...args) => {
    console.log(`processing order #${args[0]}`);
    return fn(...args);
}
 */
completeOrder = (addCustomer(completeOrder));
completeOrder("1000");
/**
 * saving customer info...  
 * processing order #1000
 * Order #1000 completed.
 */

// function addCustomer(...args) {
//     return function processOrder(...args) {
//         return function completeOrder(...args) {
//             // end
//         }
//     }
// }

// Requires a function with a fixed number of parameters 
const curry = (fn) => {
    return curried = (...args) => {
        if (fn.length !== args.length) {
            return curried.bind(null, ...args); //bind creates new function
        }
        return fn(...args);
    };
} 

const total = (x, y, z) => x + y + z;

const curriedTotal = curry(total);
console.log(curriedTotal(10)(20)(30));