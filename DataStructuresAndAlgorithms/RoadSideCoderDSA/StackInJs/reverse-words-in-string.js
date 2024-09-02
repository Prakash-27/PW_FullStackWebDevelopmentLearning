// Ques 1 : Given an input string s, reverse the order of the words

// Input: "the sky is blue"     ----->>>>>     Output: "blue is sky the"
// Input: "  hello world  "     ----->>>>>     Output: "world hello"
// Input: "a good   example"    ----->>>>>     Output: "example good a"

// "the sky is blue".split(" ") => [the,sky,is,blue] => iterate using for off to push to stack
// stack = [] => [the,sky,is,blue] => blue is sky the

function reverseWords(string) {
    const splitS = string.split(" ");
    const stack = [];

    for(const key of splitS) { // O(n)
        stack.push(key);
    }

    let finalS = "";

    while(stack.length) { // O(n)
        const current = stack.pop();

        if(current) {
            finalS = finalS + " " + current;
        }
    }
    return finalS.trim();
}


console.log(reverseWords("the sky is blue"));
console.log(reverseWords("a good   example"));

// TimeComplexity - O(2n) => O(n)
// SpaceComplexity - O(2n) => O(n)

// DataStructuresAndAlgorithms/RoadSideCoderDSA/StackInJs/reverse-words-in-string.js