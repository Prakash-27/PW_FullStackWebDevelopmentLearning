function square(n) {
    let result = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            result += 1;
        }
    }
    return result;
}

console.log(square(5)); // 25 which is printed very quickly in the console.
console.log(square(30000)); // 900000000 If we give large value in square(parameter) which will give a large value and take quit a while to run, it take a half a second to run which is not ideal 

// especially if you want to call this bunch of times in a row.  
console.log(square(30000));
console.log(square(30000));
console.log(square(30000));
console.log(square(30000));
// as you see it very slowly executing each one and this is not definitely you want, and this is were memoization comes in.

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Memoization: The idea of memoization is that you store the previous results, so in that way if we call square() function bunch of time in the row with the same value it going to return the other one instantanously, so essentially we are caching the value based on the input.

const prevValues = [];

function memoizedSquare(n) {
    if (prevValues[n] != null) {
        return prevValues[n]; // If we already call this variable n and return the result, because we save it down below, now if you console the square(30000) the first one execute slowly, but every single other one finishes instantanously because all of does is LookUp the value already Exicest. 
    }

    let result = 0;
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            result += 1; // after we calculated our result 
        }
    }

    prevValues[n] = result; // we just store that value inside of our prevValues, essentially every single time we call this function we gonna store the result in the n position of prevValues[n] Array.
    return result;
}

console.log(memoizedSquare(30000));
console.log(memoizedSquare(30000));
console.log(memoizedSquare(30000));
console.log(memoizedSquare(30000));

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Memoization is used every where in the programming and some really popular usecases are this really a slow function that takes a long time to execute and you want to get a same value over and over again.
// Another really popular usecase is when you are fetching Extenal resourses, when using the fetch Api using memoization will save you having to make a bunch of call to the server because you already know If you made that call, you already know what the results are you have essentially cache them.
// The last usecase in Memoization is Dynamic Programming and Dynamic Programming when you take a recursive function that hold itself multiple times with the same inputs, so you actually memoize that input.

// Normal fib:

function fib(n) {
    if (n <= 2) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

console.log(fib(4)); // 3
console.log(fib(6)); // 8
console.log(fib(40)); // 102334155
console.log(fib(41)); // 165580141

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Memoization fibonnaci:

function fibonnaci(n, prevValues = []) {
    if (prevValues[n] != null) {
        return prevValues[n];
    }

    let result;
    if (n <= 2) {
        result = 1;
    } else {
        result = fibonnaci(n - 1, prevValues) + fibonnaci(n - 2, prevValues);
    }

    prevValues[n] = result;
    return result;
}

// console.log(fibonnaci(4)); // 3
// console.log(fibonnaci(6)); // 8
// console.log(fibonnaci(40)); // 102334155
// console.log(fibonnaci(41)); // 165580141

console.log(fibonnaci(100));
