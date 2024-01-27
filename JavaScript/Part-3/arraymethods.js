// let fruits = ['apple', 'banana', 'cherry']
// let dogs = 'German Shepeard' 
// let demo = Array.isArray(fruits)
// console.log(demo); //true
// let dog = Array.isArray(dogs);
// console.log(dog); // false

// let last = fruits.pop()
// console.log(last); // modifies original array

// fruits.push('mango')
// console.log(fruits); // modifies original array

// -----------------------------------------------------------
// let first = fruits.shift()
// fruits.unshift('cherry')
// console.log(fruits); // modifies original array

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let array3 = [7, 8, 9];
// let newArray = array1.concat(array2, array3);
// console.log(newArray); // does not modifies original array
// console.log(newArray.concat(array1, array2, array3)); // modifies the original array.


// const result = fruits.join() //apple,banana,cherry
// const result = fruits.join("-") //apple-banana-cherry
// console.log(result); // does not modifies original array
// console.log(typeof result);

// let fruitsOne = ['apple', 'banana', 'cherry', 'orange']
// let citrus = fruitsOne.slice(2, 4);
// console.log(citrus); // does not modifies original array

// let fruitsTwo = ['apple', 'banana', 'cherry', 'orange', 'mango']
// // let Drupe = fruitsTwo.splice(1, 3);
// let removed = fruitsTwo.splice(1, 2, 'waterMelon', 'jackFruit'); //splice(start, deleteCount, items1, items2)
// console.log(fruitsTwo);
// // console.log(Drupe);
// console.log(removed); // modifies original array

// let reverses = ['apple','banana','kiwi','mango']
// reverses.sort().reverse(); // sort a elements in ascending or descending order
// console.log(reverses); // modifies original array
// console.log(sort);

// let indexes = ['apple','banana','kiwi','mango']
// // let index = indexes.indexOf('kiwi');
// let index = indexes.indexOf('kiwi', 2);
// let index = indexes.indexOf('waterMelon'); // -1
// console.log(index);
// Note that the indexOf method uses the strict equality operator (===) to compare the elements, so if you are 
// searching for a value that is not a string or number, make sure to provide the correct type.

// toString():
// The array.toString method in JavaScript is used to convert the array of elements to a string. It returns a string 
// object. The toString method of arrays always calls the join() array method internally, which joins the array and 
// returns one string containing each array element separated by commas.
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
// const numberOfString = numbers.toString();
// console.log(`Type of - `, typeof numberOfString); // Type of -  string
// console.log(`Number of String`, numberOfString); // Number of String 1,2,3,4,5,6,7,8

// const nestArray = [1, 2, 3, [4, 5]];
// const flatArray = nestArray.flat(); //default
// const flatArrayOne = nestArray.flat(1); //default
// console.log(flatArray); // [1, 2, 3, 4, 5]
// console.log(flatArrayOne); // [1, 2, 3, 4, 5]

// const nestDepth = [0, 1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
// const flatOneDefault = nestDepth.flat(1);
// console.log(flatOneDefault); // [ 0, 1, 2, 3, 4, [ 5, 6, [ 7, 8, [Array] ] ] ]

// const flatTwo = nestDepth.flat(2);
// console.log(flatTwo); // [ 0, 1, 2, 3, 4, 5, 6, [ 7, 8, [ 9, 10 ] ] ]

// const flatThree = nestDepth.flat(3);
// console.log(flatThree); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, [ 9, 10 ] ]

// const infinity = nestDepth.flat(Infinity);
// console.log(infinity); // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Array have more methods you have to read and refer the mdn docs and read the given PWSkills Notes.