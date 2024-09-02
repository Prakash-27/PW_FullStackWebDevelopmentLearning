// 75. Sort Color
// Given an array nums with n object colored red, white, or blue, sort them in-place so that 
// object of the same color are adjacent, with the colors in the order red, white, and blue.

// We will use the integers 0, 1, and 2 to represent the color red, white, and blue, respectively.

// You must solve this problem without using the library's sort function.

// Example 1: 
// Input: nums = [2,0,2,1,1,0]
// Output: [0,0,1,1,2,2]

// Example 2: 
// Input: nums = [2,0,1]
// Output: [0,1,2]

// we are using the bubble sort solution for this problem, we can learn how to solve the problems in O(nlog(n)) in Merge sort and Quick sort.

function sortColors(nums) {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        for(let j = 0; j < n - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
            }
        }
    }
    return nums;
}

console.log(sortColors([2,0,2,1,1,0])); // [ 0, 0, 1, 1, 2, 2 ]
console.log(sortColors([2,0,1])); // [ 0, 1, 2 ]

// DataStructuresAndAlgorithms/RoadSideCoderDSA/Bubble-Selection-InsertionSort/sortColors.js


