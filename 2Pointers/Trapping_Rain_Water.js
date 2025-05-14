// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

 


// we will calculate trapping water by each bar
// each bar's width is 1 so area = height
// will calculate left and right boundary according that 


var trap = function(nums) {
    let area = 0;
    let left = 0;
    let right = nums.length - 1;

    let leftMax = 0; //left boundary
    let rightMax = 0; //right boundary

    //two pointers approach

    while(left < right){
        leftMax = Math.max(leftMax,nums[left]);
        rightMax = Math.max(rightMax,nums[right]);


        //minimum between both
        if(leftMax < rightMax){
           area += leftMax - nums[left]; // subtrack jar's height
           left++;
        }else{
            area +=  rightMax - nums[right]; // subtrack jar's height
            right --;
        }
    }
};
//time and space 
//traversing whole array once so time will be o(n)
//space is o(1)