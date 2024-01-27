// findIndex():
// ------------

// The findIndex() method in JavaScript return the index of first 
// element in an array which satisfies a Condition.

let birthYears = [1990, 1989, 2007, 2001, 2006, 1998];
console.log(birthYears);

// findIndex() Method is a Higher Order Function in JavaScript.
let findIndexResult = birthYears.findIndex((element) => {
    return element > 2000;
});
console.log(`findIndex is returning the index no: ${findIndexResult}`);

let findResult = birthYears.find((element) => {
    return element > 2000;
});
console.log(`find Method returning the element value: ${findResult}`);
