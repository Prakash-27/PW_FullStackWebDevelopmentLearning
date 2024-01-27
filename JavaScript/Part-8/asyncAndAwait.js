function returnDummyPromise() {
    return new Promise(function exec(resolve, reject) {
        // write your code here
        setTimeout(function f() {
            console.log("timer completed");
            resolve("done");
        }, 10000); 
    });
}

async function consume() {
    try {
        console.log("start");
        const response = await returnDummyPromise();
        const response1 = await returnDummyPromise();
        const response2 = await returnDummyPromise();
        console.log("response is", response);
        console.log("response1 is", response1);
        console.log("response2 is", response2);
    } catch (err) {
        console.log(err);
    }
}

consume();
console.log("ending");

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