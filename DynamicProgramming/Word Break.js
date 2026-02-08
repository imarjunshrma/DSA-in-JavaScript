// Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

// Note that the same word in the dictionary may be reused multiple times in the segmentation.




var wordBreak = function (s, wordDict) {
  let n = s.length;

  function helper(start, end) {

    //base case
    if (start > end) {
      return true;
    }

    for (let i = start; i <= end; i++) {
      if (wordDict.includes(s.slice(start, i + 1))) {
        // console.log(s.slice(start,i+1));
        // return helper(i+1,end);
        if (helper(i + 1, end)) {
          return true;
        }
      }
    }

    return false;
  }

  return helper(0, n - 1);
};

//memoization

var wordBreak = function (s, wordDict) {
  let n = s.length;
  let dp = Array.from({ length: n }, () => new Array(n).fill(-1));
  function helper(start, end) {

    //base case
    if (start > end) {
      return true;
    }

    if (dp[start][end] !== -1) return dp[start][end];

    for (let i = start; i <= end; i++) {
      if (wordDict.includes(s.slice(start, i + 1))) {
        // console.log(s.slice(start,i+1));
        // return helper(i+1,end);
        if (helper(i + 1, end)) {
          dp[start][end] = true;
          return dp[start][end];
        }
      }
    }
    dp[start][end] = false;
    return dp[start][end];
  }

  return helper(0, n - 1);
};

//tabulation approach
var wordBreak = function (s, wordDict) {
  let n = s.length;
  let dp = Array.from({ length: n }, () => new Array(n).fill(false));

  for (let l = 1; l <= n; l++) {
    for (let i = 0; i <= n - l; i++) {
      let j = i + l - 1;
      let subStr = s.slice(i, j + 1);

      if (wordDict.includes(subStr)) {
        dp[i][j] = true;
      } else {
        // dp[i][j] = false;
        let isCheck = false;
        for (let k = i; k < j; k++) {
          if (dp[i][k] && dp[k + 1][j]) {
            isCheck = true;
          }
        }

        dp[i][j] = isCheck;
      }

    }
  }

  console.log(dp);

  return dp[0][n - 1];

}



// 2nd approach

//recursive approach
var wordBreak = function (s, wordDict) {
  let n = s.length;


  function helper(i) {
    if (i < 0) {
      return true;
    }
    for (let word of wordDict) {
      let start = i - word.length + 1;

      if (s.substr(start, i + 1) === word && helper(start - 1)) {
        return true;
      }
    }
    return false;
  }


  return helper(n - 1);
}


//memoization
var wordBreak = function(s, wordDict) {
    let n = s.length;
    
    let memo = new Array(n).fill(-1);
    

       function helper(i){
           if(i < 0){
               return true;
           }
           
           if(memo[i] !== -1) return memo[i];
            for(let word of wordDict){
                let start = i - word.length + 1;
                 
                 if(s.substr(start,i+1) === word && helper(start - 1)){
                     memo[i] = true;
                     return memo[i];
                 }
            }
            memo[i] =  false;
            return memo;
       }
      
      
       return helper(n -1);
  }   
       

//tabulation approach
var wordBreak = function(s, wordDict) {
    let n = s.length;
    
    let memo = new Array(n).fill(false);
    
    
    for(let i = 0; i < n;i++){
        for(let word of wordDict){
            
            if(word.length -1 !== i) continue;
            
            if(s.substr(i - word.length + 1,i+1) === word && (i === word.length - 1 || dp[i - word.length])){
                dp[i] = true;
                break;
            }
        }
    }

      
  }   
       