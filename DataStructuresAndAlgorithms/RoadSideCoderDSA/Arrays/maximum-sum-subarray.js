// Ques 4 - Given an integer array nums, find the subarray with the largest sum,
// and return its sum.

// Input: [-2,1,-3,4,-1,2,1,-5,4]     ----->>>>>    Output: 6,   [4,-1,2,1]
// Input: [5,4,-1,7,8]                ----->>>>>    Output: 23,  [5,4,-1,7,8]

// Brute Force Approach
function maxSubArray(nums) {
    let maxSum = nums[0];
    let startIdx = 0;
    let endIdx = 0;
  
    for (let i = 0; i < nums.length; i++) {
      let currentSum = 0;
      for (let j = i; j < nums.length; j++) {
        currentSum = currentSum + nums[j];
        if (currentSum > maxSum) {
          maxSum = currentSum;
          startIdx = i;
          endIdx = j;
        }
      }
    }
  
    return {
      sum: maxSum,
      subArray: nums.slice(startIdx, endIdx + 1),
    };
  }

// Time Complexity - O(n^2)
// Space Complexity - O(1)

console.log(maxSubArray([5,4,-1,7,8])); // { sum: 23, subArray: [ 5, 4, -1, 7, 8 ] }
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // { sum: 6, subArray: [ 4, -1, 2, 1 ] }

//------------------------------------------------------------------------------------------------------------------------

// Kadane's Algorithm

// idx  0 1  2 3 4 
//     [5,4,-1,7,8]

// max = 5, sum = 0 , i = 0, nums.length = 5
// 0 < 5
// sum = 0 + 5 => 5; 
// sum = 5
// if(5 > 5) {
//   false
// }
// if(5 < 0){
//   false
// }

// max = 5, sum = 5 , i = 1, nums.length = 5
// 1 < 5
// sum = 5 + 4 => 9; 
// sum = 9
// if(9 > 5) {
//   max = 9
// }
// if(9 < 0){
//   false
// }

// max = 9, sum = 9 , i = 2, nums.length = 5
// 2 < 5
// sum = 9 + (-1) => 8; 
// sum = 8
// if(8 > 9) {
//   false
// }
// if(8 < 0){
//   false
// }

// max = 9, sum = 8 , i = 3, nums.length = 5
// 3 < 5
// sum = 8 + 7 => 15; 
// sum = 15
// if(15 > 9) {
//   max = 15
// }
// if(15 < 0){
//   false
// }

// max = 15, sum = 15 , i = 4, nums.length = 5
// 4 < 5
// sum = 15 + 8 => 23; 
// sum = 23
// if(23 > 15) {
//   max = 23
// }
// if(23 < 0){
//   false
// }

// max = 23, sum = 23 , i = 5, nums.length = 5
// 5 < 5 false
// sum = 15 + 8 => 23; 
// sum = 23
// if(23 > 15) {
//   max = 23
// }
// if(23 < 0){
//   false
// }
// return max; // 23

function maxSubArrayUsingKadanesAlgorithm(nums){
  let max = nums[0];
  let sum = 0;

  for(let i = 0; i < nums.length; i++){
    sum = sum + nums[i];
    if (sum > max) {
      max = sum;
    }
    if(sum < 0){
      sum = 0;
    }
  }
  return max;
}
// Time Complexity - O(n)
// Space Complexity - O(1) (we are not creating any new array, we are just returing a max value)

console.log(maxSubArrayUsingKadanesAlgorithm([5,4,-1,7,8])); // 23
console.log(maxSubArrayUsingKadanesAlgorithm([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6

// DataStructuresAndAlgorithms/RoadSideCoderDSA/Arrays/maximum-sum-subarray.js