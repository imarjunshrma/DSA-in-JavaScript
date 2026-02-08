// Given an array arr[] which represents the dimensions of a sequence of matrices where the ith matrix has the dimensions (arr[i-1] x arr[i]) for i>=1, find the most efficient way to multiply these matrices together. The efficient way is the one that involves the least number of multiplications.

//recursive approach
const matrixChainMultiplication = (nums) => {
  let n = nums.length;
  function helper(i,j){
    if(i === j) return 0;
    
    let minCut = Infinity;
    for(let k = i;k<j;k++){
      let cuts = helper(i,k) + helper(k+1,j) + nums[i-1] * nums[k] * nums[j];
      minCut = Math.min(cuts,minCut);
    }
    return minCut;
  }
  
  helper(1,n-1);
  
}


//memoization approach
const matrixChainMultiplicationMemoization = (nums) => {
  let n = nums.length;
  let memo = Array.from({length:n},()=> new Array(n).fill(-1));
  function helper(i,j){
    if(i === j) return 0;
    if(memo[i][j] !== -1) return memo[i][j];
    let minCut = Infinity;
    for(let k = i;k<j;k++){
      let cuts = helper(i,k) + helper(k+1,j) + nums[i-1] * nums[k] * nums[j];
      minCut = Math.min(cuts,minCut);
    }
    memo[i][j] =  minCut;
    return memo[i][j];
  }
  
  return helper(1,n-1);
  
}