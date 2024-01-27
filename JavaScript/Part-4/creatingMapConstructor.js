// Creating map from Object:
// -------------------------
// To create a map from an object in javascript, map constructor can be used and pass the object which is 
// converted into an iterable array as an argument.

// Object
const user = {
    name: "mangesh",
    email: "mangesh@gmail.com",
};
// map constructor
const userFinal = new Map(Object.entries(user));
// console.log(userFinal);
//output - Map(2) {'name' => 'mangesh', 'email' => 'mangesh@gmail.com'}


// Looping of object and adding to map
const newData = new Map();
// console.log(newData);

for (let key in user) {
    if (user.hasOwnProperty(key)) {
        newData.set(key, user[key]);
    }
}
// console.log(newData);

// -----------------------------------------------------------------------------

// Creating an object from map:
// ---------------------------- 
// To create an object from a map in javascript, Object.fromEntries() method or loops can be used.

// convert map to object using Object using Object.fromEntries Method.
const map = new Map(
    ["fruit", "apple"],
    ["vegetables", "cabbage"],
);
console.log(map); // output - Map(2) {'fruit' => 'apple', 'vegetables' => 'cabbage'}

const obj = Object.fromEntries(map);
console.log(obj); // output - { fruit: 'apple', vegetables: 'cabbage'}

// Looping
const obj1 = {};

map.forEach((value, key) => {
    obj1[key] = value;
});
console.log(obj1); // output - { fruit: "apple", vegetables: "cabbage"}