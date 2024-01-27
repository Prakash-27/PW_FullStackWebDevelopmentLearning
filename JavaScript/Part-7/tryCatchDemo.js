function isEvenOrOdd(x) {
    try {
        if (x % 2 == 0) {
            console.log("Even");
        } else {
            console.lo("Odd");
        }
        console.log("ending");
    } catch {
        console.log("handled");
    } finally {
        console.log("finally");
    }
}

isEvenOrOdd(10);
isEvenOrOdd(11);
