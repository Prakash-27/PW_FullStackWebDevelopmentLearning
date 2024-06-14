// Debouncing And Throttling in Javascript

// Debouncing:
//------------
// In Flipkart when we open search box in, search box we type some thing, when we type some thing and paused for some millseconds only then the search result is updated, When we continuouly typing on the keyboard it doesn't show me any search results but when as soon as I stop for a millseconds in this case 400ms, it then makes a API call and fetch us all of the suggestions, so this is what exactly debouncing is.
// It helps us optimize how we call certain events so over here if we were to let's say make API call on every single keystroke or every single letter that we type in the search box it will make a lot of unnecessary API calls to the back end which will put a lot of pressure on our server, So to avoid all of these issuses we use debouning.
// debouncing is it limits the execution of a function call and waits for a certain amount of time before running it again which in this case is 400ms. 

// Throttling:
//------------
// we opened Twitter.com over here and you can notice as soon as I scroll this scroll bar to a certain limit it's gonna make an API call and fetch more posts, If we scroll this twitter page you gonna notice as soon as it reaches a certain point it makes an API call and fetches more posts, So What's happening over here, so we have added throttling to this scroll action in our web page and when it checks that let's say this is around 500 pixels from reaching the very bottom of the post then it's gonna call next few posts so that user can get an infinite scrolling effect. 
// I know it might be hard to understand in first go but let me show you how it works, let's say we are constantly scrolling our web page and let's say we have this web page over here and now we are scrolling our window and as soon as the event checks that okay now this is around 500 pixels from reaching the very bottom of our screen so then it makes an API call and fetches more number of posts so that the user is constantly being fed with more and more number of posts and he gets the infinite scrolling effect and in throttling as well when we monitor these this event we are not supposed to monitor in every single scroll right because if we are gonna monitoer it in every single scroll then it's going to be literally thousands of API call at once so that's why throttling works like this.
// let's say the events of scrolling, so we are scrolling scrolling our web page so we are not supposed to call API call on every single scroll of our web page and because again as I mentioned there because that is going to be thousands of API call so what we do is we assign it a certain amount of time, let's say in this case we say 500ms, so now what's going to happen is it's gonna only make the API call every 500 millsecond just like that, and even if we let's say make only one API call and let's say don't make an API call for next 1s and then again we make an API call then also this will be triggred because this 500ms threshold has been passed so the only time that this will not invoke that event is when we are under this 500ms Mark over here right so this is exactly how throttling works. 
// throttling is a technique to limit the execution of an event handler function even when this event triggers continously due to user actions so user action, over here is a scrolling so this can be anything scrolling resizing our window or many other things.                            

//-------------------------------------------------------------------------------------------------------------------------

// Ques 1 - Create a button UI and add debounce as follows =>
//          --> Show "Button Pressed <X> Times" every time button is pressed
//          --> Increase "Triggered" <Y> Times" count after 800ms of debounce

const btn = document.querySelector(".increment_btn");
const btnPress = document.querySelector(".increment_pressed");
const count = document.querySelector(".increment_count");

var pressedCount = 0;
var triggerCount = 0;

const start = new Date().getTime();
// console.log(`Starting Time: ${start}`);

//_.debounce is using Lodash implemented function.

// const debouncedCount = _.debounce(() => {
//     count.innerHTML = ++triggerCount;
// }, 800);

// btn.addEventListener("click", () => {
//     btnPress.innerHTML = ++pressedCount;
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
//     const now = new Date().getTime();
//     const seconds = (now - start) / 1000;
//     console.log(seconds.toFixed);
//     throttledCount();
// });

//---------------------------------------------------------------------------------- 

// Ques 3 - Create Debounce() Polyfill Implementation

// const myDebounce = (callBack, delayTime) => {
//    // now since we are supposed to measure the time after every single keystroke or every single button press we are going to need a timer 
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

// so in throttle we have multiple events executing one after the other, we are only supposed to execute the event after a certain delay, When all of the events are executing one by one, so when a particular event is executed we are going to record that particular time. 

// const myThrottle = (callBack, delayTime) => {
//     let startTime = 0;
//     return function(...args){
//         let currentTime = new Date().getTime();
//         if(currentTime - startTime < delayTime){
//             return;
//         }else{
//             startTime = currentTime;
//         }
//         return callBack(...args);
//     }
// }

// // we have a startTime initially as 0, now let's say the first event(currentTime) happens at 200ms, so (currentTime - startTime < delayTime) is (200ms - 0 < 1000ms) is less than 1000ms so it gonna return, it's gonna come back again now next event(currentTime) happens at 700ms (currentTime - startTime < delayTime) is (700ms - 0 < 1000ms) is less than 1000ms so it gonna return, now again a third event(currentTime) happens at 1100ms, so now (currentTime - startTime < delayTime) is (1100ms - 0 < 1000ms) is not less than 1000ms, so this is not going to return and now startTime will 1100ms and we gonna execute callback(...args) function, again now the next event(currentTime) happens at let's say 1500ms, so 1500ms - 1100 is 400ms that is still less than 1000ms, so this is again going to return, now again next event(currentTime) happens at 2500ms and 2500ms - 1100ms is 1400ms which is not less than 1000ms, and it is more than 1000ms, so again we are going to assign startTime value of 2500ms.
// // this is the cycle that will keep on repeating itself as we execute more and more and more events.   

// const throttledCount = myThrottle(() => {
//     count.innerHTML = ++triggerCount;
// }, 1000);

// btn.addEventListener("click", () => {
//     btnPress.innerHTML = ++pressedCount;
//     const now = new Date().getTime();
//     const seconds = (now - start) / 1000;
//     console.log(seconds.toFixed());
//     throttledCount();
// });