// function syntax:
// ----------------
// function greetme() {
//     console.log("Hello 1");
//     console.log("Hello 2");
//     console.log("Hello 3");
//     console.log("Hello 4");
// }
// greetme()

// parameterized function:
// -----------------------
// function greetme(username, score) {
//     console.log(`Hello ${username} and your score is ${score}`);
    
// }

// greetme("pw", 12)
// greetme("pwskills", 19)
// greetme("tech", 20)

//-----------------------------------------------------------------------

// function addTwoNum(num1, num2) {
//     return num1 + num2
// }

// const result1 = addTwoNum(2, 12)
// const result2 = addTwoNum(2, 2)

// console.log(result2);

//------------------------------------------------------------------------

function addArray(arr) {
    let result = 0;

    for (let index = 0; index < arr.length; index++) {
        result = result + arr[index] /*result += arr[index]*/
    }
    return result
}

const result3 = addArray([2, 2, 4])
const result4 = addArray([2, 2, 4, 4, 8, 1, 3])

console.log(result3);
console.log(result4);


