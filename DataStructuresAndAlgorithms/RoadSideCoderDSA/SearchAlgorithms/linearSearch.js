// Ques 1: Implement Linear Search in JavaScript / (Search in Rotated Sorted Array)
// Write a function to search "target" in nums. If target exists, then return its index.
// Otherwise, return -1, you must write an algorithm with O(n) runtime complexity.

// Input: nums = [4,5,6,7,0,1,2], target = 0 ----->>>>> Output: 4
// Input: nums = [4,5,6,7,0,1,2], target = 3 ----->>>>> Output: -1

const linearSearch = (nums, target) => {
    for (let i = 0; i < nums.length; i++) {
        if(target === nums[i]) {
            return i;
        }
    }
    return -1;
};

// Time Complexity - O(n)
// Space Complexity - O(1)
// console.log(`Index of nums is: ${linearSearch([4,5,6,7,0,1,2], 0)}, 
// Index of nums is: ${linearSearch([4,5,6,7,0,1,2], 3)}`);


const globalLinearSearch = (nums, target) => {
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        if(target === nums[i]) {
            result.push(i);
        }
    }
    if(result.length === 0) return -1;
    return result;
};
// Time Complexity - O(n)
// Space Complexity - O(n)
// console.log(`Index of nums is: ${globalLinearSearch([4,5,6,7,0,1,2], 0)}, 
// Index of nums is: ${globalLinearSearch([4,5,6,7,0,1,2], 3)}`);


const globalLinearSearchs = (nums, target) => {
    const Obj = {};
    for (let i = 0; i < nums.length; i++) {
        if(target === nums[i]) {
            Obj[nums[i]] = `Index: ${(i)}`;
            // Obj[nums[i]] = (Obj[nums[i]] || 0) + 1; // counting the array how many times 0 is occur
        } 
    }
    // for (const key in Obj) {
    //     if (Object.keys(Obj).length === 0) return -1;
    // }
    return Obj;
};

console.log(globalLinearSearchs([4,5,6,7,0,1,2], 0));
console.log(globalLinearSearchs([4,5,6,7,0,1,2], 3));


// DataStructuresAndAlgorithms/RoadSideCoderDSA/SearchAlgorithms/linearSearch.js
