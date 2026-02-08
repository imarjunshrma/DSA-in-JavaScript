// You are given an array of n pairs pairs where pairs[i] = [lefti, righti] and lefti < righti.

// A pair p2 = [c, d] follows a pair p1 = [a, b] if b < c. A chain of pairs can be formed in this fashion.

// Return the length longest chain which can be formed.

// You do not need to use up all the given intervals. You can select pairs in any order.

 
//simple recursive approach
//o(2 ^n) space o(n)
var findLongestChain = function(pairs) {
    let n = pairs.length;
    pairs.sort((a,b) => a[0] - b[0]); //sort
    
    function helper(i,prev){
      if(i >= n) return 0;
      
      //recursive case
      let exclude = helper(i+1,prev);
      
      let include = 0;
      
      if(prev === -1 || pairs[i][0] > pairs[prev][1]){
        include = 1 + helper(i+1,i);
      }
      
      return Math.max(exclude,include);
    }
    
   return helper(0,-1);
};

//memoization
//o(n^2) time
//space o(n^2)
var findLongestChain = function(pairs) {
    let n = pairs.length;
    pairs.sort((a,b) => a[0] - b[0]); //sort
    let dp = Array.from({length:n},() => new Array(n+1).fill(-1));
    function helper(i,prev){
      if(i >= n) return 0;
      //prev + 1 for offset
      if(dp[i][prev + 1] !== -1) return dp[i][prev + 1];
      //recursive case
      let exclude = helper(i+1,prev);
      
      let include = 0;
      
      if(prev === -1 || pairs[i][0] > pairs[prev][1]){
        include = 1 + helper(i+1,i);
      }
      
      dp[i][prev+1] = Math.max(exclude,include);
      return dp[i][prev+1];
    }
    
   return helper(0,-1);
};


//optimised approach
//o(n^2)
//o(n)

var findLongestChain = function(pairs) {
    let n = pairs.length;
    pairs.sort((a,b) => a[0] - b[0]); //sort
  
    let dp = new Array(n).fill(1);
    let longest = 1;
    for(let i = 1;i<n;i++){
      let max = 1;
      for(let j = 0;j<i;j++){
        if(pairs[i][0] > pairs[j][1]){
          max = Math.max(max,1 + dp[j]);
        }
      }
      
      dp[i] = max;
      if(max > longest) longest = max;
    }
    
    return longest;
};
