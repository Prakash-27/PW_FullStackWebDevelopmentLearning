// Ques 3: Implement Insertion Sort in JavaScript
// Write a function to sort the given array nums in ascending order.

// Input: nums = [29,10,14,37,14,33,8,11] ----->>>>> Output: [8,10,11,14,14,29,33,37]

function insertionSort(nums) {
    const n = nums.length;

    for(let i = 1; i < n; i++) {
        const key = nums[i];
        let j = i - 1;
        while (j >= 0 && nums[j] > key) {
            nums[j + 1] = nums[j];
            j--;
        }
        nums[j + 1] = key;
    }
    return nums;
}

console.log(insertionSort([29,10,14,37,14,33,8,11]));

//[8,10,11,14,14,29,33,37](Sorted Array) Best case Time Complexity - O(2n) => O(n)
//[37,33,29,14,14,11,10,8](Reversed Sorted Array) Worst case Time Complexity - O(n*n) => O(n^2)
//[29,10,14,37,14,33,8,11](Randomly Sorted Array) Average Time Complexity - O((n/2)*n) => O(n^2)

// Space Complexity - O(1)

// DataStructuresAndAlgorithms/RoadSideCoderDSA/Bubble-Selection-InsertionSort/insertionSort.js
