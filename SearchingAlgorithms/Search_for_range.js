// Find First and Last Position of Element in Sorted Array-You are given an array of integers sorted in non-decreasing order, find the starting and ending position of a given target value. If target is not found in the array, return [-1, -1]. You must write an algorithm with O(log n) runtime complexity.

// Try:

// Try to write both the iterative solution and recursive solution

//binary o(logn);



const findLeftExtreme = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) {
            if(mid === 0) return mid;
            if(nums[mid - 1] === target){
                end = mid - 1;
            }else{
                return mid;
            }
        } else if (target > nums[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}
const findRightExtreme = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (nums[mid] === target) {
            if(mid === nums.length - 1) return mid;
            if(nums[mid + 1 ] === target){
                start = mid + 1;
            }else{
                return mid;
            }
        } else if (target > nums[mid]) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1;
}
const searchRange = (nums,target) => {
    const leftExtreme = findLeftExtreme(nums,target);
    const rightExtreme = findRightExtreme(nums, target);
    return [leftExtreme,rightExtreme];
   }
console.log(searchRange([1, 2, 3, 4, 5, 5, 5, 5, 5, 7, 8], 5));