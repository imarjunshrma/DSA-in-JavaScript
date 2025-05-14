// You are provided with a set of N items, each with a specified weight and value. Your objective is to pack these items into a backpack with a weight limit of W, maximizing the total value of items in the backpack. Specifically, you have two arrays: val[0..N-1], representing the values of the items, and wt[0..N-1], indicating their weights. Additionally, you have a weight limit W for the backpack. The challenge is to determine the most valuable combination of items where the total weight does not exceed W. Note that each item is unique and indivisible, meaning it must be either taken as a whole or left entirely.



// Input:
// N = 3
// W = 8
// values[] = [2,3,9]
// weight[] = [8,2,5]
// Output: 12
// Explanation: Choose the last 2 items that weighs 2 and 5 units respectively and hold values 3 and 9 that add up to 12. 

//  w - max weight
function knapSack(W, wt, val, n) {
    //Write Code here
    
    function helper(index,remWeight){
     //base case
     if(index >= n || remWeight === 0) return 0;
      //exclude the item
     let exclude = helper(index+1,remWeight);
    let include = 0;

    if(wt[index] <= remWeight){
       include = val[index] + helper(index+1,remWeight - wt[index]);

    }
     //include the item 

     return Math.max(exclude,include);
    
    }
    helper(0,W);
}
console.log(knapSack(8,[8,2,5],[2,3,9],3));

//memoization
function knapSack(W, wt, val, n) {
    //Write Code here
    let dp = Array.from({length:n},()=>new Array(W+1).fill(-1));
    // console.log(dp)
    
    function helper(index,remWeight){
    //base case
    if(index >= n || remWeight === 0) return 0;
    
    if(dp[index][remWeight] !== -1) return dp[index][remWeight];
      //exclude the item
    let exclude = helper(index+1,remWeight);
    let include = 0;

    if(wt[index] <= remWeight){
      include = val[index] + helper(index+1,remWeight - wt[index]);

    }
    //include the item 
    dp[index][remWeight] = Math.max(exclude,include);
    return dp[index][remWeight];
    }
   return helper(0,W);
}
