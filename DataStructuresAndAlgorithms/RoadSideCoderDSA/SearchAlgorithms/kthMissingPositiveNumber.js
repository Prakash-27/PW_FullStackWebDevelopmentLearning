// Ques 3: Kth Missing Positive Number
// Given an array arr of positive integers sorted in a strictly increasing order,
// and an integer k. Return the kth positive integer that is missing from this array.

// Input: arr = [2, 3, 4, 7, 11], K = 5 ----->>>>> Output: 9
// Explanation: The missing Positive integer are [1,5,6,8,9,10,12,13,...].
//              The 5th missing positive integer is 9.

function findKthPositiveNumber(arr, k) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] <= k + count) {
            count++;
        }
    }
    return k + count;
}

console.log(findKthPositiveNumber([2, 3, 4, 7, 11], 5)); // 9
console.log(findKthPositiveNumber([1, 2, 3, 4], 2)); // 6


// DataStructuresAndAlgorithms/RoadSideCoderDSA/SearchAlgorithms/kthMissingPositiveNumber.js