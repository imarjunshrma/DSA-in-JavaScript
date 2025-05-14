// Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

// A subarray is a contiguous non-empty sequence of elements within an arra


var subarraySum = function(nums, k) {
    let prefixSum = [];
    
    nums.forEach((num,index) => {
        prefixSum[index] =( index > 0 ? prefixSum[index - 1] : 0) + nums[index];
    })
    // console.log(prefixSum)
    
    let hashMap = {}; //to avoid 2 for loops
    let count = 0;
    for(let i = 0;i<nums.length;i++){
        let sum = prefixSum[i];
        if(sum === k){
            count++;
        }
        // let needed = k - sum;
        let needed = sum - k;
        if(needed in hashMap){
            count = count + hashMap[needed];
        }
        
        hashMap[sum] = (hashMap[sum] || 0) + 1;
        
    }
    return count;
};
console.log(subarraySum([1,1,1],2));