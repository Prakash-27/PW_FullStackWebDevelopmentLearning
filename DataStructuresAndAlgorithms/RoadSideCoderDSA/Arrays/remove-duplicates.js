// Ques 3 - Remove Duplicates from Sorted Array
// Given an integer array nums sorted in non-decreasing order, remove
// the duplicates in-place such that each unique element appears
// only once.The relative order of the elements should be kept
// the same.Then return the number of unique elements in nums.

// Input: [1,1,2]               ----->>>>>  Output: 2, [1,2,_]
// Input: [0,0,1,1,1,2,2,3,3,4] ----->>>>>  Output: 5, [0,1,2,3,4,_,_,_,_,_]

// With JS Methods

//  0  1  2
// [1, 1, 2]

// i = 0, nums.length - 1 = 2
/** 
 * for(let i = 0; 0 < 2; i++) { 
        if (nums[0] === nums[0 + 1]) {
            nums.splice(0 + 1, 1); // O(1)
            0--;
        }
    }
 * **/
/** 
 * for(let i = 0; 0 < 2; i++) { 
        if (1 === 1) {
            nums.splice(1, 1); // [1, 2]
            0--; // i = -1
        }
    }
 * **/   
// i = 0, nums.length - 1 = 1, nums = [1, 2]

/** 
 * for(let i = 0; 0 < 1; i++) { 
        if (1 === 2) {
            false
        }
    }
    return 2;    

 * **/ 


function removeDuplicates(nums){
    for(let i = 0; i < nums.length - 1; i++) { // O(n)
        if (nums[i] === nums[i + 1]) {
            nums.splice(i + 1, 1); // O(1)
            i--;
        }
    }

    return { 
        num: nums.length, 
        nums: nums
    };
}
// Time Complexity - O(n)
// Space Complexity - O(1)

console.log(removeDuplicates([1, 1, 2])); // 2
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4])); // 5

//--------------------------------------------------------------------------------------------------------------- 

// Without JS Methods - Two pointer Approach

//  0  1  2
// [1, 1, 2]

// i = 0; j = 1
// if(num[0] !== nums[1]){
//   i++;
//   nums[0] = nums[1];
//}

// if(1 !== 1){
//   false
//}

// i = 0, j = 2
// if(num[0] !== nums[2]){
//   i++;
//   nums[0] = nums[2];
//}

// if(1 !== 2){
//   i++; => i = 1
//   nums[1] = nums[2];
//}

// [1, 2, 2]

// i = 1, j = 3

// return i + 1;
// return 1 + 1 => 2;

function removeDuplicatesUsingTwoPointer(nums){
    if (nums.length === 0) return 0;
    
    let i = 0;

    for(let j = 1; j < nums.length; j++){
        if (nums[i] !== nums[j]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return {
       num: i + 1,
       nums: nums
    };
}

// Time Complexity - O(n)
// Space Complexity - O(1) (we are not creating any new array, we are just returing a num and nums value) 

console.log(removeDuplicatesUsingTwoPointer([1, 1, 2])); // 2
console.log(removeDuplicatesUsingTwoPointer([0,0,1,1,1,2,2,3,3,4])); // 5

// DataStructuresAndAlgorithms/RoadSideCoderDSA/Arrays/remove-duplicates.js