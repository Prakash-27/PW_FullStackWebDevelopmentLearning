function Piyush() {
    return Rehana();
}
  
function Rehana() {
  return Vadant();
}

function Vadant() {
  return Chirag();
}

function Chirag() {
  return Ajay();
}

function Ajay() {
  // base case
  return true;
}

console.log(Piyush());

//----------------------------------------------------------------------------------------------------------------- 

function goToLunch(person) {
  if (person === 5) return true;
  console.log(person);
  return goToLunch(person + 1);
}

console.log("outcome:", goToLunch(1));

//-----------------------------------------------------------------------------------------------------------------

// Loops vs Recursion

function multiply(arr) {
  let product = 1;
  for (let i = 0; i < arr.length; i++) {
    product *= arr[i];
  }
  return product;
}

console.log(multiply([1, 2, 3, 4])); // 24

//-----------------------------------------------------------------------------------------------------------------

function multiplyRecursive(arr) {
  console.log(arr);
  if (arr.length <= 0) {
    return 1;
  } else return arr[arr.length - 1] * multiplyRecursive(arr.slice(0, arr.length - 1));
}

console.log(multiplyRecursive([1, 2, 3, 4])); // 24

// index  0  1  2  3
//       [1, 2, 3, 4]

/**
   function multiplyRecursive([1, 2, 3, 4]) {
     console.log([1, 2, 3, 4]); length = 4
     if (4 <= 0) {
       return 1; // false
     } else return arr[3] * multiplyRecursive(arr.slice(0, 3));
   }
**/
/**
   function multiplyRecursive([1, 2, 3, 4]) {
     console.log([1, 2, 3, 4]); length = 4
     if (4 <= 0) {
       false
     } else return 4 * multiplyRecursive([1, 2, 3]);
   }
**/
/**
   function multiplyRecursive([1, 2, 3]) {
     console.log([1, 2, 3]); length = 3
     if (3 <= 0) {
       return 1; // false
     } else return arr[2] * multiplyRecursive(arr.slice(0, 2));
   }
**/
/**
   function multiplyRecursive([1, 2, 3]) {
     console.log([1, 2, 3]); length = 3
     if (3 <= 0) {
       false
     } else return 4 * 3 * multiplyRecursive([1, 2]);
   }
**/
/**
   function multiplyRecursive([1, 2]) {
     console.log([1, 2]); length = 2
     if (2 <= 0) {
       return 1; // false
     } else return arr[1] * multiplyRecursive(arr.slice(0, 1));
   }
**/
/**
   function multiplyRecursive([1, 2]) {
     console.log([1, 2]); length = 2
     if (2 <= 0) {
       false
     } else return 4 * 3 * 2 * multiplyRecursive([1]);
   }
**/
/**
   function multiplyRecursive([1]) {
     console.log([1]); length = 1
     if (1 <= 0) {
       return 1; // false
     } else return arr[0] * multiplyRecursive(arr.slice(0, 0));
   }
**/
/**
   function multiplyRecursive([1]) {
     console.log([1]); length = 1
     if (1 <= 0) {
       false
     } else return 4 * 3 * 2 * 1 * multiplyRecursive([]);
   }
**/
/**
   function multiplyRecursive([]) {
     console.log([]); length = 0
     if (0 <= 0) {
       return 1; // true
     }
   }
**/
/**
   function multiplyRecursive([]) {
     console.log([]); length = 0
     if (0 <= 0) {
       return 1; // true
     } else return 4 * 3 * 2 * 1 => 24
   }
**/

// DataStructuresAndAlgorithms/RoadSideCoderDSA/Recursion/recursion-basics.js
