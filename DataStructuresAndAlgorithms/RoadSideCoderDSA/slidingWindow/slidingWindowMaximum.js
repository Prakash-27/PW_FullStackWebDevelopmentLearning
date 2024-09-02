// Ques 4: Sliding Window Maximum
// You are given an array of integers nums, there is a sliding window of size k which is 
// moving from the very left of the array to the very right. you can only see the k numbers
// in the window. Each time the sliding window moves right by one position.

// Input: nums = [1, 3, -1, -3, 5, 3, 6, 7], k = 3
// Output: [3, 3, 5, 5, 6, 7]

// Brute Force Approach
const maxSlidingWindowNaive = function(nums, k) {
    const result = [];
    const n = nums.length;

    for(let i = 0; i <= n - k; i++) {
        let max = nums[i];
        for (let j = 1; j < k; j++) {
            if(nums[i + j] > max) {
                max = nums[i + j];
            }
        }
        result.push(max);
    }
    return result;
};

// Time Complexity - O(n*k) => O(n^2)
// Space Complexity - O(n) 
console.log(maxSlidingWindowNaive([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [3, 3, 5, 5, 6, 7]


const optimizedMaxSlidingWindowNaive = function(nums, k) {
    let result = [];
    let deque = []; // deque can add value from left side and remove it from right side of the Array, same as add value from right side and remove it from left side of the Array 

    for(let i = 0; i < nums.length; i++) {
        if(deque.length > 0 && deque[0] <= i - k) {
            deque.shift();
        }

        while(deque.length > 0 && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }

        deque.push(i);

        if(i >= k - 1) {
            result.push(nums[deque[0]]);
        }
    }
    return result;
};

// Time Complexity - O(n)
// Space Complexity - O(n+k) => O(n)

console.log(optimizedMaxSlidingWindowNaive([1, 3, -1, -3, 5, 3, 6, 7], 3)); // [3, 3, 5, 5, 6, 7]


// DataStructuresAndAlgorithms/RoadSideCoderDSA/slidingWindow/slidingWindowMaximum.js