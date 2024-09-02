// Ques 2 - Fibonacci Number
// Fibonacci Series -> 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1

// Input : n = 3 ----->>>>> Output: 2

let fib = function(n) {
    const arr = [0, 1];

    for(let i = 2; i <= n; i++){
        arr.push(arr[i - 1] + arr[i - 2]);
    }

    return arr[n];
};

console.log(fib(5));

//-----------------------------------------Alternate Method to Solution------------------------------------------------------------- 

function Solution(n){
    if(n === 0) return 0;

    let prev1 = 0;
    let prev2 = 1;
    let curr;

    for(let i = 2; i <= n; i++){
        curr = prev1 + prev2;
        prev1 = prev2;
        prev2 = curr;
    }

    return prev2;
}

console.log(Solution(6));

//-----------------------------------------Alternate Method to Solution------------------------------------------------------------- 

const fibRecursive = function(n) {
    if(n <= 1) return n;

    return fib(n - 1) + fib(n - 2);
};

console.log(fibRecursive(7));

// One Liner 
const fibOneLiner = (n) => (n <= 1 ? n : fib(n - 1) + fib(n - 2));

console.log(fibOneLiner(8));

// DataStructuresAndAlgorithms/RoadSideCoderDSA/TopFiveDSAInterviewQuestionAndAnswer/fibonacci.js