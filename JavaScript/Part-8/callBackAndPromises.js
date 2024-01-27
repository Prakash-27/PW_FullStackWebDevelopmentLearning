// Runtime Environment
function timeConsumingTask() {
    for(let i=0; i<10000000000; i++) {
        // some task
    }
}

console.log("start");
timeConsumingTask();
console.log("starting the timer");
setTimeout(function exec() {
    console.log("timer completed");
}, 0);
setTimeout(function exec() {
    console.log("timer completed 2");
}, 10);
console.log("exitting the timer");
timeConsumingTask();
console.log("end");
