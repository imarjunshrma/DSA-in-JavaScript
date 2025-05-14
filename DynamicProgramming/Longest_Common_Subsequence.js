// Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

// For example, "ace" is a subsequence of "abcde".
// A common subsequence of two strings is a subsequence that is common to both strings.


var longestCommonSubsequence = function (text1, text2) {
    let n = text1.length;
    let m = text2.length;

    function helper(i, j) {
        //base case
        if (i >= n || j >= m) {
            return 0;
        }
        if (text1[i] === text2[j]) {
            return 1 + helper(i + 1, j + 1);
        }
        return Math.max(helper(i + 1, j), helper(i, j + 1));
    }
    return helper(0, 0);
};


//memoization
var longestCommonSubsequence = function (text1, text2) {
    let n = text1.length;
    let m = text2.length;

    //memoization means memoize the solution
    let memo = Array.from({ length: n }, (i, k) => new Array(m).fill(-1))

    function helper(i, j) {
        //base case
        if (i >= n || j >= m) {
            return 0;
        }
        if (memo[i][j] !== -1) {
            return memo[i][j];

        }
        if (text1[i] === text2[j]) {
            memo[i][j] = 1 + helper(i + 1, j + 1);
        } else {
            memo[i][j] = Math.max(helper(i + 1, j), helper(i, j + 1));
        }
        return memo[i][j];
    }
    return helper(0, 0);
};


//tabulation

//tabulation
var longestCommonSubsequence = function(text1, text2) {
    let n = text1.length; 
    let m = text2.length;
    
    //memoization means memoize the solution
    let dp = Array.from({length:n+1},(i,k)=>new Array(m+1).fill(0))
  
    //iterative approach
    
    for(let i = 1;i<=n;i++){
      for(let j = 1;j<=m;j++){
        if(text1[i-1] === text2[j-1]){
           dp[i][j] = 1+ dp[i-1][j-1];
        }else{
          dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1]);
        }
        
      }
    }
    
    
    return dp[n][m];
};
console.log(longestCommonSubsequence("abcde","ace" ));



//space optmised tabulation

//tabulation
var longestCommonSubsequence = function(text1, text2) {
    let n = text1.length; 
    let m = text2.length;
    
    //memoization means memoize the solution
    // let dp = Array.from({length:n+1},(i,k)=>new Array(m+1).fill(0))
    //only needed row array and prev and current
    let prev = Array.from({length:m+1}).fill(0);
    let curr = Array.from({length:m+1}).fill(0);
  
    //iterative approach
    
    for(let i = 1;i<=n;i++){
      for(let j = 1;j<=m;j++){
        if(text1[i-1] === text2[j-1]){
          // dp[i][j] = 1+ dp[i-1][j-1];
          curr[j] = 1 + prev[j-1];
        }else{
          // dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1]);
          curr[j] = Math.max(prev[i-1],prev[j]);
        }
      }
      prev = [...curr];
    }
    
    
    return curr[m];
};

//time is still o(n*m) space -> min(n,m);