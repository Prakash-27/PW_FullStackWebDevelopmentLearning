let array = [2, 3, 4]

array.forEach(function(element, index, arr){
    console.log(index, element, arr); 
})

array.forEach((element, index, arr) => {
    console.log("arrow ",index, element, arr); 
})

const heros = ["naagraj", "doga", "dhruva", "maniraj"]

heros.forEach((el) => console.log(el.toUpperCase()));
heros.map((el) => console.log(el.toUpperCase()));

console.log(heros);
const herosEndWithRaj = heros.filter((h) => {
    return h.endsWith('raj')
})
console.log(herosEndWithRaj);

// we can able to do that in normal iteration method
const result = heros.forEach(function(element, index){
    
});
console.log("normal iteration method: ",result);

// cart examples
const cartBill = [20, 30, 50]
const sumOfCartBill = cartBill.reduce((prev, curr) => prev + curr, 0)
console.log(sumOfCartBill);

//check if all values are numbers
const gameScore = [200, 310, 300, 100, 250, 150]
// const gameScore = [200, 300, 310, 100, 250, 150, true]

console.log(typeof gameScore[0]);
const gameScoreCheck = gameScore.every((v) => typeof v === "number")
console.log("check: ", gameScoreCheck);

//check if any score is above 200
const above200 = gameScore.find((score) => score > 200)
console.log("above: ", above200);

// findIndex
// some
// sort