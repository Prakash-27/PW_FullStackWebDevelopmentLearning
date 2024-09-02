// Ques 6 - Subsets ( Backtracking Algorithm using Recursion )
// Given an integer array nums of unique elements, return all possible subsets (the power set).
// The solution set must not contain duplicate subsets. Return the solution in any order.

// Input: [1,2,3]  ----->>>>>  Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// Input: [0]      ----->>>>>  Output: [[],[0]]

function subsets(nums){
    let result = [];
    let temp = [];

    function recursiveSubsets(nums, i){
        if(i === nums.length){
            return result.push([...temp]);
        }

        temp.push(nums[i]);
        recursiveSubsets(nums, i + 1);
        temp.pop();
        recursiveSubsets(nums, i + 1);
    }
    recursiveSubsets(nums, 0);
    return result;
}


// BackTracking approach by using Recursion

//  0  1  3
// [1, 2, 3]

//                                               [  temp  ]    
//                                               /         \ 
//                                              /           \
//                                             /             \ 
//                                           1/               \pop
//                                           /                 \
//                                          [1]                 []
//                                       2/    \ pop         2/     \ pop
//                                       /      \            /       \
//                                     [1,2]     [1]        [2]      []
//                                    3/    \pop 3/ \pop   3/ \pop  3/\pop
//                                    /      \   /   \     /   \    /  \
//                                [1,2,3] [1,2] [1,3][1]  [2,3][2] [3] []

console.log(subsets([1,2,3])); // [[ 1, 2, 3 ], [ 1, 2 ],[ 1, 3 ],[ 1 ],[ 2, 3 ],[ 2 ],[ 3 ],[]]
console.log(subsets([1])); // [ [ 1 ], [] ]

// DataStructuresAndAlgorithms/RoadSideCoderDSA/Recursion/subsets.js
