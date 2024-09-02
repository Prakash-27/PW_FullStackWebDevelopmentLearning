// Ques 6: Implement Quick Sort in JavaScript
// Write a function to sort the given array nums in ascending order.

// Input: nums = [8,3,5,4,7,6,1,2] ----->>>>> Output: [1,2,3,4,5,6,7,8]

function quickSort(nums) {
    if(nums.length <= 1) {
        return nums;
    }

    const pivot = nums[0];
    const left = [];
    const right = [];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < pivot) {
            left.push(nums[i]);
        } else {
            right.push(nums[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Time Complexity - 
// Average case - O(nlog n)
// Best case - O(nlog n)
// Worst case - O(n^2)

// Space Complexity -
// Average Case - O(log n)
// Worst Case - O(n)

console.log(quickSort([8,3,5,4,7,6,1,2]));
console.log(quickSort([5,2,9,3,6,1,8,7]));

// DataStructuresAndAlgorithms/RoadSideCoderDSA/QuickSort/quickSort.js
