const numbers = [5, 20, 80, 75, 15, 30];

const findNumbers = numbers.find((num) => {
    return num > 70;
    // return num === 15;
    // return num === 50; //undefined
});

console.log(findNumbers);