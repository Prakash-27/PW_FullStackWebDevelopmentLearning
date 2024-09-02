// Ques 4 - Fibonacci Number
// Fibonacci Series -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1

// Input: n = 3  ----->>>>>  Output: 2

function fib(n){
    let arr = [0, 1];
    for(let i = 2; i <= n; i++){
        arr.push(arr[i - 1] + arr[i - 2]);
    }
    return {
        arr: arr[n],
        fibArray: arr,
    };
}

console.log(fib(3)); // { arr: 2, array: [ 0, 1, 1, 2 ] }
console.log(fib(5)); // { arr: 5, fibArray: [ 0, 1, 1, 2, 3, 5 ] }

//----------------------------------------------------------------------------------------------------------------

function fibRecursion(n){
    if(n <= 1){
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}





// DataStructuresAndAlgorithms/RoadSideCoderDSA/Recursion/fibonacci.js