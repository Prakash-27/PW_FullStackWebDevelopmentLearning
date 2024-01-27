// Comparison (Relational) Operators

var num1 = 10;
var num2 = 20;
var num3 = 10;

var str1 = "10";
var str2 = "20";

// 1. Equal to
var result = num1 == num2; // false
var result = num1 == num3; // true

// 2. Strict Equal (it will check the data type of the variables strictly 2 === "2")
var result = num1 === num3; // true
var result = num1 === str1; // false

// 3. Not equal
var result = num1 != num2; // true
var result = num1 != num3; // false

// 4. Strict Not Equal
var result = num1 !== num3; // false
var result = num1 !== str1; // true

// 5. Greater than 
var result = num1 > num3; // false
var result = num2 > num3; // true

// 6. Greater than or Equal to 
var result = num1 >= num3; // true
var result = num2 >= num3; // true

// 7. Lesser than
var result = num1 < num3; // false
var result = num2 < num3; // false

// 8. Lesser than or Equal to 
var result = num1 <= num3; // true
var result = num2 <= num3; // false

