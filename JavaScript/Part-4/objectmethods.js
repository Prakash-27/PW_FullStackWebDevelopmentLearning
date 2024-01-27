/**
 ********* Object.keys() *********
 */
// var emp = {
//     name: "Alex",
//     age: 27,
//     salary: 10000,
// };

// var keys = Object.keys(emp);
// console.log(keys);

/**
 ********* Object.values() *********
 */
// var emp = {
//     name: "Alex",
//     age: 27,
//     salary: 10000,
// };

// var rec = Object.values(emp);
// console.log(rec); 

/**
 ********* Object.entries *********
 */
// const emp = {
//     name: "Alex",
//     age: 24,
//     salary: 10000,
// };

// console.log(Object.entries(emp));
// //output - [ [ 'name', 'Alex' ], [ 'age', 24 ], [ 'salary', 10000 ] ]

// console.log(Object.entries(emp)[1]);
// //output - ['age', 24]

// for (const key in emp) {
//     console.log(`${key} : ${emp[key]}`);
// }
// //output - name: "Alex", age: 24, salary: 10000;

/**
 ********* Object.assign() *********
 */
// syntax - Object.assign(target, ...sources)
// The values and properties of one or more source objects are copied to a destination object using the 
// Object.assign() function. It is used for cloning an object.

// let emp = {
//     name: "Alex",
//     age: 27,
//     salary: 10000,
// };

// const newObject = Object.assign({}, emp);
// console.log(newObject);

/**
 ********* Object.freeze() & Object.isFrozen() *********
 */
//  Object.freeze() - An object is frozen using this method.

//  Changing a frozen object is impossible. It prevents the addition and deletion of properties. Additionally, it
//  prevents changes to property values from occurring unless an object is involved.
 
// Object.isFrozen() - is to check whether the object is frozen.

// var emp = {
//     name: "Alex",
//     age: 27,
//     salary: 10000,
// };

// Object.freeze(emp);

// emp.position = "developer"; ////not applied since its freeze.
// emp.name = "John"; //not applied since its freeze.
// console.log(Object.isFrozen(emp));
// console.log(emp);

/**
 ********* Object.seal() & Object.isSeal() *********
 */
//  Object.seal() - It is a method identical to Object.freeze(). You cannot add or remove an object's properties, but 
//  you can edit the value of an existing property.
 
// Object.isSealed() - is used to check whether the object is sealed. It returns true if the object is sealed and 
// returns false if the object is not sealed.
// var emp = {
//     name: "Alex",
//     age: 27,
//     salary: 10000,
// };

// emp.depart = "web dev"; //can be added since run before method 
// Object.seal(emp);
// emp.salary = 20000; //we can be changed the value of emp.salary Object value after seal method run.

// emp.id = 1001; //not added since run after Object.seal() method
// console.log(Object.isSealed(emp));
// console.log(emp);

/**
 ********* Object.fromEntries() *********
 */
// Object.fromEntires() creates an object from an iterable over entries. Each entry is a two-element Array with a 
// property key and a property value.
// const data = [
//     ["id", "123456"],
//     ["username", "dummy"],
//     ["email", "dummy@gmail.com"],
// ];

// const dataObj = Object.fromEntries(data);
// console.log(dataObj);
// output - { id: '123456', username: 'dummy', email: 'dummy@gmail.com' }

/**
 ********* Object.create() *********
 */
// It is the method in JavaScript that is used to create a new object with an existing specified object and 
// properties.
// const userOne = {
//     userName: "dummy",
//     id: "1232424",
// };

// const userTwo = Object.create(userOne);

// userTwo.dept = "web dev";
// userTwo.userName = "alex";
// userTwo.id = "233444343";
// console.log(userTwo);
// output - { dept: 'web dev', userName: 'alex', id: '233444343' }

/**
 ********* Object.hasOwn() *********
 * syntax - Object.hasOwn(Object, properties)
 */
// This method in JavaScript returns a boolean value indicating whether the object has the specified property as 
// its own property. It returns true if present else false. It is intended as a replacement for Object.hasOwnProperty()
// const userOne = {
//     userName: "dummy",
//     id: "1232424",
// };
// console.log(Object.hasOwn(userOne, "userName"));
// //output - true

