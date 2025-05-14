// Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

// You have the following three operations permitted on a word:

// Insert a character
// Delete a character
// Replace a character


var minDistance = function(word1, word2) {
    let n1 = word1.length;
    let n2 = word2.length;
    function helper(i,j){
      //base case
      if(i >= n1 && j >= n2) return 0;
      if(i >= n1 && j < n2){
        return n2 - j;
      }
      if(i < n1 && j >= n2){
        return n1 - i;
      }
      //recursive case
      if(word1[i] === word2[j]){
       return helper(i+1,j+1);
      }else{
        //3 case
      let m1 = 1 + helper(i+1,j);
      let m2 = 1 + helper(i,j+1);
      let m3 = 1 + helper(i+1,j+1); //replace
      return Math.min(m1,m2,m3);
      }
    }
    return helper(0,0);
};

//memoization
var minDistance = function(word1, word2) {
    let n1 = word1.length;
    let n2 = word2.length;
    
    let dp = Array.from({length:n1},()=> new Array(n2).fill(-1));
    console.log(dp);
    function helper(i,j){
      //base case
      if(i >= n1 && j >= n2) return 0;
      
      if(i >= n1 && j < n2){
        return n2 - j;
      }
      if(i < n1 && j >= n2){
         return n1 - i;
      }
      
      if(dp[i][j] !== -1) return dp[i][j];
      //recursive case
      if(word1[i] === word2[j]){
       dp[i][j] = helper(i+1,j+1);
      }else{
        //3 case
      let m1 = 1 + helper(i+1,j);
      let m2 = 1 + helper(i,j+1);
      let m3 = 1 + helper(i+1,j+1); //replace
      dp[i][j]= Math.min(m1,m2,m3);
      }
      return dp[i][j];
    }
    return helper(0,0);
};
