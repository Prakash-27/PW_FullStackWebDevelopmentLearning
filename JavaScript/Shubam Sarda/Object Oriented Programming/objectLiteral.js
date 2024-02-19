// Object Literal
const userOne = {
  userName: "shubham",
  fullName: "shubham Sarda",
  email: "shubham@gmail.com",
  age: 25,
  login(){
      console.log("LOGIN");
  },
  logout(){
      console.log("LOGOUT");
  }
};
console.log(userOne.age);
console.log(userOne.email);
userOne.login();


const userTwo = {
  userName: "alex",
  fullName: "Alex Pace",
  email: "alex@gmail.com",
  age: 30,
  login(){
      console.log("LOGIN");
  },
  logout(){
      console.log("LOGOUT");
  }
};
console.log(userTwo.age);
console.log(userTwo.email);
userTwo.login();


class User {
    constructor(userName, fullName, email, age) {
        this.userName = userName;
        this.fullName = fullName;
        this.email = email;
        this.age = age;
    }
    login(){
      console.log("LOGIN");
    }
    logout(){
        console.log("LOGOUT");
    }
};

const userFive = new User("shubham", "Shubham Sarda", "shubham@gmail.com", 25);
console.log(userFive);
console.log(userFive.email);
console.log(userFive.fullName);
userFive.logout();
userFive.login();

// -----------------------------------------------------------------------------------------------------------------------------------

// Detail information of multiple user, it can be a multiple product, it can be a multiple blog post, it can be anything but we want a detailed information of multiple thing at that point of time Array with Objects are Great.
// let users = [
//   {
//     name: "Shubham Sarda",
//     email: "shubham@gmail.com",
//     age: 25,
//     isLoggedIn: false,
//     login: function () {
//       this.isLoggedIn = true;
//       return `LOGGED IN - ${this.isLoggedIn} - ${this.email}`;
//     },
//     logout: function () {
//       this.isLoggedIn = false;
//       return `LOGGED OUT - ${this.isLoggedIn}`;
//     },
//   },

//   {
//     name: "Alex Pace",
//     email: "alex@gmail.com",
//     age: 25,
//     isLoggedIn: false,
//     login: function () {
//       this.isLoggedIn = true;
//       return `LOGGED IN - ${this.isLoggedIn} - ${this.email}`;
//     },
//     logout: function () {
//       this.isLoggedIn = false;
//       return `LOGGED OUT - ${this.isLoggedIn}`;
//     },
//   },

//   {
//     name: "Deepak K",
//     email: "deepak@gmail.com",
//     age: 25,
//     isLoggedIn: false,
//     login: function () {
//       this.isLoggedIn = true;
//       return `LOGGED IN - ${this.isLoggedIn} - ${this.email}`;
//     },
//     logout: function () {
//       this.isLoggedIn = false;
//       return `LOGGED OUT - ${this.isLoggedIn}`;
//     },
//   },

//   {
//     name: "John M",
//     email: "john@gmail.com",
//     age: 25,
//     isLoggedIn: false,
//     login: function () {
//       this.isLoggedIn = true;
//       return `LOGGED IN - ${this.isLoggedIn} - ${this.email}`;
//     },
//     logout: function () {
//       this.isLoggedIn = false;
//       return `LOGGED OUT - ${this.isLoggedIn}`;
//     },
//   },
// ];

// single user information object is also better
let user = {
  name: "Shubham Sarda",
  email: "shubham@gmail.com",
  age: 25,
  isLoggedIn: false,
  blogs: [
      {title: "BLOG 1", numOfComment: 5, wordCount: 570}, 
      {title: "BLOG 2", numOfComment: 7, wordCount: 1257}
  ],
  allBlogConsole: function() {
      this.blogs.forEach((blog) => {console.log(blog)})
  },
  login: function () {
    this.isLoggedIn = true;
    return `LOGGED IN - ${this.isLoggedIn} - ${this.email}`;
  },
  logout: function () {
    this.isLoggedIn = false;
    return `LOGGED OUT - ${this.isLoggedIn}`;
  },
};


console.log(user.blogs);
console.log(user.blogs[0]);
console.log(user.blogs[0].title);
user.allBlogConsole();

// single user information, Array is also better
// let users = ["shubham", "alex", "deepak", "john"];

// -----------------------------------------------------------------------------------------------------------------------------
// Math

const num = 15.49;
const num2 = 15.9;
const num3 = 15.3;
const num4 = 15.3;
const num5 = 0;
const num6 = -15.3;


console.log(Math);
console.log(Math.PI);
console.log(Math.E);
console.log(Math.round(num));
console.log(Math.round(num2));
console.log(Math.ceil(num3));
console.log(Math.floor(num4));
console.log(Math.pow(2, 5));
console.log(Math.sign(num4));
console.log(Math.sign(num5));
console.log(Math.sign(num6));

let random = Math.random()
console.log(Math.round(random * 10));
console.log(Math.round(random * 100));
console.log(Math.round(random * 1000));

// -----------------------------------------------------------------------------------------------------------------------------------
// Primitive and Reference Type

// All data type are Primitive type except Object, like string, number, null, undefined, everything is primitive type
// Objects are Reference Type

let numOne = 15;
let numTwo = numOne;
numOne = 30;

console.log(numOne);
console.log(numTwo);

let objOne = {title: "Learning JavaScript", rank: 2};
let objTwo = objOne;
let objThree = objTwo;
objOne.rank = 1;

console.log(objOne);
console.log(objTwo);
console.log(objThree);

objOne.rank = 5;

console.log(objOne);
console.log(objTwo);
console.log(objThree);

// ---------------------------------------------------------------------------------------------------------------------------------------------------------------
// Primitive Type follows deepCopy, that means if we try to duplicate on a new variable it will create a new copy both of them Going to be diffrent.
// where as If I talk about the Reference copy which is shallowCopy, it basically point to the same item same object


let arrOne = ["shubham", "alex"];
let arrTwo = arrOne;
arrOne.push("deepak");
console.log(arrOne);
console.log(arrTwo);

// solution
let arrayOne = ["shubham", "alex"];
let arrayTemp = ["john", "deepak", "ABC"];
let arrayTwo = [...arrayOne, ...arrayTemp, "XYZ"];
arrayOne.push("deepak");
console.log(arrayOne);
console.log(arrayTwo);


let objectOne = {title: "Learning JavaScript", rank: 2};
let objectTwo = objectOne;
objectOne.rank = 1;
console.log(objectOne);
console.log(objectTwo);

// solution
let object_One = {title: "Learning JavaScript", rank: 2};
let object_Two = {...object_One, publish: "22-02-2025", rank: 50};
object_One.rank = 1;
console.log(object_One);
console.log(object_Two);