/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    
    let output = new Array(nums.length).fill(-1);
    let stack = [];
    
    // for(let i = )
    
    let start = 0;
    // let counter = 0;
    let isLoop = false;
    
    //array is ciruclar
    while(start < nums.length * 2){
      //need to add indices only
      let ele = nums[start >= nums.length ? start % nums.length : start];
      let j = stack.length - 1;
      while(j >= 0 && nums[stack[j]] < ele){
        let popedIdx = stack.pop();
        output[popedIdx] = ele;
        j--;
      }
      
      if(!isLoop){
            stack.push(start);
      }
      start++;
      // counter++
      
      if(start >= nums.length){
        // start = start % nums.length;
        isLoop = true;
      }
    }
    // console.log(output)
    return output;
};

//we are not adding another round's indices to stack let's suppose we add and then we pop so that indices are already have output so??

//fully optimised version of this

var nextGreaterElements = function(nums) {
    
    let output = new Array(nums.length).fill(-1);
    let stack = [];
    
    // for(let i = )
    
    let start = 0;
    
    //array is ciruclar
    while(start < nums.length * 2){
      //need to add indices only
      let ele = nums[start >= nums.length ? start % nums.length : start];
      // let j = stack.length - 1;
      while(stack.length > 0 && nums[stack[stack.length - 1]] < ele){
        let popedIdx = stack.pop();
        output[popedIdx] = ele;
      }
      
      if(start < nums.length){
            stack.push(start);
      }
      start++;
    }
    // console.log(output)
    return output;
};
