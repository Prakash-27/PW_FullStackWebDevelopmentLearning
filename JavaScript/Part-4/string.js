// In JavaScript, the string is an object with a sequence of characters enclosed in single or double quotes used to 
// represent and manipulate text, and it is one of the most commonly used datatypes in Javascript.

// let hello = "hello world";

/**
 ********* String immutability ********* 
 */

// Strings are immutable, which means that once a string is created, it cannot be changed. This immutability 
// applies to individual characters within the string as well as the string as a whole. When you perform string 
// operations or use non-string methods on a string, a new string is created rather than modifying the original 
// string. 

// eg1:

// let firstName = "Mang";
// let fullName = firstName.concat("Touthang"); //Returns a new string "Mang Touthang"
// console.log(fullName); //output - Mang Touthang (new string)
// console.log(firstName); //output: "Mang" (original string is unchanged)

// eg2:

// From the above example 2, the str with a value “Hello” is an attempt to be changed by assigning the value “b” 
// to str[0], However when consoling the str variable, the same output original string is given i.e “Hello”. Since 
// JavaScript string is immutable

// test for string immutability
// let str = "Hello";
// console.log((str[0] = "b")); // try to change no change
// console.log(str); // output - Hello

// String Properties - it includes length, which returns the number of characters present in the string.js

// console.log("hello".length); // 5

// String method: 
// It includes charAt(), at() concat(), endsWith(), includes(), indexOf(), padEnd(), padStart(), 
// repeat(), replace(), replaceAll(), search(), slice(), split(), startswith(), subString, toLowerCase(), toUpperCase(), 
// trim(), trimEnd(), trimStart()

// at() - it takes an integer value and returns a new string, it allows positive and negative integers. Negative 
// integers count back from the last string character.

// console.log("hello".at(0)); // h
// console.log("hello".at(1)); // e
// console.log("hello".at(-1)); // o

// charAt() - it takes an integer value and returns the string located with the corresponding integer located in it.
// console.log("chartAt".charAt(3)); // r

// concat() - this method concatenates (join)  string
// console.log("hello ".concat("world")); 
// console.log("hello" + " " + "world");

// endsWith() - This method determines whether the string ends with the characters of a specified string. 
// Returning true or false.
// console.log("endswith".endsWith("with")); // true
// console.log("endswith".endsWith("end")); // false

// includes() - this method performs a case-sensitive search and determines whether one string may be found 
// within another string.
// console.log("includes".includes("c")); //true
// console.log("includes".includes("o")); // false

// indexOf() - this method searches for a string and returns its index position of the forest occurrence of the 
// specified string. It return -1 if the char is not available.
// console.log("indexOf".indexOf("O")); // 5
// console.log("indexOf".indexOf("m")); // -1

// padEnd() - this method pads the current string with a given string. So that the resulting string reaches a given 
// length. The padding starts at the end.
// Syntax - String.padEnd(targetlength, padString) 
// console.log("padEnd".padEnd(10, "!")); // padEnd!!!!

// padStart() - pads the current string with another string until the resulting string reaches the given length. The 
// padding is applied from the start of the current string.
// Syntax - String.padStart(targetLenght, padString)
// console.log("4514".padStart(10, "*")); // ******4514

// repeat() - method constructs and returns a new string which contains the specified number of copies of the 
// string on which it was called.
// Syntax - String.repeat(numberOfTimes)
// console.log("hello".repeat(3)); // hellohellohello

// replace() - method is used to replace a specified substring with another substring.
// Syntax - String.replace(pattern, replacement)
// console.log("hello world world".replace("world", "earth")); // hello earth world

// replaceAll() - method returns a new string with all matches of a pattern replaced by a replacement. 
// Syntax - String.replace(pattern, replacement)
// console.log("hello world world".replaceAll("world", "earth")); // hello earth earth

// slice() - method extracts a section of a string and returns it as new string and returns it as a new string, without 
// modifying the original string.
// Syntax - String.slice(separator)  String.slice(separator,limit)
// console.log("Hello world!".slice(6)); // world!
// console.log("Hello world!".slice(6, 11)); // world

// split() - method takes a pattern and divides a String into an ordered list of substrings by searching for the 
// pattern, puts these substrings into an array, and returns the array.
// Syntax - String.slice(separator)  String.slice(separator,limit)
// console.log("hello,world,hello,world".split(",")); // [ 'hello', 'world', 'hello', 'world' ]

// startswith() - method determines whether a string begins with the characters of a specified string, returning 
// true or false as appropriate.
// console.log("hello".startsWith("hell")); // true

// subString - method returns the part of the string from the start index up to and excluding the end index
// Syntax - String.subString(start), String.subString(start, end)
// console.log("hello".substring(2)); // llo
// console.log("hello".substring(1, 3)); //el

// toLowerCase() -  method returns the calling string value converted to uppercase.
// console.log("Hello World".toLowerCase()); // hello world

// toUpperCase() - method returns the calling string value converted to lower case.
// console.log("Hello World".toUpperCase()); // HELLO WORLD

// trim() - method removes whitespace from both ends of a string and returns a new string, without modifying 
// the original string.
// console.log("   hello world   ".trim()); // hello world

// trimEnd() - method removes whitespace from the end of a string and returns a new string, without modifying 
// the original string.
// console.log("  Hello    ".trimEnd()); // "   Hello"
// console.log("  Hello    ".trimStart()); // "Hello"

// trimStart() - method removes whitespace from the beginning of a string and returns a new string, without 
// modifying the original string. 


