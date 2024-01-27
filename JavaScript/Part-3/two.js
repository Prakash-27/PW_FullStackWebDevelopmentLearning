// arrow function:
// ---------------

const functionName = () => {
    // body
}

// --------------------------------------------------------

// oneline function:
// -----------------
// function myName() console.log("hi")

// --------------------------------------------------------

// oneline arrow function:
// -----------------------

// const addTwo = (num1, num2) => { 
//     return num1 + num2  /*here return is implicit not want to write it as explicitly */
// }

// const addTwo = (num1, num2) => num1 + num2

// const result1 = addTwo(3, 2)
// console.log(result1);

// --------------------------------------------------------

// function in object:
// -------------------
// const User = {
//     username: "John",
//     greet: function() {
//         console.log(`Hello ${this.username}`);
//     },
//     greetTwo: () => {
//         console.log(`Hello ${this.username}`);
//     }
// }

// User.greet()
// User.greetTwo()

// --------------------------------------------------------

// regualarFunction:
// -----------------

// function regularFunction(name) {
//     this.name = name
// }

// const regularObj = new regularFunction("john")
// console.log(regularObj.name);

// --------------------------------------------------------

// arrowFunction Using new key:
// ----------------------------

// const arrowFunction = (name) => {
//     this.name = name
// }

// const arrowObj = new arrowFunction("Jane")
// console.log(arrowObj.name);

//---------------------------------------------------------

// There is a couple of key words you here in JavaScript

// 1.bind, 2.call, 3.apply : this aware context

function test(args1, args2) {
    console.log(this.num, args1, args2);
}

// test(3, 4, 9)
// test.call(9, 3, 4)
test.call({num:9}, 3, 4)

//---------------------------------------------------------

// spread argument:
// ----------------

function testTwo(...arguments){
    console.log(this.num, arguments);
}

// testTwo(1, 2, 3, 4)
// testTwo([1, 2, 3, 4])
// testTwo({num: 9}, 1, 2, 3, 4)
// testTwo.call({num: 9}, 1, 2, 3, 4)
testTwo.apply({num: 9},[1, 2, 3, 4])