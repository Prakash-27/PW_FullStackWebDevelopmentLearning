// function returnDummyPromise() {
//     return new Promise(function exec(resolve, reject) {
//         // write your code here
//         setTimeout(function f() {
//             console.log("timer completed");
//             resolve("done");
//         }, 10000); 
//     });
// }

// let p = returnDummyPromise();

// p.then(function exec(val) {
//     console.log("promise resolved with a value", val);
// })


// console.log("end");

// -----------------------------------------------------------------

// function returnDummyPromise() {
//     return new Promise(function exec(resolve, reject) {
//         // write your code here
//         setTimeout(function f() {
//             console.log("timer completed");
//             reject("done");
//         }, 10000); 
//     });
// }

// let p = returnDummyPromise();

// p.then(function exec(val) {
//     console.log("promise resolved with a value", val);
// })
// .catch(function exec(err) {
//     console.log("error in catch of promise", err);
// })

// for (let i=0; i<10000000000; i++) {
    
// }
// console.log("end");

// -----------------------------------------------------------------

// function returnDummyPromise() {
//     return new Promise(function exec(resolve, reject) {
//         // write your code here
//         setTimeout(function f() {
//             console.log("timer completed");
//             resolve("done");
//             // reject("done"); //resolve or reject both are in case to have finally to execute.
//         }, 10000); 
//     });
// }

// let p = returnDummyPromise();

// p.then(function exec(val) {
//     console.log("promise resolved with a value", val);
// })
// .then(function f() {

// })
// .catch(function exec(err) {
//     console.log("error in catch of promise", err);
// })
// .finally(function fin() {
//     console.log("finally promise consumed");
// })

// console.log("end");

// ------------------------------------------------------------------

function returnDummyPromise() {
    return new Promise(function exec(resolve, reject) {
        // write your code here
        setTimeout(function f() {
            console.log("timer completed");
            let randomNumber = Math.random();
            if (randomNumber > 0.5) {
                resolve("done");
                resolve("done1");
            } else {
                reject("error");
            }
        }, 10000); 
    });
}

let p = returnDummyPromise();

p.then(function exec(val) {
    console.log("promise resolved with a value", val);
})
.then(function f() {
    
})
.catch(function exec(err) {
    console.log("error in catch of promise", err);
})
.finally(function fin() {
    console.log("finally promise consumed");
})

console.log("end");