console.log("Start");

function loginUser(email, password){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            userData = {userId: 592, status: "success"};
            console.log("Inside loginUser");
            resolve(userData);
        }, 1000);
    });
}

function getUserTweets(userID){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            tweetData = [{tweetId: 1, content: "ABC"}, {tweetID: 2, content: "XYZ"}];
            console.log("Inside getUserTweets");
            resolve(tweetData);
            // reject(tweetData);
        }, 1000);
    });
}

function getTweetComments(tweetID){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            commentData = [{commentId: 1, content: "Awesome!"}];
            console.log("Inside getTweetComments");
            resolve(commentData);
        }, 1000);
    });
}

async function displayData(){
    try {
        const userData = await loginUser("shubham@gmail.com","random");
        const tweetData = await getUserTweets(userData.userId);
        const commentData = await getTweetComments(tweetData[0].tweetId);
        console.log(commentData);
    } catch(error) {
        console.log(error);
    }
    
}

displayData();

console.log("Finish");