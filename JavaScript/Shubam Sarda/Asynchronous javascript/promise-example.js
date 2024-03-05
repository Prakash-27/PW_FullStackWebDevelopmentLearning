console.log("Start");

function loginUser(email, password){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            userData = {userId: 592, status: "success"};
            console.log("Inside loginUser");
            resolve(userData);
        }, 200);
    });
}

function getUserTweets(userID){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            tweetData = [{tweetId: 1, content: "ABC"}, {tweetID: 2, content: "XYZ"}];
            console.log("Inside getUserTweets");
            resolve(tweetData);
            // reject("Error Inside getUserTweets");
        }, 200);
    });
}

function getTweetComments(tweetID){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            commentData = [{commentId: 1, content: "Awesome!"}];
            console.log("Inside getTweetComments");
            resolve(commentData);
        }, 200);
    });
}

// loginUser("shubham@gmail.com","random", (userData) => {
//     getUserTweets(userData.userId, () => {
//         getTweetComments(tweetData[0].tweetId, (commentData) => {
//             console.log(commentData);
//         });
//     });
// }, () => {
//     console.log("Error!");
// });

loginUser("shubham@gmail.com","random")
    .then(userData => getUserTweets(userData.userId))
    .then(tweetData => getTweetComments(tweetData[0].tweetId))
    .then(commentData => console.log(commentData))
    .catch(error => console.log(error));

console.log("Finish");

// The first thing is Promise usually work in three stages as soon as we get into the Promise it is in Pending stage, Once the Promise calls resolve it is fulfill stage, and then are chances we are going to get an error which is reject then it is rejected stage
// Now at this point of time .then() is called when we have success, after this we can add .catch() do it is going to have access to error, maybe we have some error I can access it I can do console.log(error)  
// Now what if I got a error at the time of loginUser() so instead of resolve(userData) I will call reject(userData), catch is used when we call reject() function .