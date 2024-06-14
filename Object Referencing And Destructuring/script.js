// Objects in javascript

// Object are use to store keyed collections of varies data and more complex utilities, and object can be created by using curly braces.

// const user = {
//     name: "Robert",
//     age: 24,
// };

// user.name = "Drowning";
// delete user.age;
// console.log(user);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

// const func = (function (a) {
//     delete a; // because is only used to delete a object, not to delete local scope variable, it is not a variable like var let const, so it won't delete the a.
//     return a;
// })(5)

// console.log(func); // 5

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

// const user = {
//     name: "Robert",
//     age: 24,
//     "like this video": true,
// };

// delete user["like this video"];
// console.log(user);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

// how to add Dynamic key value pairs to an object:

// const property = "firstName";
// const name = "Prakash S"

// const user = {
//     [property]: name,
// };

// console.log(user.firstName);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

// How to print all the keys and values in the Object?
// we can use forin loop, to loop or iterate over the objects etc.

// const user = {
//     name: "Roadside Coder",
//     age: 24,
//     isTotallyAwesome: true,
// };

// for (const key in user) {
//     console.log(`${key}: ${user[key]}`);
// }

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 1 - What's the Output?

// const obj = {
//     a: "one",
//     b: "two",
//     a: "three",
// };

// console.log(obj); // output - a: 'three', b: 'two'

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 2 - Create a function multiplyByTwo(obj) that
//              multiplies all numeric property values of nums by 2.

// let nums = {
//     a: 100,
//     b: 200,
//     title: "My nums",
// };

// multiplyByTwo(nums);

// function multiplyByTwo(obj) {
//     for (const key in obj) {
//         if (typeof obj[key] === "number") {
//             obj[key] *= 2;
//         }
//     }
// }

// console.log(nums);

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 3 - What's the Output of the following code?

// const a = {};
// const b = { key: "b" }; // we can't able to pass the object 'b' as key of a object 'a', unless or until we convert the b to string, because we can pass only string as an key. 
// const c = { key: "c" }; // When we try to convert object to string forcefully it's get converted into [object Object] 

// a[b] = 123; // => In console it is converted like this, a[object Object]: 123
// a[c] = 456; // => In console it is converted like this, a[object Object]: 456

// console.log(a); // {[object Object]: 456}
// console.log(a[b]); // 456

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 4 - What's JSON.stringify and JSON.parse ?

// const user = {
//     name: "Piyush",
//     age: 24,
// };

// const convertingObjToStr = JSON.stringify(user);

// console.log(convertingObjToStr);

// const convertingStrToObj = JSON.parse(convertingObjToStr);

// console.log(convertingStrToObj);

// // The most common usecase for this is storing it in our local storage, when we say localStorage.setItem("test", convertingObjToStr); 

// localStorage.setItem("test", user);
// localStorage.setItem("tests", convertingObjToStr);

// console.log(localStorage.getItem("test")); // [object Object]
// console.log(localStorage.getItem("tests")); // {"name":"Piyush","age":24}
// console.log(JSON.parse(localStorage.getItem("tests"))); 

/**
 * {name: 'Piyush', age: 24}
 *   age: 24
 *   name: "Piyush"
 *   [[Prototype]]: Object
 */

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 5 - What's the Output ?

// console.log([..."Lydia"]); // output: ['L', 'y', 'd', 'i', 'a']

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 6 - What's the Output ?

// const user = { name: "Lydia", age: 21 };
// const admin = { admin: true, ...user };

// console.log(admin); // {admin: true, name: 'Lydia', age: 21}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 7 - What's the Output ?

// const settings = {
//     username: "Piyush",
//     level: 19,
//     health: 90,
// };

// const data = JSON.stringify(settings, ["level", "health"]);
// console.log(data); // {"level":19,"health":90}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 8 - What's the Output ?

// const shape = {
//     radius: 10,
//     diameter() {
//         return this.radius * 2;
//     },
//     perimeter: () => 2 * Math.PI * this.radius, // In arrow function this refer to window object, so it won't work in arrow function.
// };

// console.log(shape.diameter()); // 20
// console.log(shape.perimeter()); // NaN (Not a Number)

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 9 - What is destructuting in objects ?

// let user = {
//     name: "Prakash",
//     age: 24,
//     fullName: {
//         first: "Piyush",
//         last: "Agarwal"
//     }
// };

// const { name: myName, fullName: { first, last } } = user;

// console.log(myName); // Prakash
// console.log(first, last); // Piyush Agarwal

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 10 - What's the output?

// function getItems(fruitList, favoriteFruit, ...args){
//     return [...fruitList, ...favoriteFruit, ...args]
// }

// console.log(getItems(["banana", "apple"], ["pear", "Kiwi"], "orange"));

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

// Object Referencing:

// Question 11 - What's the output?

// let c = { greeting: "Hey!" };
// let d;

// d = c;
// c.greeting = "Hello";
// console.log(d.greeting); // Hello


// Question 12 - What's the output?

// console.log({ a: 1 } == { a: 1 }); // false
// console.log({ a: 1 } === { a: 1 }); // false

// both the objects are different object over here, and both have different space in the memory, objects are only equal when they are referencing us particular area in the memory, over here, this { a: 1 } is independent object, this { a: 1 } is independent object, it does'nt matter if you comparing strictly equal or not strictly equal, it is always going to give us false, because both of this are going to point different memory space.    


// Question 13 - What's the output?

// let person = { name: "Lydia" };
// const members = [person];
// person = null;
// // person.name = null;

// console.log(members);


// Question 14 - What's the output?

// const value = { number: 10 };

// const multiply = (x = {...value}) => {
//     console.log((x.number *= 2));
// }

// multiply();  // 20 
// multiply();  // 20
// multiply(value);  // 20
// multiply(value);  // 40


// Question 14 - What's the output?

// function changeAgeAndReference(person) {
//     person.age = 25;
//     person = {
//         name: "John",
//         age: 50,
//     }

//     return person;
// }

// const personObj1 = {
//     name: "Alex",
//     age: 30,
// }

// const personObj2 = changeAgeAndReference(personObj1);

// console.log(personObj1); // {name: 'Alex', age: 25}
// console.log(personObj2); // {name: 'John', age: 50}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 16 - What's Shallow copy and Deep copy?

// Shallow copy:
//--------------
// In theory shallow copy basically means, copy an object to another object, but that particular object the other object as still got a reference to some of the particular object of the original object, when one object holds the references to another object this is a shallow copy.

// Deep copy:
//-----------
// but when we completely clone an object into an another variable that is called deep copy, so we don't have any references to the original object and that is why it is deep copy.

//--------------------------------------------------------------------------------------------------------------------------------------------------------------

// Question 17 - How to deep copy / clone an object ?

let user = {
    name: "Roadside Coder",
    age: 24,
};

console.log(user);



// first way to clone the object using Object.assign which is object method:
// -------------------------------------------------------------------------
// const objClone = Object.assign({}, user);

// console.log(objClone);

// objClone.name = "Piyush";
// objClone.age = 28;

// console.log(objClone);

// second way to clone the object using JSON Stringify and Parsing:
// ----------------------------------------------------------------
// const objToStr = JSON.stringify(user);
// const strToObj = JSON.parse(objToStr);

// console.log(strToObj);

// strToObj.name = "Prakash";
// strToObj.age = 24;

// console.log(strToObj);

// third way to clone the object is using Destructuring:
// -----------------------------------------------------

// const obj = {...user};

// console.log(obj);

// obj.name = "Monish";
// obj.age = 19;

// console.log(obj);







