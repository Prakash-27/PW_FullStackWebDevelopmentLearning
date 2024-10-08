// Ques 3 - valid Anagram
// An Anagram is a word or phrase formed by rearranging the letters of
// a different word or phrase, using all the original letters exactly once.

// Input: (s = "anagram"), (t = "nagaram"); ----->>>>> Output: true;
// Input: (s = "rat"), (t = "car"); ----->>>>> Output: false;

// 1st Approach:
const isAnagram = function(s, t){
    s = s.split("").sort().join("");
    t = t.split("").sort().join("");

    return s === t;
}

// anagram => ["a","n","a","g","r","a","m"] => ["a","a","a","g","m","n","r"] => "aaagmnr"
// nagaram => ["n","a","g","a","r","a","m"] => ["a","a","a","g","m","n","r"] => "aaagmnr"

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("more", "rome")); // true

//---------------------------------------------- Alternate Solution in Objects----------------------------------------------------------

const isAnagramUsingObject = function(s, t) {
    if(s.length !== t.length) return false;

    let obj1 = {};
    let obj2 = {};

    for(let i = 0; i < s.length; i++){
        obj1[s[i]] = (obj1[s[i]] || 0) + 1;
        obj2[t[i]] = (obj2[t[i]] || 0) + 1;
    }

    for(const key in obj1){
        if(obj1[key] !== obj2[key]) return false;
    }

    return true;
}

// rat / tar

// Obj1
// {
//     r: 1,
//     a: 1,
//     t: 1,
// }

// Obj2
// {
//     t: 1,
//     a: 1,
//     r: 1,
// }

console.log(isAnagramUsingObject("anagram", "nagaram")); // true

// DataStructuresAndAlgorithms/RoadSideCoderDSA/Strings/validAnagram.js