

function nextGreater(nums){
    let output = Array.from({length:nums.length}).fill(-1);
    // console.log(output)
  
   let stack = [];
   
   for(let i = 0;i<nums.length;i++){
       let j = stack.length - 1;
       
       while( j>=0 && nums[i] > nums[stack[j]]){
           let popIdx = stack.pop();
           
        //   stack[j] = nums[i];
           output[popIdx] = nums[i];
           j--;
       }
       
       //push operation
       stack.push(i);
    //   console.log(stack)
   }
    
    
    return output;
}


console.log(nextGreater([2,1,5,6,2,3]));