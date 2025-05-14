// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.


//conclusion we will neeed to move pointer so that we can increase minvalue.
var maxArea = function(nums) {
    let maxArea = 0;
    
    let start = 0;
    let end = nums.length - 1;
    
    while(start < end){
        let distance = end - start;
        let area = distance * Math.min(nums[start],nums[end]);
        maxArea = Math.max(maxArea,area);
        
        if(nums[start] < nums[end]){
            start++;
        }else{
            end--;
        }
    }
    
    return maxArea;
};