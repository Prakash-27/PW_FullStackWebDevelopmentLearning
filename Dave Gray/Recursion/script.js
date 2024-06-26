// Official Definition of Recursion:
// In computer science, recursion is a method of solving a problem 
// where the solution depends on solution to smaller instances 
// of the same problem.

// Unofficial Definition of Recursion:
// "Any situation where you do something, and depending on the 
// results, you might do it again."

// In programming, recursion occurs when a function calls itself.

// Any iterator function (aka function with a loop) can be recursive instead of being iterator functions

// iterator function
const countToTen = (num = 1) => {
    while (num <= 10) {
        console.log(num);
        num++;
    }
}

// countToTen(); // 1 2 3 4 5 6 7 8 9 10

// recursive functions have 2 parts:
// 1) the recursive call to the function 
// 2) at least one condition to exit

const recurToTen = (num = 1) => {
    if (num > 10) return;
    console.log(num);
    num++;
    recurToTen(num);
}

// recurToTen(); // 1 2 3 4 5 6 7 8 9 10

// "With Great Power Comes Great Responsibility"
// Reasons to use (not abuse) Recursion
// 1) Less Code
// 2) Elegant Code (aka Pleasing to Look at)
// 3) Increased Readability

// Reasons to NOT use Recursion
// 1) Performance (loop in javscript and in other languages is usually more performant than calling another function, so you use more memory when you call functions and calling a loop is just more optimized for performance possibly more difficult to debug so recursion or recursive functions follow logic that could be a little hard to follow or wrap your head around if you're not used to them)
// 2) Possibly more difficult to debug (aka follow the logic)
// 3) Is the Readability Improved?


// The Standard Example: The Fibonacci Sequence
// 0, 1, 1, 2, 3, 5, 8, 13, 21, etc.

// Without Recursion:
const fibonacci = (num, array = [0, 1]) => {
    while (num > 2) {
        const [nextToLast, last] = array.slice(-2);
        array.push(nextToLast + last);
        num -= 1;
    }
    return array;
}

console.log(fibonacci(12)); // (12) [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

// With Recursion:
const fib = (num, array = [0, 1]) => {
    if (num <= 2) return array;
    const [nextToLast, last] = array.slice(-2);
    return fib(num - 1, [...array, nextToLast + last]);
}

console.log(fib(12)); // (12) [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

// What number is in the nth position of the Fibonacci Sequence?

// Without Recursion:
const fibonacciPos = (pos) => {
    if (pos <= 1) return pos;
    const seq = [0, 1];
    for (let i = 2; i <= pos; i++) {
        const [nextToLast, last] = seq.slice(-2);
        seq.push(nextToLast + last);
    }
    return seq[pos];
}

console.log(fibonacciPos(8)); // 21

// With Recursion:
const fibPos = (pos) => {
    if (pos < 2) return pos;
    return fibPos(pos - 1) + fibPos(pos - 2);
}

// Same function in one line
//const fibPos = pos => pos < 2 ? pos : fibPos(pos - 1) + fibPos(pos - 2);

console.log(fibPos(8)); // 21


// Real-Life Examples: 

// 1) Continuation Token from an API

const getAWSProductIdImages = async () => {

    // get the data with await fetch request

    if (data.IsTruncated) {
        //recursive
        return await getAWSProductIdImages(
            productId,
            s3, // connection to s3
            resultArray, // accumulator
            data.NextContinuationToken
        );
    }

    return resultArray;
}

// 2) A Parser:
// a company email directory
// a file directory 
// the DOM - a web crawler
// An XML or JSON data export


// Export from your streaming service like Spotify, YT Music, etc.

const artistsByGenre = {
    jazz: ["Miles Davis", "John Coltrane"],
    rock: {
        classic: ["Bob Seger", "The Eagles"],
        hair: ["Def Leppard", "Whitesnake", "Poison"],
        alt: {
            classic: ["Pearl Jam", "The Killers"],
            current: ["Joywave", "Sir Sly"]
        }
    },
    unclassified: {
        new: ["Caamp", "Neil Young"],
        classic: ["Seal", "Morcheeba", "Chris Stapleton"]
    }
}

console.log(Object.keys(artistsByGenre).forEach(key => {
    console.log(key, artistsByGenre[key]);
}));

const getArtistNames = (dataObj, arr = []) => {
    Object.keys(dataObj).forEach(key => {
        if (Array.isArray(dataObj[key])) {
            return dataObj[key].forEach(artist => {
                arr.push(artist);
            });
        }
        getArtistNames(dataObj[key], arr);
    });
    return arr;
}

console.log(getArtistNames(artistsByGenre));

