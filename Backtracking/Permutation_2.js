//Given a collection of numbers,nums that might contain duplicates,return all possible unique permuations in every order
//[1,1,2] -> (0,0) (0,1) (0,2) -> (1,1) (1,1) (1,2)

function permutation(nums){

 let results = [];
 let n = nums.length;
 function helper(i){
 let hash = {};
  //base case
  if(i == n-1){
   
    return results.push([...nums]);
  }

  for(let j=i;j<n;j++){
    if(!hash[nums[j]]){
        hash[nums[j]] = 1;
        [nums[i],nums[j]] = [nums[j],nums[i]]; //swapping
        helper(i+1);
        [nums[j],nums[i]] = [nums[i],nums[j]]; //swapping
    }
  }
 }

}