// Foundational Knowledge for Writing Pure Functions

// Javascript Data Types

// Primitive vs Structural

/*Primitive:
   1) undefined
   2) Boolean
   3) Number
   4) String
   5) BigInt
   6) Symbol
 */

/*Structural:
   1) Object: (new) Object, Array, Map, Set, WeakMap, Date
   2) Function
 */   

// Passing Values vs Passing Reference

// Primitives pass values:
let x = 2;   
let y = x;
y += 1;
console.log(y); // 3
console.log(x); // 2

// Structural types use references:
let xArray = [1, 2, 3];
let yArray = xArray;
yArray.push(4);
console.log(yArray); // (4) [1, 2, 3, 4]
console.log(xArray); // (4) [1, 2, 3, 4]

//-----------------------------------------------------------------------------------------------------------------------------

// Mutable vs Immutable

// Primitives are immutable
let myName = "Dave";
myName[0] = "W"; // nope!
console.log(myName); // Dave

// Reassignment is not the same as mutable or immutable
myName = "David";
console.log(myName); // David

// Structures contain mutable data
// It still shares reference
yArray[0] = 9;
console.log(yArray); // (4) [9, 2, 3, 4]
console.log(xArray); // (4) [9, 2, 3, 4]

//-----------------------------------------------------------------------------------------------------------------------------

// Pure Functions require you to avoid mutating the data

// Impure function that mutates the data 
const addToScoreHistory = (array, score) => {
  array.push(score);
  return array;
}

const scoreArray = [44, 23, 12];
console.log(addToScoreHistory(scoreArray, 14)); // 4) [44, 23, 12, 14]
console.log(scoreArray); // (4) [44, 23, 12, 14]

// This mutates the original array.
// This is considered to be a side-effect.

// Notice: "const" does not make the array immutable, it can mutate the array, because it is also a Structural data type so we can mutate it, only we can't reassign the value in const.

// There is much more to Pure Functions that I will discuss in my next tutorial.

// We need to modify our function so it does not mutate the original data.

// Before we can change our function to a pure function from an impure function we need to learn about Shallow copy vs Deep copy because that is making clones of structural data types, but they are diffrent types of clones.

//-----------------------------------------------------------------------------------------------------------------------------

// Shallow copy vs Deep copy (clones)

// Shallow copy:

// With the spread operator 
const zArray = [...yArray, 10];
console.log(zArray); // (5) [9, 2, 3, 4, 10]
console.log(yArray); // (4) [9, 2, 3, 4]

console.log(xArray === yArray); // true
console.log(xArray === zArray); // false

// With Object.assign()
const tArray = Object.assign([], zArray);
console.log(tArray); // (5) [9, 2, 3, 4, 10]
console.log(tArray === zArray); // false (because they do not use the same references in memory so we have made a clone that is independent so it is not the same if we push a number or anything else as an elements into the tArray it will not change the zArray)
tArray.push(11);
console.log(zArray); // (5) [9, 2, 3, 4, 10]
console.log(tArray); // (6) [9, 2, 3, 4, 10, 11]

// But if there are nested arrays or objects...
yArray.push([8, 9, 10]);
const vArray = [...yArray];
console.log(vArray); // (5) [9, 2, 3, 4, [8, 9, 10]]
console.log(yArray); // (5) [9, 2, 3, 4, [8, 9, 10]]
vArray[4].push(5);
console.log(vArray); // 5) [9, 2, 3, 4, [8, 9, 10, 5]]
console.log(yArray); // 5) [9, 2, 3, 4, [8, 9, 10, 5]]
// above yArray also contains 5) [9, 2, 3, 4, [8, 9, 10, 5]] now how could this be we used the spread operator so it should not share the same references
// but the problem is Shallow copy, the nested structural data types still share a reference! when you use a shallow sopy so whether we use object.assign or the spread operator to make a new array or even a new object, Im just using arrays for examples here they don't share a reference until that original has a nested structural data type and then we have the same problem a shallow copy does not go levels deep when it comes to structural data types, so any nested structural data types still share a reference although the types that are not nested they do not so that's why it is shallow. 

//so from there we should also note that if you're used to creating new arrays with array.from() and slice() which are also valid methods of doing that those also create shallow copies too.         


// When it comes to objects, what about using Object.freeze() ?

const scoreObj = {
     "first": 44,
     "second": 12,
     "third": { "a": 1, "b": 2 }
}

Object.freeze(scoreObj);

scoreObj.third.a = 8;
console.log(scoreObj);
/*{first: 44, second: 12, third: {…}}
first: 44
second: 12
third: {a: 8, b: 2} // even though we frozee the object we were still able to mutate the value here stored under the key a in the nested object, on once again object.freeze is essentially a shallow freeze, and that is also a problem so we're facing kind of the same problem there and so the object.freeze not stop or issue.   
[[Prototype]]: Object
 */

// How do we avoid these mutations?
// Deep copy is needed to avoid this with structural data types

// Several libraries like lodash, Ramda, and others do have this feature built-in, if you use those libraries.

/* Here is a one line Vanilla Javascript solution,
but it does not work with Dates, functions, undefined, Infinity, RegExps, 
Maps, Sets, Blobs, FileLists, ImageDates, and Other complex data types
 */

const newScoreObj = JSON.parse(JSON.stringify(scoreObj));
console.log(newScoreObj);
/*{first: 44, second: 12, third: {…}}
first: 44
second: 12
third: {a: 8, b: 2} 
[[Prototype]]: Object
 */
console.log(newScoreObj === scoreObj); // false

// Instead of using a library, here is a Vanilla Javascript function

const deepClone = (obj) => {
  if(typeof obj !== "object" || obj === null) return obj;

  // Create an array or object to hold the values
  const newObject = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    const value = obj[key];
    // recursive call for nested objects & arrays
    newObject[key] = deepClone(value);
  }

  return newObject;
}

const newScoreArray = deepClone(scoreArray);
console.log(newScoreArray); // (4) [44, 23, 12, 14]
console.log(scoreArray); // (4) [44, 23, 12, 14]
console.log(newScoreArray === scoreArray);

const myScoreObj = deepClone(scoreObj);
console.log(myScoreObj);
/*{first: 44, second: 12, third: {…}}
first: 44
second: 12
third: {a: 8, b: 2} 
[[Prototype]]: Object
 */
console.log(scoreObj);
/*{first: 44, second: 12, third: {…}}
first: 44
second: 12
third: {a: 8, b: 2} 
[[Prototype]]: Object
 */
console.log(myScoreObj === scoreObj); // false


// Now we can make a pure function
const pureAddToScoreHistory = (array, score, cloneFunc) => {
     const newArray = cloneFunc(array);
     newArray.push(score);
     return newArray;
}

const pureScoreHistory = pureAddToScoreHistory(scoreArray, 18, deepClone);
console.log(pureScoreHistory); // (5) [44, 23, 12, 14, 18]
console.log(scoreArray); // (4) [44, 23, 12, 14]

// Review:

// Primitive vs Structural Data Types

// Primitive data types pass values

// Structural data types pass references

// Primitives data types are immutable

// Reassignment is not the same as mutable

// Structural data types contain mutable data

// Shallow copy vs Deep copy (clones of data structures)

// Shallow copies still share references of nested structures
// which allows for mutation of the original data 

// Object.freeze() creates a shallow freeze

// Deep copies share no references 

// All of this is important to know when constructing Pure Functions 
// because they require you to avoid mutating the original data 

// More on Pure Functions to come in my next tutorial!












