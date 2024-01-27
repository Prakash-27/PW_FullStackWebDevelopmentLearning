// while loop Syntax:

// while (condition) {
    
// }

let index = 0

while (index <= 10) {
    if (index == 2) {
        // break
        index++
        continue
    }
    console.log(index);
    index++
}

// do while syntax:

// do {
    
// } while (condition);

do {
    console.log("One");
} while (index <= 10);