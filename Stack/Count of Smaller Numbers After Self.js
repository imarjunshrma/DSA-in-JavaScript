/**
 * @param {number[]} nums
 * @return {number[]}
 */

var countSmaller = function(nums) {
    let output = Array.from({length:nums.length}).fill(0);
    let stack = [];
    for(let i = nums.length - 1;i>=0;i--){
        //check curr element with stack top element

        let count = 0;
        let j = stack.length - 1;
        while(j>=0){
            if(nums[stack[j]] < nums[i]){
              count++;
            }
            j--;
        }
      output[i] = count;
        stack.push(i); //only store indices
        
    }
    return output;
};