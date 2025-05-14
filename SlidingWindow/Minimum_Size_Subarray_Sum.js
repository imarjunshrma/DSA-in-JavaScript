//same as minimum window substrings


// Given an array of positive integers nums and a positive integer target, return the minimal length of a 
// subarray
//  whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

var minSubArrayLen = function (target, nums) {
    let minimalLength = Infinity;
    let left = 0;
    let res = [-1, -1];
    let currSum = 0;
    for (let right = 0; right < nums.length; right++) {
        let ele = nums[right];   
        currSum = currSum + ele;
        while(currSum >= target){
            let ele2 = nums[left];
            currSum = currSum - ele2;
            if(minimalLength > right - left + 1){
                minimalLength = right - left + 1;
                res = [left,right];
            }
            left ++;
        }
    }
    return minimalLength === Infinity ? 0 : minimalLength;
};