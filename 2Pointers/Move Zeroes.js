var moveZeroes = function(nums) {
    //left will indicate to 0 
    // right to number and swap
    
    
    let left = 0;
    
    for(let right = 0;right<nums.length;right++){
     
     
     //move left until it does not reach to 0
     while(left < right && nums[left] !== 0){
         left++;
     }  
     
     if(nums[right] !== 0){
         //swap left and right
         [nums[left],nums[right]] = [nums[right],nums[left]];
     }
    }
    
    // return nums;
};