// Sort() Method in Javascript

const fruits = ["dragon fruit", "apple", "date", "cherry", "banana"];

console.log(fruits.sort()); // [ 'apple', 'banana', 'cherry', 'date', 'dragon fruit' ]

const nums = [10, 5, 18, 1, 27];

console.log(nums.sort()); // [ 1, 10, 18, 27, 5 ]

const compareFunction = (a,b) => {
    // ascending order => a-b
    // 1. a-b is <0 => a comes first
    // 2. a-b is 0 => nothing changes
    // 3. a-b is >0 => b comes first

    // descending order => b-a

    return a - b;
}

console.log(nums.sort(compareFunction)); // [ 1, 5, 10, 18, 27 ] 

const people = [
    {name: "Piyush", age: 25},
    {name: "Suyash", age: 22},
    {name: "Raj", age: 30},
    {name: "Ishan", age: 27},
];

const compareFunctionForObj = (a,b) => {
    // ascending order => a-b
    // 1. a-b is <0 => a comes first
    // 2. a-b is 0 => nothing changes
    // 3. a-b is >0 => b comes first

    // descending order => b-a

    return a.age - b.age;
}

console.log(people.sort(compareFunctionForObj));
// [
//     { name: 'Suyash', age: 22 },
//     { name: 'Piyush', age: 25 },
//     { name: 'Ishan', age: 27 },
//     { name: 'Raj', age: 30 }
// ]




















// 561. Array Partion  
// nums = [1,4,3,2]

function arrayPairSum(nums) {
    nums.sort((a,b) => {
        return a-b;
    });

    let sum = 0;

    for(let i = 0; i < nums.length; i+=2) {
        sum += nums[i];
    }
    return sum;
};

// console.log(arrayPairSum([1,4,3,2])); // 4
// console.log(arrayPairSum([6,2,6,5,1,2])); // 9 (this is giving wrong answer)

// DataStructuresAndAlgorithms/RoadSideCoderDSA/Bubble-Selection-InsertionSort/sort.js
