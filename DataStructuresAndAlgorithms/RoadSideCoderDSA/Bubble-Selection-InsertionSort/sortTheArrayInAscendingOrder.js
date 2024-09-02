// Given an array of integers nums. sort the array in ascending order and return it.
// You must solve the problem without using any built-in functions in O(nlog(n)) 
//time complexity and with the smallest space complexity possible.

//Example 1:
// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some
// numbers are not changed (for example, 2 and 3), while the 
// positions of other numbers are changed (for example, 1 and 5).

//Example 2: 
// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
// Explanation: Note that the values of nums are not necessairly unique.

// we are using the selection sort solution for this problem, we can learn how to solve the problems in O(nlog(n)) in Merge sort and Quick sort.

function sortArray(nums) {
    const n = nums.length;
    for(let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for(let j = i + 1; j < n; j++) {
            if(nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }
        if(minIndex !== i) {
            [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
        }
    }
    return nums;
}

console.log(sortArray([5,2,3,1])); // [ 1, 2, 3, 5 ]
console.log(sortArray([5,1,1,2,0,0])); //[ 0, 0, 1, 1, 2, 5 ]

// DataStructuresAndAlgorithms/RoadSideCoderDSA/Bubble-Selection-InsertionSort/sortTheArrayInAscendingOrder.js