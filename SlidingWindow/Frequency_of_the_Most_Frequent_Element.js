// The frequency of an element is the number of times it occurs in an array.

// You are given an integer array nums and an integer k. In one operation, you can choose an index of nums and increment the element at that index by 1.

// Return the maximum possible frequency of an element after performing at most k operations.



var maxFrequency = function (nums, k) {
     
    nums.sort((a,b) => a-b);

   let left = 0;
   let sum = 0;
   let res = 0;
   for (let right = 0; right < nums.length; right++) {
       sum = sum + nums[right];
       // let window_sum = (right - left + 1) * nums[right];

       //if invalid window
       while (sum + k < (right - left + 1) * nums[right]) {
           sum = sum - nums[left];
           left++;
       }

       //valid window
       res = Math.max(res,right - left + 1);
   }
   return res;
};

// 1,4,8,13
// left - 1 right - 1
// 4 * 2 = 8
// 5  + k = 10;