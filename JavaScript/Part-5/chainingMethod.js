const numbers = [70, 50, 90, 80, 25, 35];

// Normal type Method 
const filterNumbers = numbers.filter(num => num > 75);
const mapNumbers = filterNumbers.map(num => num + 5);
console.log(mapNumbers); // [ 95, 85 ]


// Chaining Method type
// const result = numbers.filter(num => num > 75).map(num => num + 5);
// console.log(result); // [ 95, 85 ]

const result = numbers
                .reverse()
                .filter(num => num > 75)
                .map(num => num + 5);
console.log(result); // [ 85, 95 ]