// Ques 5 - Reverse a String
// Input: "hello" ----->>>>> Output: "olleh"
// Reverse a string without using any inbuilt Function:

function reverseString(str){
    return reverseRecursive(str, str.length - 1)
}

function reverseRecursive(str, size){
    if (size === 0) {
        return str[0];
    } else {
        return str[size] + reverseRecursive(str, size - 1);
    }    
}

// bottom up approach                         
//                                            01234
// reverseRecursive(str, str.length - 1) // ("hello", 4)
//                                                /\
// reverseRecursive("hello", 4) | => "olleh"       |
// reverseRecursive("hello", 3) | => "lleh"        |
// reverseRecursive("hello", 2) | => "leh"         |
// reverseRecursive("hello", 1) | => "eh"          |
// reverseRecursive("hello", 0) | => "h"           |
//                              \/                 |

console.log(reverseString("hello"));

//---------------------------------------------------------------------------------------------------------------- 

//        01234
// str = "hello"
// str.substr(1) = ello
// str.charAt(0) = h
// ello + h => elloh

function reverseStringNew(str){
    if(str === ""){
        return "";
    } else return reverseStringNew(str.substr(1)) + str.charAt(0);
}

// reverseStringNew("hello") => reverseStringNew("ello") + h
// reverseStringNew("ello") => reverseStringNew("llo") + e
// reverseStringNew("llo") => reverseStringNew("lo") + l
// reverseStringNew("lo") => reverseStringNew("o") + l
// reverseStringNew("o") => reverseStringNew("") + o
// reverseStringNew("") => ""

// bottom up approach
// reverseStringNew("hello") => olle + h => olleh
// reverseStringNew("ello") => oll + e => olle
// reverseStringNew("llo") => ol + l => oll
// reverseStringNew("lo") => o + l => ol
// reverseStringNew("o") => "" + o => o
// reverseStringNew("") => ""

console.log(reverseStringNew("hello"));


// DataStructuresAndAlgorithms/RoadSideCoderDSA/Recursion/reverseString.js

