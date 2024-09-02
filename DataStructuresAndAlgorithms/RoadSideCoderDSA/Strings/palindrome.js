// Ques 1 - Palindrome Number
// An Integer is a palindrome when it reads the same forward and backward.

// Input: x = 121 ----->>>>> Output: true
// Input: x = 10  ----->>>>> Output: false

function isPalindrome(num) {
    return num < 0 ? false : num === +num.toString().split("").reverse().join("");
}

console.log(isPalindrome(121), isPalindrome(10));

// DataStructuresAndAlgorithms/RoadSideCoderDSA/Strings/palindrome.js