// Ques 3 : Given an integer x, return true if x is a palindrome, and false otherwise.
// Input: x = 121      ----->>>>>      Output: true;

function isPalindrome(str) {
    // str = str.replace(/[^a-z0-9]/i, "").toLowerCase();
    str = str.toString().split("").join(""); // converting number to String
    const len = str.length;
  
    if (len <= 1) return true;
    if (str[0] !== str[len - 1]) return false;
    return isPalindrome(str.slice(1, -1));
}
  
console.log(isPalindrome(121)); // true


// console.log("121".slice(1, -1)); // 2

// console.log("sub".replace("b", "s")); // sus

// console.log("121".replace(/[^a-z0-9]/i, "")); // it won't accept Integer and Alphabet value by staring of the value


// DataStructuresAndAlgorithms/RoadSideCoderDSA/Recursion/palindrome.js 