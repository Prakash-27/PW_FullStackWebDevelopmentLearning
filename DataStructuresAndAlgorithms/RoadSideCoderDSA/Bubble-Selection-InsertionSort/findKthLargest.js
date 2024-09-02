// 215. Kth Largest Element in an Array

// Given an integer array nums and an integer k. return the Kth largest element in the array.
// Note that it is the Kth largest element in the sorted order. not the Kth distinct element.

//Can you solve it without sorting?

// Example 1:
// Input: nums = [3,2,1,5,6,4], k = 2
// Output: 5

// Example 2:
// Input: nums = [3,2,3,1,2,4,5,5,6], k = 4
// Output: 4

function findKthLargest(nums, k) {
    nums.sort((a,b) => a-b);
    return nums[nums.length-k];
}

console.log(findKthLargest([3,2,1,5,6,4], 2)); // 5
console.log(findKthLargest([3,2,3,1,2,4,5,5,6], 4)); // 4

// DataStructuresAndAlgorithms/RoadSideCoderDSA/Bubble-Selection-InsertionSort/findKthLargest.js

