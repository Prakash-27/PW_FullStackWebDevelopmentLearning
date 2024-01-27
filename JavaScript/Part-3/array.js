// Arrays syntax:
// --------------
const languages = ["javascript", "java", "cpp", true, 123]

const len = languages.length
console.log(len);

// ---------------------------------------------------------------

let numbers = [1,2,3,4,5,6,7,8,9,0];

let array = ["Hello", 20, true]

// let names = Array()

let emptyArray = new Array(5)
console.log(emptyArray);

// ---------------------------------------------------------------

let colors = Array("Black", "Red", "white", "Blue");

let players = ["Virat Kohli", "Rohit Sharma", "SuryaKumar Yadav", 
"KL Rahul", "Ravindra Jadeja", "Rishabh Pant", "Shivam"];

let newPlayer = []
newPlayer[0] = "virat"
console.log(newPlayer);
console.log(newPlayer[0]);

// ---------------------------------------------------------------
const hobbies = ["Coding", "Learning", "Watching movies"]

hobbies[0] = "building Project" // change to building Project
hobbies[2] = "Football" // change to Football

console.log(hobbies);

// ---------------------------------------------------------------
const iArr = [1, 2, 3, 4]
console.log(iArr.length);
delete iArr[2]
console.log(iArr);
console.log(iArr.length);

// ---------------------------------------------------------------
const pwarray = [1, 2, 3, 4, 5]

for (const iterator of pwarray) {
    console.log(`value is ${iterator}`);
}