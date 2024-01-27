// 1st type of declaring callback function
function hof(fn) {
    fn();
}

hof(function fn() {
    console.log("executing....");
});

//----------------------------------------------------------
// 2nd type of declaring callback function
// function hof(fn) {

// }

// const f = function fn() {
//     console.log("executing....");
// }

// hof(f());
// ----------------------------------------------------------

setTimeout(function f() {
    console.log("done");
}, 2000);
