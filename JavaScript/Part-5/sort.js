// Sort is a destructive method means, the Original array of sort can be changed.

// const numbers = [5, 3, 2, 7, 9, 1]; //the order is arrange correct sequence
// const numbers = [5, 30, 2, 7, 9, 1000]; //the order is not arrange in correct sequence
// numbers.sort();
// console.log(numbers);

// const names = ["Shubham", "John", "deepak", "alex"]; //the order is not arrange in correct sequence
// names.sort();
// console.log(names);

const numbers = [5, 10, 7, 2, 9, 30];
numbers.sort((a, b) => {
    return a-b; // will arrange in asecending order manner.
    // return b-a; // will arrange in descending Order manner.
    // return a-b; // some time a and b  => 10-10 = 0 value are same so it will return 0
});
console.log(numbers);

const movies = [
    {name: "Bug Finder", rating: 10},
    {name: "Lost Coder", rating: 7},
    {name: "Dev At Night", rating: 9},
    {name: "Speed-Quality", rating: 8},
];

movies.sort((a, b) => {
//   return a.rating - b.rating; // arrange in ascending order.
  return b.rating - a.rating; // arrange in descending order.

});
console.log(movies);
