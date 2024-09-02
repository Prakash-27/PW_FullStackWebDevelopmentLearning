// Ques 5: Implement Merge Sort in JavaScript
// write a function to sort the given array nums in ascending orders

// Input: nums = [8,3,5,4,7,6,1,2] ----->>>>> Output: [1,2,3,4,5,6,7,8]

function mergeSort(nums) { // O(log n)
    // base case 
    if(nums.length <= 1) return nums;
    let mid = Math.floor(nums.length / 2);

    let left = mergeSort(nums.slice(0, mid));
    let right = mergeSort(nums.slice(mid));

    return merge(left, right);
};

function merge(left, right) { // O(n)
    let sortedNums = [];
    while (left.length && right.length) {
        if(left[0] < right[0]) {
            sortedNums.push(left.shift());
        } else {
            sortedNums.push(right.shift());
        }
    }
    return [...sortedNums,...left,...right];
}

// Time Complexity - O(nlog n)
// Space Complexity - O(n)
console.log(mergeSort([8,3,5,4,7,6,1,2]));

// DataStructuresAndAlgorithms/RoadSideCoderDSA/MergeSort/mergeSort.js