/**
 ********* Object.getOwnPropertyNames() *********
 * syntax - Object.getOwnPropertyNames(Obj)
 */
//  It is the method in JavaScript that return an array of all properties found directly in a given object.
// const userOne = {
//     userName: "dummy",
//     id: "1232424",
// };

// console.log(Object.getOwnPropertyNames(userOne));
// //output - [ 'userName', 'id' ]

/**
 ********* Object.getOwnPropertyDescriptor() *********
 * syntax - Object.getOwnPropertyDescriptor(Object, property)
 */
// This method retrieves the descriptor of a single property on an object. It returns an object that contains the 
// attributes of the specified property.
// const userOne = {
//     userName: "dummy",
//     id: "1232424",
// };

// const des1 = Object.getOwnPropertyDescriptor(userOne, "userName");

// console.log(des1.configurable);
// // output -true

// console.log(des1.value);
// // output - dummy

/**
 ********* Object.getOwnPropertyDescriptors() *********
 * syntax - Object.getOwnPropertyDescriptors(Obj)
 */
// const userOne = {
//     userName: "dummy",
//     id: "1232424",
// };

// console.log(Object.getOwnPropertyDescriptors(userOne));
// // output - 
// {
//     userName: {
//         value: 'dummy',
//         writable: true,
//         enumerable: true,
//         configurable: true
    
//     },
//     id: {
//         value: '1232424',
//         writable: true,
//         enumerable: true,
//         configurable: true
//     }
// }

// console.log(Object.getOwnPropertyDescriptors(userOne).userName.configurable);
// // output -true

/**
 ********* Object.defineProperty() *********
 * syntax - Object.defineProperty(Object, property, descriptor)
 */
// const user = {}
// Object.defineProperty(user, "name", {
//     value: "Alex",
//     writable: false, //false -> value can be change, true -> 
//     //value can be change
// });

// console.log(user.name);
//Output - Alex

/**
 ********* Object.defineProperties() *********
 * syntax - Object.defineProperties(Object, properties)
 */
// const data = {};

// Object.defineProperties(data, {
//     username: {
//         value: "Alex",
//         writable: true,
//     },
//     email: {
//         value: "alex@gmail.com",
//         writable: "true",
//     } 
// });

// console.log(data.username); //output - Alex
// console.log(data.email); // output - alex@gmail.com

/**
 ********* Object.isExtensible() *********
 * syntax - Object.isExtensible(Obj)
 */
// const data = {
//     username: "alex",
//     email: "alex@gmail.com",
// };
// console.log(Object.isExtensible(data));
//output - true

/**
 ********* Object.preventExtensible() *********
 * syntax - Object.preventExtensible(Obj)
 */
// const data = {
//     username: "alex",
//     email: "alex@gmail.com",
// };
// console.log(Object.isExtensible(data)); //output - true

// Object.preventExtensions(data);
// console.log(Object.isExtensible(data)); //output - false

// Enumerating Properties:

// In JavaScript, the property of every object can be classified by three factors:
// 1. Enumerable or non-enumerablª
// 2. String or symbo¯
// 3. Own property or inherited property from the prototype chain.


// Enumerable properties are the objects with properties of the internal enumerable flag set to true which is the 
// default property and allow us to loop over the object using for…in or Object.keys().


// Enumerable properties can be set to false manually with the help of Object.defineProperty() or 
// Object.defineProperties(). As a result, the object will not be possible to loop or iterate.

// const data = {};
// Object.defineProperties(data, {
//     userName: {
//         value: "Alex",
//         enumerable: true,
//     },
//     email: {
//         value: "alex@gmail.com",
//         enumerable: true,
//     },
//     phone: {
//         value: "1414426267251",
//         enumerable: false,
//     },
// });

// for(const key in data) {
//     console.log(`${key} : ${data[key]}`);
// }
// output - 
// userName : Alex
// email : alex@gmail.com

// From the above example, only the user and email can be loop since their enumerable property is set to true, 
// while phone property is not looped out as its enumerable property is set to false.
