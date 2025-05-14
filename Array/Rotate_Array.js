// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

//reverse the array
// then reverse array from 0, k  and k
const reverse = (array,start,last) => {

    while(start < end){
        [array[start],array[last]] = [array[last],array[start]];
        start ++;
        end --;
    }
}
var rotate = function(nums, k) {
    k = k % nums.length; //
    // reverse array
 
    reverse(nums,0,nums.length-1);
    reverse(nums,0,k-1);
    reverse(nums,k,nums.length - 1)
    return nums;
};

console.log(rotate([1,2,3,4,5,6,7],3));