// Ques 2 - Rotate Array by K
// Given an integer array nums, rotate the array to the right by k steps,
// where k is non - negative.

// Input: nums = [1,2,3,4,5,6,7], k = 3  ----->>>>>  Output: [5,6,7,1,2,3,4]
// Input: nums = [-1,-100,3,99], k = 2   ----->>>>>  Output: [3,99,-1,-100]

// k = 1 => [7,1,2,3,4,5,6], k = 2 => [6,7,1,2,3,4,5], k = 3 => [5,6,7,1,2,3,4]

// Brute Force Approach
function rotateArray(nums, k){
    // K is not more than nums.length because if k = 8, nums.length = 7, then it will once again start to rotate at k = 1 for nums [7,1,2,3,4,5,6].
    let size = nums.length
    if(k > size){
        k = k % size; // 8 % 7 => 1, 9 % 7 => 2, 10 % 7 => 3 
    }

    const rotated = nums.splice(size - k, size); // nums.splice(8 - 3, 8) => nums.splice(5, 3) => [5,6,7] removed array, rotated variable returns it.
    // console.log(nums); // nums = [1,2,3,4]
    nums.unshift(...rotated); // unshift is used to push array on front side, so rotated array pushed to front side of nums.

    return nums; 
}
// splice - O(n), unshift - O(n)
// TimeComplexity - O(n) + O(n) = O(n).

console.log(rotateArray([1,2,3,4,5,6,7], 3)); // [5,6,7,1,2,3,4]
console.log(rotateArray([-1,-100,3,99], 2)); // [3, 99, -1, -100]

//------------------------------------------------------------------------------------------------------------------------------------------------------------------ 

function rotateArrayOptimised(nums, k){
    let size = nums.length;

    if(k > size){
        k = k % size; 
    }

    reverse(nums, 0, size - 1); // [1,2,3,4,5,6,7] => [7,6,5,4,3,2,1]
    // k = 3, k = 0,1,2,3, k - 1 = 0,1,2    0 1 2              0 1 2
    reverse(nums, 0, k - 1); //            [7,6,5,4,3,2,1] => [5,6,7,4,3,2,1]
    // k = 3, size - 1 = 6                3 4 5 6            3 4 5 6
    reverse(nums, k, size - 1); // [5,6,7,4,3,2,1] => [5,6,7,1,2,3,4]

    return nums;
}

// reverse(nums, 0, size - 1) = O(n), reverse(nums, 0, k - 1) = O(k), reverse(nums, k, size - 1) = O(n-k);
// Time Complexity -> O(n)
// Space Complexity -> O(1) (we are not creating any new array, we are just rotating the nums arrays and returning that rotated array.)

// reverse(nums, left, right) iteration:
//--------------------------------------
// top[1, 2, 3, 4]end
//     0  1  2  3
// left = 0
// right = nums.length - 1 => 4 - 3 ;
// right = 3;

// 1st iteration:
//--------------- 
// while(0 < 3){
//   const temp = nums[0]
//   nums[0] = nums[3];
//   nums[3] = temp;
//
//   0++;
//   3--;
// }

// while(0 < 3){
//   const temp = 1
//   nums[0] = 4;
//   nums[3] = 1;
//
//   0++;
//   3--;
// } 

// 1st iteration Answer: [4, 2, 3, 1]

// 2nd iteration: 
//---------------
// left = 1;
// right = 2;

// while(1 < 2){
//   const temp = nums[1]
//   nums[1] = nums[2];
//   nums[2] = temp;
//
//   1++;
//   2--;
// }

// [4, 2, 3, 1]

// while(1 < 2){
//   const temp = 2
//   nums[1] = 3;
//   nums[2] = 2;
//
//   1++;
//   2--;
// }

// 2nd iteration Answer: [4, 3, 2, 1]

// left = 2;
// right = 1;

function reverse(nums, left, right){
    while(left < right){
        const temp = nums[left];
        nums[left] = nums[right];
        nums[right] = temp;

        left++;
        right--;
    }
}

console.log(rotateArrayOptimised([1,2,3,4,5,6,7], 3)); // [5,6,7,1,2,3,4]
console.log(rotateArrayOptimised([-1,-100,3,99], 2)); // [3, 99, -1, -100]

// DataStructuresAndAlgorithms/RoadSideCoderDSA/Arrays/rotate-arrays-by-k.js

