// Ques 5 - Best Time to Buy and Sell Stocks
//1.You are given an array prices where prices[i] is the price of a given stock on the ith day.
//2.You want to maximize your profit by choosing a single day to buy one stock 
//  and choosing a different day in the future to sell that stock.
//3.Return the maximum profit, If you cannot achieve any profit, return 0. 

// Input: prices = [7, 1, 5, 3, 6, 4]; ----->>>>> Output: 5;
// Input: prices = [7, 6, 4, 3, 1];    ----->>>>> Output: 0;

// Brute Force Solution
function maxProfit(prices){
    let globalProfit = 0;

    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            const currentProfit = prices[j] - prices[i];

            if(currentProfit > globalProfit) globalProfit = currentProfit; 
        }
    }
    return globalProfit;
}

// console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
// console.log(maxProfit([7, 6, 4, 3, 1])); // 0

//--------------------------------------------------Solution Using Greedy Algorithm---------------------------------------------------

function maxProfitUsingGreedyAlgorithm(prices){
    let minStockPurchasePrice = prices[0] || 0;
    let profit = 0;

    for(let i = 1; i < prices.length; i++){
        if(prices[i] < minStockPurchasePrice){
            minStockPurchasePrice = prices[i];
        }

        let currentProfit = prices[i] - minStockPurchasePrice;
        profit = Math.max(profit, currentProfit);
        console.log(i, profit);
    }

    return profit;
};

console.log(maxProfitUsingGreedyAlgorithm([7, 1, 5, 3, 6, 4]));

// [7, 1, 5, 3, 6, 4]
// min = 7, profit = 0
// 7<1(7 is not less than 1) (so 1 is new minimum) min = 1, calculateProfit: 1 - 7 => -6, profit = 0
// 5<1(5 is not less than 1) min = 1, calculateProfit: 5 - 1 => 4, profit = 4
// 3<1(3 is not less than 1) min = 1, calculateProfit: 3 - 1 => 2, profit = 4
// 6<1(6 is not less than 1) min = 1, calculateProfit: 6 - 1 => 5, profit = 5
// 4<1(4 is not less than 1) min = 1, calculateProfit: 4 - 1 => 3, profit = 5


// DataStructuresAndAlgorithms/RoadSideCoderDSA/TopFiveDSAInterviewQuestionAndAnswer/best-time-to-buy-sell-stocks.js
