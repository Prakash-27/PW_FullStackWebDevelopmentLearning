// In config file here we going to store information about user, or maybe Iam connecting with server i going to store it configuration here.
// In future If you are working in APIs, you create a config file and then store your configuration information into it.
// Other thing is If you are working in API there are chances you have configuration file, or you maybe working in database so you want to store some type of config.js
// or you may be have some type of function that you need to store maybe for conversion, some type of small help you can create helper.js

const username = "shubham";
const age = 26;

// 1st type of default we can create
// export default function connect(){
//     return `${username} is connected!`;
// }

function connect(){
    return `${username} is connected!`;
}

function disconnect(){
    return `${username} is disconnected`;
}

// 2nd type of default we can create
// export {username, age, connect as default ,disconnect};
export {username, age, connect, disconnect};

// Only one can be default not many can be default.

