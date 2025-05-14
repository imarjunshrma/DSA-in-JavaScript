// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.
// nums = [-1,0,1,2,-1,-4]



//array should be sorted for two sum2 approach 
//[-4,-1,-1,0,1,2];

var threeSum = function(nums) {
  nums.sort((a,b) => a - b); //sort Array
  let output = [];
  
  for(let i = 0; i < nums.length - 2;i++){
    if(nums[i] === nums[i - 1]) continue;
    
    let target = - nums[i];
    
    
    //use two sum1
    let left = i + 1;
    let right = nums.length - 1;
    
    while(left < right){
      if(nums[left] + nums[right] < target){
        left ++;
      }else if(nums[left] + nums[right] > target){
        right --;
      }else{
        output.push([nums[i],nums[left],nums[right]]);
        left++;
        right--;
        // console.log("output",output)
        // break;
      }
    }
    // console.log(needed)
  }
  
  return output;
};


console.log(threeSum([-1,0,1,2,-1,-1,-4]));