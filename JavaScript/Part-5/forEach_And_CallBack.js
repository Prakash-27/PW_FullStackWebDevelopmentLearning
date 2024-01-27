// CallBack Function:
// ------------------

let addition = function(a, b){
    return a + b;
}
let multiplication = function(a, b){
    return a * b;
}
let subtraction = function(a, b){
    return a - b;
}
let division = function(a, b){
    return a / b;
}

function calculator(numOne, numTwo, add, mul, sub, div){
    let addResult = add(numOne, numTwo);
    let mulResult = mul(numOne, numTwo);
    let subResult = sub(numOne, numTwo);
    let divResult = div(numOne, numTwo);
    return `Add: ${addResult}, Mul: ${mulResult}, Sub: ${subResult}, div: ${divResult}`;
}

console.log(calculator(10, 5, addition, multiplication, subtraction, division)); // this addition and multiplication are called CallBack Function
//Add: 15, Mul: 50, Sub: 5, div: 2

console.log(calculator(10, 5, function(a, b){
    return a + b;
}, function(a, b){
    return a * b;
}, function(a, b){
    return a - b;
}, function(a, b){
    return a / b;
})); //Add: 15, Mul: 50, Sub: 5, div: 2

// ------------------------------------------------------------------------------------------------

// forEach Method:
// ---------------

let products = ["bread", "butter", "jam", "bottle"];

// let callback = (product) => console.log(`My product name is ${product}`);
// products.forEach(callback); // both are same

// products.forEach((product) => {
//     console.log(`My product name is ${product}`);
// }); // both are same

// products.forEach((product) => console.log(product.length));

let students = ["shubham", "alex", "deepak", "john"];

students.forEach((student, index) => {
    console.log(student, index);
}); // both are same

const printStudent = (student, index) => {
    console.log(student, index);
}
students.forEach(printStudent); // both are same





