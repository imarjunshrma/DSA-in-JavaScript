//f(n) = f(n-1) + f(n2);



//recursion

var fib = function(n) {

    function helper(n){
      if(n <= 1){
        return n;
      }
      return helper(n-1) + helper(n-2);
    }
    
    return helper(n);
};
//memoization
var fib = function(n) {

    let hash = {
      0:0,
      1:1
    }
    function helper(n){
      if(hash[n] !== undefined){
        return hash[n];
      }
      hash[n] = helper(n-1) + helper(n-2);
      return hash[n];
    } 
    
    return helper(n);
};



//tabulation
var fib = function(n){
  let dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  
  for(let i = 2;i <= n;i++){
    dp[i] = dp[i-1] + dp[i-2];
  }
  return dp[n];
}

//space optimised tabulation
var fib = function(n){
 
    let prev = 0;
    let curr = 1;
    //f(n) -> f(n-1) + f(n-2);
    for(let i = 2;i <= n;i++){
       let next = curr + prev;
       prev = curr; 
       curr = next;
    }
    return curr;
  }
console.log(fibanociWithTabulation(8));
// 0 1 1 2 3 5 8 13 21