// Logical Operators

var num1 = 10;
var num2 = 20;
var num3 = 10;

// 1. Logical AND
var result = num1 >= num3 && num1 == num3; // true
var result = num1 >= num2 && num1 == num3; // false

// 2. Logical OR 
var result = num1 >= num3 || num1 == num3; // true
var result = num1 >= num2 || num1 == num3; // true
var result = num1 >= num2 || num1 > num3; // false

// 3. Logical NOT 
var result = num1 == num3; // true
var result = !(num1 == num3); // false