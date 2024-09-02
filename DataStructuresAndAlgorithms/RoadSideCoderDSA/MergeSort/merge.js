// 56. Merge Intervals

// Given an array of intervals where intervals[i] = [start, end], 
// merge all overlapping intervals, and return an array of the non-overlapping 
// intervals that cover all the intervals in the input.

// Example 1:
//  Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
//  Output: [[1,6],[8,10],[15,18]]
//  Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].


function merge(intervals) {
    const startIndex = 0;
    const endIndex = 1;

    // intervals.sort((a,b) => a[startIndex] - b[startIndex]);
    intervals = mergeSort(intervals);

    const mergedIntervals = [];
    let mergeStart = intervals[0][startIndex];
    let mergeEnd = intervals[0][endIndex];

    for(let i = 1; i < intervals.length; i++) {
        const subsequentInterval = intervals[i];

        if(subsequentInterval[startIndex] <= mergeEnd) {
            mergeEnd = Math.max(mergeEnd, subsequentInterval[endIndex]);
        } else {
            mergedIntervals.push([mergeStart, mergeEnd]);
            mergeStart = subsequentInterval[startIndex];
            mergeEnd = subsequentInterval[endIndex];
        }
    }

    mergedIntervals.push([mergeStart, mergeEnd]);
    return mergedIntervals;
}


function mergeSort(nums) { 
    // base case 
    if(nums.length <= 1) return nums;
    let mid = Math.floor(nums.length / 2);

    let left = mergeSort(nums.slice(0, mid));
    let right = mergeSort(nums.slice(mid));

    return mergeArray(left, right);
};

function mergeArray(left, right) { 
    let sortedNums = [];
    while (left.length && right.length) {
        if(left[0][0] < right[0][0]) {
            sortedNums.push(left.shift());
        } else {
            sortedNums.push(right.shift());
        }
    }
    return [...sortedNums,...left,...right];
}


console.log(merge([[1,3],[2,6],[8,10],[15,18]]));

// DataStructuresAndAlgorithms/RoadSideCoderDSA/MergeSort/merge.js
