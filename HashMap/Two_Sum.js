// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Input: nums = [2,7,11,15], target = 9

//[4,2,9,3,8,6,5]
//brute force two sum
// var twoSum = function(nums, target) {
//     for(let i = 0; i < nums.length - 1; i++) {
//       for(let j=i +1; j < nums.length; j++) {
//          if(nums[i] + nums[j] === target){
//             return [i,j];
//          }
//       }

//     }
// };
//o(n2)

var twoSum = function(nums, target) {
  let hashMap = {};
  let neededValue;
  for(let i = 0; i< nums.length; i++){
   neededValue = target - nums[i];
   if(neededValue in hashMap){
      return [hashMap[neededValue],i];
   }else{
      hashMap[nums[i]] = i;
   }
  }
};

