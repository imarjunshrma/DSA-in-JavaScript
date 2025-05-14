// You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.

// You can either start from the step with index 0, or the step with index 1.

// Return the minimum cost to reach the top of the floor.


var minCostClimbingStairs = function(cost) {
    //Write Code here 
    let n = cost.length;
    function costClimbing(index){
        //base case
        if(index >= n ) return 0;
        const one = cost[index] + costClimbing(index + 1); //1step
        const two = cost[index] + costClimbing(index + 2); //2 steps

        return Math.min(one,two);
    }

    return Math.min(costClimbing(0),costClimbing(1));
};


//memoization approach
var minCostClimbingStairs = function(cost) {
    
    let dp = new Array(cost.length).fill(-1);
    
    function helper(index){
      // 1 + helper(index + 1)
      if(index >= cost.length) return 0;
      
      if(dp[index] !== -1){
         return dp[index];
      }
      
      // return Math.min(helper(index + 1))
      let cost1 = cost[index] + helper(index + 1);
      let cost2 = cost[index] + helper(index + 2);
      
      dp[index] = Math.min(cost1,cost2);
      return dp[index];
    }
    
    return Math.min(helper(0),helper(1));
    
}

//tabulation

var minCostClimbingStairs = function(cost) {
    let n = cost.length;
    let dp = new Array(n + 1).fill(0);
   
    dp[0] = 0;
    dp[1] = 0;
   
   for(let i = 2;i <= n;i++){
    // dp[i] = Math.min(dp[i-1],dp[i-2]);
    let costFromOneStepBehind = dp[i - 1] + cost[i-1];
    let costFromTwoStepBehind = dp[i - 2] + cost[i-2];
    
    dp[i] = Math.min(costFromTwoStepBehind,costFromOneStepBehind);
   }
   
  // console.log(dp);
   return dp[n];
}

//time 0(n) and space o(n)

//space optimised tabulation
// o(n) and o(1)


var minCostClimbingStairs = function(cost) {
    let n = cost.length;
    
   let curr = 0;
   let prev = 0;
   for(let i = 2;i <= n;i++){
    let costFromOneStepBehind = curr + cost[i-1];
    let costFromTwoStepBehind = prev + cost[i-2];
    let next = Math.min(costFromTwoStepBehind,costFromOneStepBehind);
    prev = curr;
    curr = next;
   }
 
  return curr;
}
