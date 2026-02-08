
function isPalingdromicSubstrings(str){
    let start = 0;
    let end = str.length - 1;
    
    
    while(start < end){
      if(str[start] !== str[end]) return false;
      start++;
      end --;
    }
    
    return true;
  }
  
  
  const subStrings = (str) => {
    
    const output = [];
    
    for(let i = 0;i<str.length;i++){
      for(let j = i;j < str.length;j++){
        output.push(str.slice(i,j+1));
      }
    }
    let count = 0;
    for(let i = 0;i<output.length;i++){
      count = count + isPalingdromicSubstrings(output[i]);
    }
    return count;
    // console.log(output);
  }



  // console.log("Hello, World!");

//palingdromic substrings
var countSubstrings = function(s) {
  let n = s.length;
  let dp = Array.from({length:n},()=>new Array(n).fill(-1)); //create a Array
  function helper(i,j){
    if(j < i){
      dp[i][j] = true;
      return dp[i][j];
    }
    if(i === j){
      dp[i][j] = true;
      return dp[i][j];
    }
    
    if(dp[i][j] !== -1){
      return dp[i][j];
    }
    
    helper(i + 1,j);
    helper(i,j - 1);
    if(s[i] === s[j] ){
      dp[i][j] = helper(i+1,j-1);
    }else{
      dp[i][j] = false;
    }
  }
  
  helper(0,n-1);
  
  let count = 0;
  for(let l = 1;l<=n;l++){
    for(let i = 0;i<=n-l;i++){
      let j = i + l - 1;
      if(dp[i][j] == true){
        count++;
      }
    }
  }
  return count;
};

//tabulation approach

var countSubstrings = function(s) {
  let n = s.length;
  let dp = Array.from({length:n},()=>new Array(n).fill(false)); //create a Array
  

  let count = 0;
  for(let l = 1;l<=n;l++){
    for(let i = 0;i<=n-l;i++){
      let j = i + l - 1;
      
      //if length is equal -> 1
       //i -> j
       if(l === 1){
         dp[i][j] = true;
         count++;
       }else if(s[i] === s[j] && (j == i + 1 || dp[i+1][j-1])){
        dp[i+1][j-1] = true;
        count++;
       }else{
         dp[i][j]= false;
       }
    }
  }
  return count;
};

//tabulation approach simple solution
var countSubstrings = function(s) {
    let n = s.length;
    
    let dp = Array.from({length:n},()=> new Array(n).fill(-1));
    
    let count = 0;
    for(let l = 1;l<=n;l++){
      for(let i = 0;i<= n - l;i++){
        let j = i + l - 1;
        
        if(l === 1){
          dp[i][j] = true;
          count++;
        }else if(l === 2){
          if(s[i] === s[j]){ 
            count++;
            dp[i][j]= true;
          }
          else{
            dp[i][j] = false;
          }
        }
        else{
          //so firstly will check
          if(s[i]=== s[j] && dp[i+1][j-1]){
             count++;
            dp[i][j] = true;
          }else{
            dp[i][j] = false;
          }
        }
        
      }
    }
    
    
    return count;
};


console.log(countSubstrings("abc"))