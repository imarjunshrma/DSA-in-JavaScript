var partition = function(s) {
    let n = s.length;
    let dp = Array.from({length:n},()=> new Array(n).fill(-1));
    
    
    //substring is a palingdrome or not
    let count = 0;
    for(let l = 1;l<=n;l++){
      for(let i = 0;i<= n - l;i++){
        let j  = i + l - 1;
        if(l === 1){
          //diagonal
          dp[i][j] = true;
          count++;
        }else{
          if(s[i] === s[j] && dp[i+1][j-1]){
            dp[i][j] = true;
            count++;
          }else{
            dp[i][j] = false;
          }
        }
      }
    }
    
    const output = [];
    //partition of String
    function helper(i,sub){
      //base case
      if(i >= n){
         return output.push([...sub]);
      }
      
      //recusrive case
      for(let j = i;j<n;j++){
       // console.log(j);
       if(dp[i][j]){
           sub.push(s.slice(i,j+1));
           helper(j+1,sub);
           sub.pop();
       }
      
      }
    }
    helper(0,[]);
   // console.log(dp);
   return output;
 };