
// Given an array arr[] of non-negative integers and a value sum, the task is to check if there is a subset of the given array whose sum is equal to the given sum. 


function subsetSumProblem(nums,target){
  let results = [];
  let n = nums.length;
  function helper(i,curr,currSum){
    //base case
    if(currSum === target){
      // console.log('9',curr,currSum)
      results.push([...curr]);
      return;
    }
    if(currSum > target || i >= n){
      return;
    }
    
    // console.log('16->',curr);
    //recursive case
    //exclude
    helper(i+1,curr,currSum);
    
    //include
    // console.log(curr);
    curr.push(nums[i])
    helper(i+1,curr,currSum + nums[i]);
    curr.pop();
  }
  helper(0,[],0);
  
  return results.length > 0;
  // console.log(results);
}
