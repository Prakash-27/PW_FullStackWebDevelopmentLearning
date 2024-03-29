const powerTwo = (n) => {
    return n ** 2
}

function powerCube(powerTwo, n) {
    return powerTwo(n) * n
}
console.log(powerCube(powerTwo, 3));

//--------------------------------------------------------

function sayHello() {
    return () => {
        console.log("Hello Prakash");
    }
}

let guessValue = sayHello();
console.log(guessValue);

//--------------------------------------------------------

const higherOrder = n => {
    const oneFun = m => {
        const twoFun = p => {
            return m + n + p
        }
        return twoFun
    }
    return oneFun
}

console.log(higherOrder(2)(3)(4));

//--------------------------------------------------------

const myNums = [2, 3, 4, 5]

// Normal function
let sum = 0
function sumOfArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum
}
console.log(sumOfArray(myNums));

// HOF function
const sumArray = arr => {
    let total = 0
    arr.forEach(function(element){
        total += element
    });
    return total
}
console.log(sumArray(myNums));

//--------------------------------------------------------

function oneMoreHello(){
    console.log("Hello Hitesh !", Math.random());
}

// setInterval(oneMoreHello, 1000);

setTimeout(oneMoreHello, 2000);