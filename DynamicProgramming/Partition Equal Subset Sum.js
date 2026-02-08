
//self attempted

// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
var canPartition = function(nums) {
    let n = nums.length;
    let sum = nums.reduce((acc,curr) => acc + curr,0);
    
    function helper(i,curr){
        //base case
        if(i >= n) return false;
        if(curr == sum - curr){
            return true;
        }
        //exclude
        let exclude = helper(i+1,curr);
        //include
        let include = helper(i+1,curr + nums[i]); 
        
        return include ? include : exclude;
    }
    return helper(0,0);
};

console.log(canPartition([1,5,11,5]))

console.log(canPartition([1,5,11,5]));


//memoization
var canPartition = function(nums) {
    let n = nums.length;
    let sum = nums.reduce((acc,curr) => acc + curr,0);
    let dp = {};
    const getKey = (i,curr) => `${i} -> ${curr}`;
    function helper(i,curr){
        //base case
        if(i >= n) return false;
        let key = getKey(i,curr);
        if(key in dp) return dp[key];
        if(curr == sum - curr){
            return true;
        }
        //exclude
        let exclude = helper(i+1,curr);
        //include
        let include = helper(i+1,curr + nums[i]); 
        
        dp[key] = include ? include : exclude;
        return dp[key];
    }
    return helper(0,0);
};