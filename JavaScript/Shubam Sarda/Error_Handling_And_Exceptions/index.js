// console.log("step 1");
// getweatherReport();
// console.log("Step 2");

// Error Handling - which is something when the program go wrong that doesn't work as expected is error
console.log("step 1");

function completed(){
    console.log("Weather Task Completed!");
}

try {
    getweatherReport();
} catch(error) {
    console.log(error);
    console.error(error);
    console.log(error.message);
    // console.log(error.description);
    // console.log(error.stack);
} finally {
    completed();
}

console.log("Step 2");

// Types of Error:
// Reference error
// type error
// syntax error 
// Range error
// URI error
// there are more error like this we can read about this error types.


// ------------------------------------------------------------------------------------------------------------------------------------------------------
// Exception - Error is we are throw by ourselves are exception, we are creating our own Error using throw keyword.

// const username = "string";
const username = 52;


// if (typeof username !== "string") {
//     // console.log("Not an String");
//     throw Error("Not an String"); // we are creating our own Error using throw keyword.
// }

const age = 27;

if(age > 25){
    throw Error("Invalid Age!");
    // throw TypeError("Invalid Age!");
}