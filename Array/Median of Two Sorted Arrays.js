function mergedArray(nums1, nums2){
    let left = 0;
    let right = 0;
    let mergedAr = [];
    while(left < nums1.length && right < nums2.length){
        //both left and right is less than length
        if(nums1[left] <= nums2[right]){
            mergedAr.push(nums1[left]);
            left++;
        }else if(nums1[left] > nums2[right]){
             mergedAr.push(nums2[right]);
              right++;
        }
    }
    
    
    //check left
    // console.log(left,right)
    
    while(left < nums1.length){
      mergedAr.push(nums1[left]);
      left++;
    }
    
    while(right < nums2.length){
      mergedAr.push(nums2[right]);
      right++;
    }
    return mergedAr;
}


var findMedianSortedArrays = function(nums1, nums2) {

    let mergedAr = mergedArray(nums1,nums2);
    
    console.log(mergedAr)
    
    let left = 0;
    let right = mergedAr.length - 1;
    let middle = Math.floor((left + right )/ 2);
    
    // console.log(middle);
    
    // console.log(middle,mergedAr,mergedAr[middle])
    //if middle element is odd then find middle element otherwise find mid - 1 and mid + 1 element
 
    //if length is odd or even
    if(mergedAr.length % 2 === 0){
        // console.log(middle - 1,middle + 1)  
        
        return (mergedAr[middle] + mergedAr[middle + 1])/2;
    }else{
      return mergedAr[middle];
    }
  
    // console.log(mergedAr)
};
// [4,5,6] [1,2]
// [1,2,3,4]
console.log(findMedianSortedArrays([0,2],[1,2]))