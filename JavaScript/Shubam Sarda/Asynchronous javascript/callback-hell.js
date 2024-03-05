// console.log("Start");

// function loginUser(email, password){
//     setTimeout(() => {
//         userData = {userID: 592, status: "success"};
//         return userData;
//     }, 2000);
// }

// const data = loginUser("shubham@gmail.com","random");
// console.log(data);

// console.log("Finish");

// Start callback-hell.js:1 
// undefined callback-hell.js:11 
// Finish callback-hell.js:13 

// ---------------------------------------------------------------------------------------------------------
// console.log("Start");

// function loginUser(email, password, callback){
//     setTimeout(() => {
//         userData = {userID: 592, status: "success"};
//         callback(userData);
//     }, 2000);
// }

// const data = loginUser("shubham@gmail.com","random", (userData) => console.log(userData));

// console.log("Finish");

// Start callback-hell.js:20 
// Finish callback-hell.js:31 
// {userID: 592, status: 'success'} callback-hell.js:29

// ---------------------------------------------------------------------------------------------------------
// console.log("Start");

// function loginUser(email, password, callback){
//     setTimeout(() => {
//         userData = {userId: 592, status: "success"};
//         console.log("Inside loginUser");
//         callback(userData);
//     }, 2000);
// }

// function getUserTweets(userID, callback){
//     setTimeout(() => {
//         tweetData = [{tweetId: 1, content: "ABC"}, {tweetID: 2, content: "XYZ"}];
//         console.log("Inside getUserTweets");
//         callback(tweetData);
//     }, 1000);
// }

// function getTweetComments(tweetID, callback){
//     setTimeout(() => {
//         commentData = [{commentId: 1, content: "Awesome!"}];
//         console.log("Inside getTweetComments");
//         callback(commentData);
//     }, 1000);
// }

// const data = loginUser("shubham@gmail.com","random", (userData) => {
//     getUserTweets(userData.userId, () => {
//         getTweetComments(tweetData[0].tweetId, (commentData) => {
//             console.log(commentData);
//         });
//     });
// });

// console.log("Finish");

// ---------------------------------------------------------------------------------------------------------

// console.log("Start");

// function loginUser(email, password, resolve, reject){
//     setTimeout(() => {
//         userData = {userId: 592, status: "success"};
//         console.log("Inside loginUser");
//         resolve(userData);
//     }, 2000);
// }

// function getUserTweets(userID, callback){
//     setTimeout(() => {
//         tweetData = [{tweetId: 1, content: "ABC"}, {tweetID: 2, content: "XYZ"}];
//         console.log("Inside getUserTweets");
//         callback(tweetData);
//     }, 1000);
// }

// function getTweetComments(tweetID, callback){
//     setTimeout(() => {
//         commentData = [{commentId: 1, content: "Awesome!"}];
//         console.log("Inside getTweetComments");
//         callback(commentData);
//     }, 1000);
// }

// const data = loginUser("shubham@gmail.com","random", (userData) => {
//     getUserTweets(userData.userId, () => {
//         getTweetComments(tweetData[0].tweetId, (commentData) => {
//             console.log(commentData);
//         });
//     });
// }, () => {
//     console.log("Error!");
// });

// console.log("Finish");

// ---------------------------------------------------------------------------------------------------------
console.log("Start");

function loginUser(email, password, resolve, reject){
    setTimeout(() => {
        userData = {userId: 592, status: "success"};
        console.log("Inside loginUser");
        reject(userData);
    }, 2000);
}

function getUserTweets(userID, callback){
    setTimeout(() => {
        tweetData = [{tweetId: 1, content: "ABC"}, {tweetID: 2, content: "XYZ"}];
        console.log("Inside getUserTweets");
        callback(tweetData);
    }, 1000);
}

function getTweetComments(tweetID, callback){
    setTimeout(() => {
        commentData = [{commentId: 1, content: "Awesome!"}];
        console.log("Inside getTweetComments");
        callback(commentData);
    }, 1000);
}

const data = loginUser("shubham@gmail.com","random", (userData) => {
    getUserTweets(userData.userId, () => {
        getTweetComments(tweetData[0].tweetId, (commentData) => {
            console.log(commentData);
        });
    });
}, () => {
    console.log("Error!");
});

console.log("Finish");