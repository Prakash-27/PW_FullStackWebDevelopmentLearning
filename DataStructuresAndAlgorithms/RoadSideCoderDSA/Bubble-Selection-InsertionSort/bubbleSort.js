// Ques 1: Implement Bubble Sort in JavaScript
// Write a function to sort the given array nums in ascending order.
// Input: nums = [29,10,14,37,14] ----->>>>> Output: [10,14,14,29,37]

function bubbleSort(nums) {
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

console.log(bubbleSort([10,14,14,29,37])); // (Sorted Array)
console.log(bubbleSort([37,29,14,14,10])); // (Reversed Sorted Array)
console.log(bubbleSort([29,10,14,37,14])); // (Randomly Sorted Array)
//[ 10, 14, 14, 29, 37 ](Sorted Array) Best case Time Complexity - O(2n) => O(n)
//[ 37, 29, 14, 14, 10](Reversed Sorted Array) Worst case Time Complexity - O(n*n) => O(n^2)
//[29,10,14,37,14](Randomly Sorted Array) Average Time Complexity - O((n/2)*n) => O(n^2)

// Space Complexity - O(1)


// DataStructuresAndAlgorithms/RoadSideCoderDSA/Bubble-Selection-InsertionSort/bubbleSort.js
