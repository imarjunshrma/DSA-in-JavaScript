// Given a string s, find the longest palindromic subsequence's length in s.

// A subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements.


//memoization approach
var longestPalindromeSubseq = function(s) {
  let n = s.length;
  let dp = Array.from({length:n},()=>new Array(n).fill(-1)); //create a Array
  
  
  function helper(i,j){
    if(j < i){ // invalid window
      return 0;
    }
    if(i === j){
      return 1;
    }
    
    if(dp[i][j] !== -1){
      return dp[i][j];
    }
    
  
    if(s[i] === s[j] ){
      dp[i][j] = 2 + helper(i+1,j-1);
    }else{
      dp[i][j] = Math.max(helper(i + 1,j),helper(i,j - 1));
    }
      return dp[i][j];
  }
  
  helper(0,n-1);
  
 console.log(dp);
};
var longestPalindromeSubseq = function(s) {
    let n = s.length;
    let dp = Array.from({length:n},()=> new Array(n).fill(0));
    
    //
    for(let l = 1;l<= n;l++){
      for(let i = 0;i<= n - l;i++){
        let j = i + l - 1;
        if(l === 1){
          dp[i][j] = 1;
        }else{
        if(s[i] === s[j]){
          dp[i][j] = 2 + dp[i + 1][j-1];
        }else{
          dp[i][j] = Math.max(dp[i+1][j],dp[i][j-1]);
        }
        }
      }
    }
    
    
    return dp[0][n-1];
    // console.log(dp);
};
