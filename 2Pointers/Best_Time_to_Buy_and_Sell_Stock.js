// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
// Input: prices = [7,1,5,3,6,4]
// Output: 5

//brute force approach 
var maxProfit = function(prices){

    let maxP = 0;

    for(let i=0;i<prices.length-1;i++){
     for(let j=i+1;j<prices.length;j++){
      let s1 = prices[i]; // buy price
      let s2 = prices[j]; //sell price

      if(s2 - s1 > maxP){
         maxP = s2 - s1;
      }
     }

    }

    return maxP;
}



//two pointers approach
var maxProfit = function(prices){
    let maxP = 0;
    let left = 0;

    for(let right = 1 ; right< prices.length; right++){
     //case if right < left then increase left
     // buy and sell on same
       if(prices[right] < prices[left]){
        left = right;
       }else{
        maxP = Math.max(maxP,prices[right] - prices[left]);
       }

    }
    return maxP;
}