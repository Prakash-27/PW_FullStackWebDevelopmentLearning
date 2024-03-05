// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 2000);

// console.log("C");
// output: A
//         C
//         B

// ------------------------------------------------------------------------------------

// console.log("A");

// const welcome = function(){
//     console.log("B");
//     console.log("C");
// }

// setTimeout(welcome, 2000);

// console.log("D");
// output: A
//         D
//         B
//         C

// ------------------------------------------------------------------------------------

// console.log("A");

// const random = function(){
//     const numOne = 5;
//     const numTwo = 15;
//     console.log(numOne + numTwo);
// }

// const welcome = function(){
//     console.log("B");
//     random();
//     console.log("C");
// }

// setTimeout(welcome, 1000);

// console.log("D");
// output: A
//         D
//         B
//         20
//         C

// asynchronous - is basically not interrupting our flow of our code base, and try to wait for our result with the help of web APIs, maybe waiting for API result (Or) maybe we just have setTimeout() (Or) maybe we are trying to have access to our database (Or) Anything else, there can be delay for 1000's of different reason but we are not going to block our code now.
// The other thing I want to explain is we are going to use setTimeout in future also to replicate something like asynchronous example (or) maybe like ok we are waiting for web API, since we don't know web API right now, I don't want to bring that topic before anything else, so Iam going to assume that ok so If Iam including anything like setTimeout() we are basically trying to delay things (Or) maybe trying to replicate something like ok Iam doing something for Web API, Iam going to take time, here just we are going to delay things just one second.
// setTimeout(welcome, 1000) is one second here means minimum Iam going to delay for one second, but not garenty it can be more, it will not be less but it can be more, Why, Suppose after one second of delay I reach callback Queue, I got my welcome inside my callback queue, one second is passed but call stack as other tasks to do and it's not empty, so Iam going to have more delay, maybe Iam going to wait for another few milliseconds or maybe one second more, so this delay's can happen, Why, because maybe my call stack is not empty right know, so Iam going to wait for it in callback queue and then Iam get welcome() into call stack, so that means one second delay is minimum one second it can be more because our call stack is not Empty.  

// ------------------------------------------------------------------------------------

// console.log("A");

// setTimeout(() => {
//     console.log("B");
// }, 0);

// console.log("C");
// output : A
//          C
//          B
// ------------------------------------------------------------------------------------

// console.log("A");

// const logInterval = setInterval(() => {
//     console.log("Interval");
// }, 1000);
// clearInterval(logInterval);

// console.log("C");
// output: A
//         C
//         Interval
//         Interval
//         Interval
//         Interval
//         Interval
//         Interval

// setInterval:
// ------------
// Now what this setInterval do is now keep on calling this function again and again, again and again after every one second, that means I am going to get This "Interval" multiple times.
// I don't recommend to try this also you are not going to use it but it's good to know.
// Now the problem with the setInterval is it keep on running in the back of our browser, we need to clear it, so If you see I randomly got this "Interval" again on my screen, Now it because it's randomly running Iam not getting my console.log("A") or console.log("C"), this setInterval() is struck with in my browser and randomly calling into my console, what I can do is First I store this in variable, now we are executed this function, but also store this into our reference which is logInterval and if we save now, calling the "Interval" again and again, and now I should stop anytime in future I can just use clearInterval() and pass this what ever variable name that I given clearInterval(logInterval), and save and we now don't have this interval now, this log is not there because I have cleared it, But I have cleared it instantly but usually what happen is If we have a big code base means we add this clearInterval(logInterval) at the end, or we add this line after our task is completed that means we are going to execute this after every one second are once our complete task is done or maybe our end of our file I am Going to clear it, so i don't have to mess with this Iteration that's is going to do behind the scence again and again in the browser, ok this set interval is not important but should be aware of this, I hope you got the Idea, even if you pass the 0 milli second it is not the 0 second only it can be some time.                      
