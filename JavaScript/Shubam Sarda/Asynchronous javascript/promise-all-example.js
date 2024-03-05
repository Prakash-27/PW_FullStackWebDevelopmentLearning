console.log("Start");

const twitterProfile = new Promise((resolve, reject) => {
    setTimeout(() => {
        userData = {userId: 592, status: "Success"};
        console.log("Inside twitterProfile");
        resolve(userData);
    }, 5000);
});

const instagramProfile = new Promise((resolve, reject) => {
    setTimeout(() => {
        userData = {userId: 782, status: "Success"};
        console.log("Inside instagramProfile");
        resolve(userData);
    }, 1000);
});

Promise.all([twitterProfile, instagramProfile])
    .then(data => console.log(data));

console.log("Finish");