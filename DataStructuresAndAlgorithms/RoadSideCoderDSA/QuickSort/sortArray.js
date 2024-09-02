// 912. Sort an Array

// Given an array of integers nums, sort the array in ascending order and return it.
// You must solve the problem without using any built-in functions in O(nlog(n)) time Complexity 
// and with the smallest space complexity possible.

// Example 1: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3)
//              while the positions of other numbers are changed (for example, 1 and 5).

function sortArray(nums) {
    return quickSorts(nums);
}

function pivot(nums, start=0, end=nums.length-1) {

    function swap(array, i, j) {
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }

    let pivot = nums[start];
    let swapIndex = start;

    for (let i = start+1; i < nums.length; i++) {
        if(nums[i] < pivot) {
            swapIndex++;
            swap(nums, swapIndex, i);
        }
    }
    swap(nums, start, swapIndex);

    return swapIndex;
}

function quickSorts(nums, start=0, end=nums.length-1) {
    if(start < end) {
        const pivotIndex = pivot(nums, start, end);
        quickSorts(nums, start, pivotIndex-1);
        quickSorts(nums, pivotIndex+1, end);
    }
    return nums;
}


console.log(sortArray([5,2,3,1]));

// DataStructuresAndAlgorithms/RoadSideCoderDSA/QuickSort/sortArray.js
