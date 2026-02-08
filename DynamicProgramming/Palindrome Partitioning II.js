// Given a string s, partition s such that every substring of the partition is a palindrome.

// Return the minimum cuts needed for a palindrome partitioning of s.


var minCut = function (s) {

    function isPalingdrome(start, end) {
        while (start < end) {
            if (s[start] !== s[end]) return false;

            start++;
            end--;
        }
        return true;
    }

    function helper(start, end) {
        //only 1 element 
        if (start === end || isPalingdrome(start, end)) {
            return 0;
        }
        let minCuts = end - start;
        for (let i = start; i < end; i++) {
            if (isPalingdrome(start, i)) {
                minCuts = Math.min(minCuts, 1 + helper(i + 1, end));
            }
        }
        return minCuts;
    }
    return helper(0, s.length - 1);

}


//memoization approach


var minCut = function (s) {

    let palingdromeDp = Array.from({length:s.length},()=> new Array(s.length).fill(-1));
    
    for(let l = 1;l<=s.length;l++){
      for(let i = 0;i<= s.length - l ; i++){
        let j = i + l - 1;
        if(l === 1){
          palingdromeDp[i][j] = true;
        }else{
          if(s[i] === s[j] && palingdromeDp[i+1][j-1]){
            palingdromeDp[i][j] = true;
          }else{
            palingdromeDp[i][j] = false;
          }
        }
      }
    }
    
    
    // console.log(palingdromeDp);
    let dp = Array.from({length:s.length},()=> new Array(s.length).fill(-1));

    function helper(start, end) {
        //only 1 element 
        if (start === end || palingdromeDp[start][end]=== true) {
            return 0;
        }
        if(dp[start][end] !== -1) return dp[start][end];
        let minCuts = end - start;
        for (let i = start; i < end; i++) {
            if (palingdromeDp[start][i] === true) {
                minCuts = Math.min(minCuts, 1 + helper(i + 1, end));
            }
        }
        dp[start][end] = minCuts;
        return dp[start][end];
    }
    return helper(0, s.length - 1);

}

//tabulation approach

var minCut = function (s) {
  let n = s.length;

  
  let dp = Array.from({length:n},()=> new Array(n).fill(0));
  
  for(let l = 1;l<= n;l++){
    for(let i = 0;i<= n -l ;i++){
      let j = i + l - 1;
      if(l === 1){
        dp[i][j] = 0;
      }else{
        if(s[i] === s[j] && dp[i+1][j-1] === 0){
          //string is palindrome
          //no cut required
          dp[i][j] = 0;
        }else{
          let minCut = j - i;
          for(let k = i;k<j;k++){
            minCut = Math.min(minCut,dp[i][k] + 1 + dp[k+1][j]);
          }
          dp[i][j] = minCut;
        }
      }
    }
  }
  return dp[0][n-1];
}

// using 1d approach


var minCut = function(s){
   let n = s.length;
   
  let dp = Array.from({length:n},()=> new Array(n).fill(0));
  
  for(let l = 1;l<=n;l++){
    for(let i = 0;i<= n - l;i++){
      let j = i + l -1;
      if(l === 1){
        dp[i][j] = true;
      }else if(l === 2 && s[i] === s[j]){
        dp[i][j] = true;
      }else if(s[i] === s[j] && dp[i+1][j-1]){
        dp[i][j] = true;
      }else{
        dp[i][j] = false;
      }
    }
  }
  
  let memo = Array.from({length:n}).fill(0);
  
  //
  for(let i = 0;i<n;i++){
    let minCuts = i;
    for(let start = 0;start <= i;start++){
      if(dp[start][i]){
        if(start === 0){
          minCuts = 0;
        }else{
           minCuts = Math.min(minCuts,1 + dp[start - 1]);
        }
    }
  }
  
   dp[i] = minCuts;
}

}