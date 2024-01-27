const form = document.querySelector(".feedback-form");
const paragraph = document.querySelector("p");

const usernamePattern = /^[a-zA-Z0-9]{6,10}$/;
const feedbackPattern = /^.{20,50}$/;

form.addEventListener("submit", (event) => {
    console.log(event);
    event.preventDefault();
    // console.log(form.username.value);
    // console.log(form.feedback.value);
    const usernameResult = usernamePattern.test(form.username.value);
    const feedbackResult = feedbackPattern.test(form.feedback.value);
    console.log(usernameResult, feedbackResult);

    // if (usernameResult && feedbackResult) {
    //     // console.log("Worked !");
    //     paragraph.setAttribute("class", "success");
    //     paragraph.textContent = "Feedback submitted, Thank You!";
    // } else {
    //     // console.log("Not Worked !");
    //     paragraph.setAttribute("class", "error");
    //     paragraph.textContent = "Please check username and feedback again!";
    // }

//-------------------------------------------------------------------------------------------- 

    // const userResultPara = document.querySelector(".userResultpara");
    // const feedbackResultPara = document.querySelector(".feedbackResultpara");

    // if (usernameResult == true) {
    //     userResultPara.className = "success";
    //     userResultPara.textContent = "Username is Success";
    // } else if (usernameResult == false) {
    //     userResultPara.className = "error";
    //     userResultPara.textContent = "The Username is Error";
    // } 

    // if (feedbackResult == true) {
    //     feedbackResultPara.className = "success";
    //     feedbackResultPara.textContent = "Feedback is Submitted";
    // } else if (feedbackResult == false) {
    //     feedbackResultPara.className = "error";
    //     feedbackResultPara.textContent = "The Feedback is Unsubmitted";
    // } 

    // This type are not working as i have done mistake in writing the switch formats
    // const result = usernameResult || feedbackResult;
    // switch (result) {
    //     case usernameResult == true:
    //         userResultPara.className = "success";
    //         userResultPara.textContent = "Username is Success";
    //         // break;
        
    //     case usernameResult == false:
    //         userResultPara.className = "error";
    //         userResultPara.textContent = "The Username is Error";
    //         // break;  

    //     case feedbackResult == true:
    //         feedbackResultPara.className = "success";
    //         feedbackResultPara.textContent = "Feedback is Submitted";
    //         // break;

    //     case feedbackResult == false:
    //         feedbackResultPara.className = "error";
    //         feedbackResultPara.textContent = "The Feedback is Unsubmitted";
    //         // break;    
    
    //     default:
    //         // break;
    // }
});

// form.username.addEventListener("keyup", (event) => {
//     const usernameResult = usernamePattern.test(event.target.value);
//     console.log(usernameResult);
//     if (usernameResult) {
//         form.username.setAttribute("class", "accepted");
//     } else {
//         form.username.setAttribute("class", "rejected");
//     }
// });

// form.feedback.addEventListener("keyup", (event) => {
//     const feedbackResult = feedbackPattern.test(event.target.value);
//     console.log(feedbackResult);
//     if (feedbackResult) {
//         form.feedback.setAttribute("class", "accepted");
//     } else {
//         form.feedback.setAttribute("class", "rejected");
//     }
// });




// ---------------------------------------------------------------------------------------------

//Email_id regx: /^[a-zA-Z0-9]{4,20}@[a-z]{3,10}.[a-z]{1,3}/

// const usernamePattern = /^[a-z]{6,10}$/;
// const feedbackPattern = /^.{20,50}$/;

// const usernameResult = usernamePattern.test("");
// const feedbackResult = feedbackPattern.test("");
// console.log(usernameResult, feedbackResult);


// -------------------------------------------------------------------------------------------------------------------------------
// feedback textarea content:
// --------------------------
// The Product which I have been Purchased from the xyz company is Working really well, it is also efficient for me in Many Purpose.
// Thanking You for Creating the wonderful Product like Laptop, which will create a impact on every individual s Life