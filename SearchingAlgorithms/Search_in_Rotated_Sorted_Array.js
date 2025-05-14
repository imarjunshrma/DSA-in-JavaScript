// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.


var search = function (nums, target) {

    let start = 0;
    let end = nums.length - 1;




    //1st condition
    // nums[end] > nums[middle] -> right part is sorted
    // nums[start] < nums[middle] -> left part is sorted

    //2st condition
    // nums[start] <= target  < nums[middle] - in left part
    // nums[middle] < target <= nums[end] - in right part

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (nums[middle] === target) {
            return middle;
        }

        if (nums[end] > nums[middle]) {
            //right part is sorted
            if (nums[start] <= target && target < nums[middle]) {
                //left part element
                end = middle - 1;
            } else {
                //element is in right part
                start = middle + 1;
            }
        } else {
            //left part is sorted
            if (nums[middle] <= target && target < nums[end]) {
                //element is in right part
                start = middle + 1;
            } else {
                //element is in left part
                end = middle - 1;
            }
        }
    }

};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));