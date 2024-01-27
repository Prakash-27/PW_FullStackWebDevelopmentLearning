/**
 * High level Explanation
 * - Multi Dimensional array: Array of Arrays
 * - Organizes data in rows, columns, more dimensions
 * 
 * Deep Dive 
 * - Two dimensional array: Elements are arrays
 * - Like a table with rows, columns (array elements)
 * - Higher dimensions: arrays within arrays within arrays
 * 
 * Basic Explanation
 * - Analogy: Egg cartons and multi dimensional arrays 
 * - Tray: Main array, cartons: Sub-arrays
 * - Tray + carton: Location of each egg
 * 
 * When to use?
 * - use for tabular data (spread sheet like)
 * - Represent grids, matrices, 3D spaces
 * 
 * Best Practices 
 * - Use correct indices for each dimension
 * - Track dimensions sizes to prevent errors
 * 
 * Take Note
 * - JavaScript: No true multi dimensional arrays 
 * - Use arrays of arrays as workaround
 * - Complex access, modification; can be computationally expensive.
 * 
 */

// Syntax of multi dimensional arrays/2D Arrays:
// const arrayName2D = [[], []];

//-----
//Multi-Dimensional Arrays
//-----

// Creating a 2D Arrays
const matrix = [
    [1,2,3], 
    [4,5,6], 
    [7,8,9]
];
// Access the elements
console.log(matrix);
console.log(matrix[0]);
console.log(matrix[0][0]);
console.log(matrix[2][2]);

// Creating a 3D Arrays
const matrix3D = [
    [
       [1,2], [3,4]], 
       [[5,6], [7,8]
    ]
];

console.log(matrix3D);
console.log(matrix3D[0][1]);
console.log(matrix3D[0][1][1]);
console.log(matrix3D[1][0][0]);







