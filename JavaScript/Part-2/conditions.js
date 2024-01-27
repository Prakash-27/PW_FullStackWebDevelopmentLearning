// Syntax:

// if (condition) {

// } else {

// }

// Eg1:

// let dividend = 10
// let divisior = 5
// // let divisior = 0 (Infinity)

// if (divisior != 0) {
//     let result = dividend/divisior
//     console.log(result);
// }

// let result = dividend/divisior
//     console.log(result);

// Eg2:

// // let age = 15
// let age = 21

// if (age < 18) {
//     console.log("Sorry you are not eligible");
// } else {
//     console.log("You are eligible");
// }
// console.log("This will always run");

// Eg3:

// // let isAdmin = false
// let isAdmin = true

// if (isAdmin) {
//     console.log("Fetch the adimin details");
// } else {
//     console.log("Fetch the user details");
// }

// Out of the Three value which one is Bigger

let a = 10
let b = 64
let c = 54

if (a > b) {
    if (a > c) {
        console.log("a is Greatest");
    } else {
        console.log("c is Greatest");
    }
} else {
    if (b > c) {
        console.log("b is Greatest");
    } else {
        console.log("c is Greatest");
    }
}

