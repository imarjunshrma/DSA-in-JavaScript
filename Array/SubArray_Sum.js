

var subarraySum = function(nums, k) {
    let prefixArray = [];
    let subArray = [];
    
    prefixArray.push(nums[0]);
    for(let i = 1;i<nums.length ; i++){
      prefixArray[i] = nums[i] + prefixArray[i - 1];
    }
    // console.log(prefixArray)
    
  // use two pointer approach
  
  let left = 0;
  let right = 0;
  // for(let right = 0; right < nums.length;right++){
  //   //
  //   let sum = prefixArray[right];
  //   if(left > 0){
  //     sum = prefixArray[right] - prefixArray[left - 1];
  //   }
    
  //   if(sum === k){
  //     subArray.push(nums.slice(left,right));
  //   }else if(sum < k){
  //     left++;
  //   }
  // }
  
  
  while(right < nums.length){
    let sum = prefixArray[right];
    if(left > 0){
       sum = prefixArray[right] - prefixArray[left - 1];
    }
    
    if(sum === k){
      subArray.push(nums.slice(left,right + 1));
      right++;
      // left = right;
    }else if(sum < k){
      right++;
    }else{
      left++;
    }
  }
  
    
    console.log(subArray)
   
};

// sub array can be one element 
// sub array can be two element

console.log(subarraySum([3, 4, 7, 2, -3, 1, 4, 2], 7))
//if want to increase sum then move right otherwise left
// [1,3,6]