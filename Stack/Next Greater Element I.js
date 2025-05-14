// The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

// You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

// For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

// Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.


var nextGreaterElement = function(nums1, nums2) {
    let hashMap = {};
      
      for(let i = 0;i<nums1.length;i++){
        hashMap[nums1[i]] = i;
      }
     let output = Array.from({length:nums1.length}).fill(-1);
     let stack = [];
     
     for(let i = 0;i<nums2.length;i++){
       let ele = nums2[i];
       
       let j = stack.length - 1;
       while(j >=0 && nums2[stack[j]] < ele){
         // console.log("nums",nums2[j],ele)
         let popIdx = stack.pop();
       
         let idx = hashMap[nums2[popIdx]] //index
         // console.log(popIdx,nums2[popIdx],hashMap,idx)
         if(nums2[popIdx] in hashMap){
           output[idx] = ele;
         }
         j--;
       }
       
       
       stack.push(i);
     }
     // console.log(output)
     return output;
 };