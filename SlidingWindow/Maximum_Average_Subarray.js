// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

//nums = [1,12,-5,-6,50,3], k = 4
// average = sum/length

//brute force approach
// [0,1,1,3,3]
//5-4 = 1
// var findMaxAverage = function (nums, k) {
//     let maxSum = 0;
//     for (let i = 0; i < nums.length - k + 1; i++) {
//         let sum = 0;
//         for (let j = i; j < i + k; j++) {
//             sum += nums[j];
//         }
//         maxSum = Math.max(maxSum, sum);
//     }
//     return maxSum / k;
// };



// sliding window pattern

// var findMaxAverage = function (nums, k) {

//     let lastSum = 0;

//     //calculate sum of k elements
//     for(let i = 0; i < k; i++ ){
//         lastSum += nums[i];
//     }

//     let maxSum = lastSum;
//     //sliding approach
//     for(let i = 1; i <= nums.length - k ; i++){ 
//         lastSum = lastSum - nums[i - 1] + nums[i + k - 1];
//         maxSum = Math.max(maxSum,lastSum);
//     }

//     return maxSum/k;
// };


//correct way
var findMaxAverage = function (nums, k) {

    let currSum = 0;

    //calculate sum of k elements
    for (let i = 0; i < k; i++) {
        currSum += nums[i];
    }

    let maxSum = currSum;
    //sliding approach
    for (let i = k; i < nums.length; i++) {
        currSum = currSum + nums[i] - nums[i - k];
        maxSum = Math.max(maxSum, currSum);
    }

    return maxSum / k;
};


var findMaxAverage = function(nums, k) {
    
    let initialSum = 0;
    for(let i = 0; i< k;i++){
      initialSum += nums[i];
    }
    let maxSum = initialSum;
    console.log("maxSum",maxSum,initialSum)
    for(let i = 1;i < nums.length - k + 1;i++){
      
    // console.log(i)
      initialSum = initialSum - nums[i - 1] + nums[i + k - 1];
      
      maxSum = Math.max(maxSum,initialSum);
      // 1 + 4 => 5
    }
    return maxSum/k;
};