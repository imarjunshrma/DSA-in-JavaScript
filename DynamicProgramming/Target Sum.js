// You are given an integer array nums and an integer target.

// You want to build an expression out of nums by adding one of the symbols '+' and '-' before each integer in nums and then concatenate all the integers.

// For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate them to build the expression "+2-1".
// Return the number of different expressions that you can build, which evaluates to target.

//recursion
var findTargetSumWays = function(nums, target) {
    let n = nums.length;
    let total = 0;
    function helper(i,sum){
      
      if(i >= n){
        if(sum === target) total++;
          return;
      }
      //recursive case
      // +
      let fMinus = sum - nums[i];
      helper(i+1,fMinus);
      let fPlus = sum + nums[i];
      helper(i+1,fPlus);
    }
    helper(0,0);
    
    return total;
};

//recursion correct
var findTargetSumWays = function(nums, target) {
    let n = nums.length;
    function helper(i,sum){
      
      if(i >= n){
        if(sum === target) return 1;
          return 0;
      }
      let minus = helper(i+1,sum - nums[i]);
      let plus = helper(i+1,sum + nums[i]);
      return minus + plus;
    }
     return helper(0,0);
};

//memoization
var findTargetSumWays = function(nums, target) {
    let n = nums.length;
    let memo = {};
    function helper(i,sum){
      let key = `${i}-${sum}`;
      if(i >= n){
        if(sum === target) return 1;
          return 0;
      }
      if(key in memo) return memo[key];
      let minus = helper(i+1,sum - nums[i]);
      let plus = helper(i+1,sum + nums[i]);
      memo[key] = minus + plus;
      return memo[key];
    }
     return helper(0,0);
};