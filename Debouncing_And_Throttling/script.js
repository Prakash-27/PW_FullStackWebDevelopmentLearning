// Debouncing And Throttling in Javascript
// Ques 1 - Create a button UI and add debounce as follows =>
//          --> Show "Button Pressed <X> Times" every time button is pressed
//          --> Increase "Triggered" <Y> Times" count after 800ms of debounce

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggerCount = 0;

const start = new Date().getTime();

//_.debounce is using Lodash implemented function.

// const debouncedCount = _.debounce(() => {
//     count.innerHTML = ++triggerCount;
// }, 800);

// btn.addEventListener("click", () => {
//     btnPress.innerHTML = ++pressedCount;
//     const now = new Date().getTime();
//     const seconds = (now - start) / 1000;
//     console.log(seconds.toFixed);
//     debouncedCount();
// });

//---------------------------------------------------------------------------------- 

// Ques 2 - Create a button UI and add throttle as follows =>
//          --> Show "Button Pressed <X> Times" every time button is pressed
//          --> Increase "Triggered" <Y> Times" every time 800ms of throttle

//_.throttle() is using Lodash implemented function.

// const throttledCount = _.throttle(() => {
//     count.innerHTML = ++triggerCount;
// }, 800);

// btn.addEventListener("click", () => {
//     btnPress.innerHTML = ++pressedCount;
//     throttledCount();
// });

//---------------------------------------------------------------------------------- 

// Ques 3 - Create Debounce() Polyfill Implementation

// const myDebounce = (callBack, delayTime) => {
//     let timer;
//     return function(...args){
//         if(timer){
//             clearTimeout(timer);
//         }
//         timer = setTimeout(() => {
//             callBack(...args);
//         }, delayTime);
//     };
// };

// const debouncedCount = myDebounce(() => {
//     count.innerHTML = ++triggerCount;
// }, 800);

// btn.addEventListener("click", () => {
//     btnPress.innerHTML = ++pressedCount;
//     const now = new Date().getTime();
//     const seconds = (now - start) / 1000;
//     console.log(seconds.toFixed);
//     debouncedCount();
// });

//---------------------------------------------------------------------------------- 

// Ques 4 - Create Throttle() Polyfill Implementation

// const myThrottle = (callBack, delayTime) => {
//     let lastTime = 0;
//     return function(...args){
//         let currentTime = new Date().getTime();
//         if(currentTime - lastTime < delayTime){
//             return;
//         }else{
//             lastTime = currentTime;
//         }
//         return callBack(...args);
//     }
// }

// const throttledCount = myThrottle(() => {
//     count.innerHTML = ++triggerCount;
// }, 1000);

// btn.addEventListener("click", () => {
//     btnPress.innerHTML = ++pressedCount;
//     const now = new Date().getTime();
//     const seconds = (now - start) / 1000;
//     console.log(seconds.toFixed);
//     throttledCount();
// });