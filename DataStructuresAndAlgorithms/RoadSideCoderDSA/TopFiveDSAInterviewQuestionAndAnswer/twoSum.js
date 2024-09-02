// Ques 4 - Two Sum
// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// Input: nums = [2,7,11,15], target = 9
// Output: [0, 1] (Because nums[0] + nums[1] == 9, we return [0, 1])
// Input: nums = [3, 2, 4], target = 6
// Output: [1, 2]

// Brute Force Solution
const twoSum = function(nums, target){
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target) return [i, j];
        }
    }
};

console.log(twoSum([2,7,11,15], 9)); // [0, 1]

//Index: 0  1  2   3   => 0 1  0 2   0 3   1 2   1 3   2  3
//      [2, 7, 11, 15] => 2+7, 2+11, 2+15, 7+11, 7+15, 11+15 
//                     =>  9    13    17    18    22     26

//----------------------------------------------------Using Js Objects-----------------------------------------------------------------

const twoSumUsingObjects = function(nums, target){
    let obj = {};

    for (let i = 0; i < nums.length; i++) {
        let n = nums[i];

        if(obj[target - n] >= 0){
            return [obj[target - n], i];
        } else {
            obj[n] = i;
        }       
    }
}

console.log(twoSumUsingObjects([2,7,11,15], 26));

// nums = [2,7,11,15], target = 26

// {
//   "2": 0, // 26 - 2 = 24 
//   "7": 1, // 26 - 7 = 19
//   "11": 2, // 26 - 11 = 15
//   "15": 3, // 26 - 15 = 11 => [obj[11], obj[15]] => [2, 3]
// }

// DataStructuresAndAlgorithms/RoadSideCoderDSA/TopFiveDSAInterviewQuestionAndAnswer/twoSum.js