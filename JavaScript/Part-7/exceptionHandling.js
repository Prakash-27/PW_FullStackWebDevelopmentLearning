// Lecture CheckList
/**
 * 1. Uses of exception handling.
 * 2. Implementation of try-catch.
 * 3. Implementation of try-catch-finally.
 * 4. Error Object.
 * 5. User-defined errors.
 */

function isPrime(x) {
    try {
        // console.lo("starting");
        for(let i=2; i<=x-1; i++) {
            if (x % i == 0) {
                // return "Not Prime";
                // throw new Error("not a Prime");
                throw "not Prime";
            }
        }
        return "prime";
    } catch (err) {
        console.log("handled", err);
    } finally {
        console.log("end");
    }
}

console.log(isPrime(10));