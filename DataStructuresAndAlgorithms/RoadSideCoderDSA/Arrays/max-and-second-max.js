// Ques 1 - Second Largest Number
// Given an array Arr of size N, print second largest
// distinct element from an array.

// Input: [12, 35, 1, 10, 34, 1]  ----->>>>>  Output: 34
// Input: [10, 5, 10]             ----->>>>>  Output: 5

// const uniqueArr = new Set(arr);
// console.log(uniqueArr); // Set(5) { 12, 35, 1, 10, 34 }

// Brute Force Approach
function secondLargest(arr){
    const uniqueArr = Array.from(new Set(arr)); // Set() is O(n)
    // console.log(uniqueArr); // [ 12, 35, 1, 10, 34 ]

    uniqueArr.sort((a, b) => {  // sort() is O(nlogn) (we should always take higher Time Complexity)
        return b - a; 
    });
    // uniqueArr.sort() => [ 35, 34, 12, 10, 1 ]
    if(uniqueArr.length >= 2){ 
        return uniqueArr[1]; 
    } else {
        return -1;
    }
}

console.log(secondLargest([12, 35, 1, 10, 34, 1])); // 34
console.log(secondLargest([10, 5, 10])); // 5
console.log(secondLargest([45, 180])); // 45
console.log(secondLargest([90])); // -1
// Time Complexity -> O(nlogn);

//-----------------------------------------------------------------------------------------------------------------------------------------

// Optimised Approach

// [12, 35, 1, 10, 34, 1]
//   0   1  2   3   4  5
// i = 0 => 12 > Number.NEGATIVE_INFINITY => true => secondLargest = Number.NEGATIVE_INFINITY, largest = 12.
// i = 1 => 35 > 12 => true => secondLargest = 12, largest = 35.
// i = 2 => 1 > 35 => false => else if => 1 != 35(true) && 1 > 12(false) => condition fails return.
// i = 3 => 10 > 35  => false => else if => 10 != 35(true) && 10 > 12(false) => condition fails return.
// i = 4 => 34 > 35  => false => else if => 34 != 35(true) && 34 > 12(true) => secondLargest = 34.
// i = 5 => 1 > 35  => false => else if => 1 != 35(true) && 1 > 34(false) => condition fails return.

// largest = 35, secondLargest = 34.

function secondLargestOptimised(arr){
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;

    if (arr.length >= 2) {
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > largest){
                secondLargest = largest;
                largest = arr[i];
            } else if(arr[i] != largest && arr[i] > secondLargest){
                secondLargest = arr[i];
            }
        }
        return secondLargest;
    } else {
        return -1;
    }
}

console.log(secondLargestOptimised([12, 35, 1, 10, 34, 1])); // 34
console.log(secondLargestOptimised([10, 5, 10])); // 5
console.log(secondLargestOptimised([45, 180])); // 45
console.log(secondLargestOptimised([90])); // -1
// Time Complexity -> O(n);
// Space Complexity -> O(1); (we are not creating any new array, we are just returing a secondLargest value)

//-----------------------------------------------------------------------------------------------------------------------------------------

// Optimised Approach thirdLargestOptimised

function thirdLargestOptimised(arr){
    let largest = Number.NEGATIVE_INFINITY;
    let secondLargest = Number.NEGATIVE_INFINITY;
    let thirdLargest = Number.NEGATIVE_INFINITY;

    if (arr.length >= 3) {
        for(let i = 0; i < arr.length; i++){
            if(arr[i] > largest){
                thirdLargest = secondLargest;
                secondLargest = largest;
                largest = arr[i];
            } else if(arr[i] != largest && arr[i] > secondLargest){
                thirdLargest = secondLargest
                secondLargest = arr[i];
            } else if(arr[i] != largest && arr[i] != secondLargest && arr[i] > thirdLargest){
                thirdLargest = arr[i];
            }
        }
        return thirdLargest;
    } else {
        return -1;
    }
    
}

console.log(thirdLargestOptimised([12, 35, 1, 10, 34, 1, 20])); // 20
console.log(thirdLargestOptimised([10, 5, 10, 7, 14])); // 7
console.log(thirdLargestOptimised([12, 35, 45, 90])); // 35
console.log(thirdLargestOptimised([12, 35, 1])); // 1
console.log(thirdLargestOptimised([12, 35])); // -1
// Time Complexity -> O(n);
// Space Complexity -> O(1); (we are not creating any new array, we are just returing a thirdLargest value) 


// DataStructuresAndAlgorithms/RoadSideCoderDSA/Arrays/max-and-second-max.js

