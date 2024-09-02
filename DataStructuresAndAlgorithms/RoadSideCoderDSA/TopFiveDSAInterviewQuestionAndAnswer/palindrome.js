// Ques 1 - Palindrome Number  
// An integer is a palindrome when it reads the same forward and backward.

// Input: x = 121 ----->>>>> Output: true
// Input: x = 10  ----->>>>> Output: false

const isPalindrome = function(x) {
    return x < 0 ? false : x === +x.toString().split("").reverse().join("");
};

const res = isPalindrome(121); // true
const res1 = isPalindrome(10); // false
console.log(res, res1);

// 121 => "121" =======> ["1", "2", "1"] => ["1", "2", "1"] => "121"   ===> 121
//  x     x.toString()   split("")          reverse()          join("")     +x.toString().split("").reverse().join("")  

// DataStructuresAndAlgorithms ==> RoadSideCoderDSA ==> TopFiveDSAInterviewQuestionAndAnswer
// DataStructuresAndAlgorithms\RoadSideCoderDSA\TopFiveDSAInterviewQuestionAndAnswer\palindrome.js