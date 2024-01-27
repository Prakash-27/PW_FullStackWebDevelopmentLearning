const usernamePattern = /^[a-zA-Z0-9]{6,10}$/;
const feedbackPattern = /^.{20,50}$/;

function displayData(event) {
    event.preventDefault()
    // console.log(event.target);
    console.log(event);
}

function usernameValidation(event) {
    // console.log(event.target.value);
    const usernameResult = usernamePattern.test(event.target.value);
    if (usernameResult) {
        event.target.setAttribute("class", "accepted");
    } else {
        event.target.setAttribute("class", "rejected");
    }
}

function feedbackValidation(event) {
    const feedbackResult = feedbackPattern.test(event.target.value);
    if (feedbackResult) {
        event.target.setAttribute("class", "accepted");
    } else {
        event.target.setAttribute("class", "rejected");
    }
}

function changeText(event) {
    event.target.innerText = "New Value";
}