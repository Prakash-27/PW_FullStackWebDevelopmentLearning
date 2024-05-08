// Promises in Javascript
// Synchronous vs Asynchronous Code

//Promise combinator:

// console.log("start");

function importantAction(username){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Subscribe to ${username}`);
        }, 1000);
    });
}

function likeTheVideo(video){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Like the ${video} video`);
        }, 1000);
    });
}

function ShareTheVideo(video){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Share the ${video} video`);
        }, 500);
    });
}

//If any one promise is fail all the promise also failed and it throws error.
// console.log(Promise.all([
//     importantAction("Roadside Coder"),
//     likeTheVideo("Javascript Interview Questions"),
//     ShareTheVideo("Javascript Interview Questions"),
// ])).then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.error(`error: Promises failed`, err);
// });

//it will give the resolve (or) reject value based on time we have set in the setTimeout, timer value
// console.log(Promise.race([
//     importantAction("Roadside Coder"),
//     likeTheVideo("Javascript Interview Questions"),
//     ShareTheVideo("Javascript Interview Questions"),
// ])).then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.error(`error: Promises failed`, err);
// });

//it will give all the value in array format whether it is resolve or rejected promise.
// console.log(Promise.allSettled([
//     importantAction("Roadside Coder"),
//     likeTheVideo("Javascript Interview Questions"),
//     ShareTheVideo("Javascript Interview Questions"),
// ])).then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.error(`error: Promises failed`, err);
// });

// This is exactly promise.race but what it does is it only written the first fullfilled promise and ignore all the rejected ones, but what if all the promises have fail so then it will give -> Error: Promises failed AggregateError: All promises were rejected
// console.log(Promise.any([
//     importantAction("Roadside Coder"),
//     likeTheVideo("Javascript Interview Questions"),
//     ShareTheVideo("Javascript Interview Questions"),
// ])
// .then((res) => {
//     console.log(res);
// })
// .catch((err) => {
//     console.error(`error: Promises failed`, err);
// }));


// Async/await
// const result = async () => {
//     try {
//        const message1 = await importantAction("Roadside Coder");
//        console.log(message1);
//        const message2 = await likeTheVideo("Javascript Interview Questions");
//        console.log(message2);
//        const message3 = await ShareTheVideo("Javascript Interview Questions");
//        console.log(message3);
//     } catch (error) {
//         console.error("Promises Failed");
//     }  
// };
// result();

// console.log("stop");

// -------------------------------------------------------------------------------------------
// Ques 1 - What's the output?

// console.log("start");

// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(2);
// });

// promise1.then((res) => {
//     console.log(res);
// });

// console.log("end");

// output: start 1 end 2


// Ques 2 - What's the output?

// console.log("start");

// const promise2 = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(2);
//     console.log(3);
// });

// promise2.then((res) => {
//     console.log(res);
// });

// console.log("end");

// output: start 1 3 end 2


// Ques 3 - What's the output?

// console.log("start");

// const promise3 = new Promise((resolve, reject) => {
//     console.log(1);
//     console.log(3);
// });

// promise3.then((res) => {
//     console.log("Result:" + res);
// });

// console.log("end");

// output: start 1 3 end


// Ques 4 - What's the output?

// console.log("start");

// const fn = () => 
//   new Promise((resolve, reject) => {
//       console.log(1);
//       resolve("success");
//   });

// console.log("middle");  

// fn().then((res) => {
//     console.log(res);
// });

// console.log("end");

// output: start middle 1 end success

// -------------------------------------------------------------------------------------------

//Ques 4 - What's the output?

// function job() {
//     return new Promise(function (resolve, reject) {
//         reject();
//     });
// }

// let promise = job();

// promise
//   .then(function() {
//     console.log("Success 1");
//   })
//   .then(function() {
//     console.log("Success 2");
//   })
//   .then(function() {
//     console.log("Success 3");
//   })
//   .catch(function() {
//     console.log("Error 1");
//   })
//   .then(function() {
//     console.log("Success 4");
//   });

// output: Error 1 Success 4


//Ques 5 - What's the output?

// function job(state) {
//     return new Promise(function (resolve, reject) {
//         if(state){
//             resolve("success");
//         } else{
//             reject("error");
//         }
//     });
// }

// let promise = job(true);

// promise
//   .then(function(data) {
//     console.log(data);

//     return job(false);
//   })
//   .catch(function(error) {
//     console.log(error);

//     return "Error caught";
//   })
//   .then(function(data) {
//     console.log(data);

//     return job(true);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });

// output: Success  error  Errorcaught


//Ques 6 - What's the output?

// function job(state) {
//     return new Promise(function (resolve, reject) {
//         if(state){
//             resolve("success");
//         } else{
//             reject("error");
//         }
//     });
// }

// let promise = job(true); //resolve("success");

// promise
//   .then(function(data) {
//     console.log(data);

//     return job(true);
//   })
//   .then(function(data) {
//     if(data !== "victory"){
//         throw "Defeat";
//     }
//     return job(true);
//   })
//   .then(function(data) {
//     console.log(data);
//   })
//   .catch(function(error) {
//     console.log(error);

//     return job(false);
//   })
//   .then(function(data) {
//     console.log(data);

//     return job(true);
//   })
//   .catch(function(error) {
//     console.log(error);

//     return "Error caught";
//   })
//   .then(function(data) {
//     console.log(data);

//     return new Error("test"); //not Returning a promise
//   })
//   .then(function(data) {
//     console.log("Success:", data.message);
//   })
//   .catch(function(data) {
//     console.log("Error:", data.message);
//   });

// Output: success Defeat error Errorcaught Success: test  


//Ques 7 - What's the output?

// const firstPromise = new Promise((resolve, reject) => {
//     resolve("First");
// });

// const secondPromise = new Promise((resolve, reject) => {
//     resolve(firstPromise);
// });

// secondPromise
//    .then((res) => {
//      return res;
//    })
//    .then((res) => console.log(res));

// Output: First


//Ques 8 - Rewrite this example code using 'async/await'
//         instead of '.then/catch'

// function loadJson(url){
//     return fetch(url).then((response) => {
//         if(response.status == 200){
//             return response.json();
//         } else{
//             throw new Error(response.status);
//         }
//     });
// }

// async function loadJson(url){
//    let response = await fetch(url);

//    if(response.status == 200){
//      let json = await response.json();
//      return json;
//    } else{
//      throw new Error(response.status);
//    }
// }

// loadJson("https://fakeurl.com/no-such-user.json").catch((err) => {
//     console.log(err);
// });


//Ques 9 - Solve Promise Recursively

// function promRecurse(funcPromises){
//     // Write Implementation Here
//     if(funcPromises.length === 0){
//         return;
//     }

//     const currPromise = funcPromises.shift();

//     currPromise
//        .then((res) => console.log(res))
//        .catch((err) => console.log(err));

//     promRecurse(funcPromises);   
// }

// promRecurse([
//     importantAction("Roadside Coder"),
//     likeTheVideo("Javascript Interview Questions"),
//     ShareTheVideo("Javascript Interview Questions"),
// ]);


// Ques 10 - Promise Polyfill Implementation

function PromisePolyFill(executor){
    let onResolve, onReject, isFulfilled = false, isRejected = false, isCalled = false, value;

    function resolve(val){
        isFulfilled = true;
        value = val;

        if(typeof onResolve === "function"){
            onResolve(val);
            isCalled = true;
        }
    }

    function reject(val){
        isRejected = true
        value = val;
        if(typeof onReject === "function"){
            onReject(val);
            called = true;
        }
    }

    this.then = function(callback){
        onResolve = callback;

        if(isFulfilled && !isCalled){
            called = true;
            onResolve(value);
        }
        return this;
    };

    this.catch = function(callback){
        onReject = callback;

        if(isRejected && !isCalled){
            isCalled = true;
            onReject(value);
        }
        return this;
    };

    try{
      executor(resolve, reject);
    }catch(error) {
        reject(error);
    }
    
}

const examplePromise = new PromisePolyFill((resolve, reject) => {
    setTimeout(() => {
        resolve(2);
    }, 1000);

    // resolve(2);

    // setTimeout(() => {
    //     reject(2);
    // }, 1000);

    // reject(2);

});

examplePromise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.error(err));

PromisePolyFill.resolve = (val) => {
  return new PromisePolyFill(function executor(resolve, reject){
      resolve(val);
  });
};

PromisePolyFill.reject = (val) => {
    return new PromisePolyFill(function executor(resolve, reject){
        reject(val);
    });
};


// Ques 11 - Promise.all() Polyfill Implementation

Promise.allPolyfill = (promises) => {
    return new Promise((resolve, reject) => {
        const results = [];

        if(!promises.length){
            resolve(results);
            return;
        }

        let pending = promises.length;

        promises.forEach((promise, index) => {
            Promise.resolve(promise).then((res) => {
                results[index] = res;
                pending--;

                if(pending === 0){
                    resolve(results);
                }
            }, reject)
        });
    });
};

Promise.allPolyfill([
    importantAction("Roadside Coder"),
    likeTheVideo("Javascript Interview Questions"),
    ShareTheVideo("Javascript Interview Questions"),
])
  .then((res) => console.log(res)) 
  .catch((err) => console.error("Failed: ", err));
