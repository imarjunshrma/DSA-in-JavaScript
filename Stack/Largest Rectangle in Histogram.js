
// Given an array of integers heights representing the histogram's bar height where the width of each bar is 1, return the area of the largest rectangle in the histogram.



function largestRectangleArea(nums){
    let stack = [];
    let leftMargin = new Array(nums.length).fill(-1);
    let rightMargin = new Array(nums.length).fill(nums.length); //to make this solution correct
    //bondary can be extend right  mode
    
    
    //previous smaller leftmargin
    for(let i = nums.length - 1;i >= 0;i--){
      while(stack.length > 0 && nums[stack[stack.length - 1]] > nums[i]){
        leftMargin[stack[stack.length - 1]] = i;
        stack.pop();
      }
      
      stack.push(i);
    }
    
    stack.length = 0;
    //next smaller . right margin
     for(let i = 0;i < nums.length;i++){
      while(stack.length > 0 && nums[stack[stack.length - 1]] > nums[i]){
        rightMargin[stack[stack.length - 1]] = i;
        stack.pop();
      }
      
      stack.push(i);
    }
    
    let maxArea = 0;
    for(let i = 0;i<nums.length;i++){
      //left margin 
      //right margin - leftMargin - -1
      let width = rightMargin[i] - leftMargin[i] - 1;
      maxArea = Math.max(maxArea,width * nums[i]);
    }
    // console.log("left",leftMargin)
    // console.log("right",rightMargin)
    return maxArea;
  }