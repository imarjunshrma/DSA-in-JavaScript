// Given a string s, return the longest palindromic substring in s.

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.


var countSubstrings = function(s) {
    let n = s.length;
    
    let dp = Array.from({length:n},()=> new Array(n).fill(-1));
    
    let maxLength = 0;
    let max = [-1,-1];
    let count = 0;
    for(let l = 1;l<=n;l++){
      for(let i = 0;i<= n - l;i++){
        let j = i + l - 1;
        
        if(l === 1){
          // console.log("line 12",i,j);
          dp[i][j] = true;
          count++;
          
          if(l > maxLength){
            maxLength = l;
            max = [j,i];
          }
        }else if(l === 2){
          if(s[i] === s[j]){ 
            // console.log("line 16",i,j);
            count++;
            dp[i][j]= true;
             if(l > maxLength){
            maxLength = l;
            max = [j,i];
          }
          }
          else{
            dp[i][j] = false;
          }
        }
        else{
          //so firstly will check
          if(s[i]=== s[j] && dp[i+1][j-1]){
            // console.log("line 27",i,j,l);
             count++;
            dp[i][j] = true;
             if(l > maxLength){
            maxLength = l;
            max = [j,i];
          }
          }else{
            dp[i][j] = false;
          }
        }
        
      }
    }
    let [last,first] = max;
    return s.substring(first,last+1);
};


//optimised approach
var countSubstrings = function(s) {
    let n = s.length;
    
    let dp = Array.from({length:n},()=> new Array(n).fill(-1));
    
    let maxLength = 0;
    let max = [-1,-1];
    let count = 0;
    for(let l = 1;l<=n;l++){
      for(let i = 0;i<= n - l;i++){
        let j = i + l - 1;
        
        if(l === 1){
          // console.log("line 12",i,j);
          dp[i][j] = true;
          count++;
        }else if(l === 2 && s[i] === s[j]){
            count++;
            dp[i][j]= true;
        }
        else if(s[i]=== s[j] && dp[i+1][j-1]){
             count++;
            dp[i][j] = true;
        }else{
            dp[i][j] = false;
          }
        
        if(dp[i][j] && l > maxLength){
          max = [j,i];
          maxLength = l;
        }
      }
    }
    let [last,first] = max;
    return s.substring(first,last+1);
};
