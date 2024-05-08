//Destructuring Arrays 

// let nums = [10,20,30];
// const [a,b,c] = nums;
// console.log(a,b,c);

// let [firstName, lastName] = "Raj Kapoor".split(" ");
// console.log(firstName, lastName);

// let nums = [10, true, 30, "hello", 40];
// let [a,b,c,d,e] = nums;
// let [a,,c,,e] = nums;
// console.log(a,c,e,b,d);
// console.log(a,c,e);

// const [char1, char2, char3] = "hello";
// console.log(char1, char2, char3);

// let user = {};
// [user.firstName, user.lastName] = "John Pete".split(" ");
// console.log(user);

// Object Destructuring: 

// const user = {
//     name: "john",
//     email: "john@gmail.com"
// }

// const {email: emailAddress, name: username, isAdmin = false} = user
// // console.log(name);
// // console.log(email);
// console.log(emailAddress);
// console.log(username);
// console.log(isAdmin);

const user = {
    name: "john",
    email: "john@gmail.com",
    age: 30,
    hobbies: ['coding','travelling','music'],
    profession: "Engineer",
    address: {
        street: 'randomStreet',
        city: 'Delhi',
        country: 'India'
    }
}

// const {name, email, age, address:{city, country}} = user;
// console.log(name, email, age);

// NormalfunctionParameters

function normalFunc(name, email, age){
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Age: ${age}`);
}
normalFunc(user.name, user.email, user.age);
console.log("----------------------------");
normalFunc(user.name, user.age, user.email);



//specialfunctionParameters

function specialFunc({email: emailAddress, age, name}){
    console.log(`Name: ${name}`);
    console.log(`Email: ${emailAddress}`);
    console.log(`Age: ${age}`);
}
specialFunc(user);


