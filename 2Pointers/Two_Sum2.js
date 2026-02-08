// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.

// Return the indices of the two numbers, index1 and index2, added by one as an integer array [index1, index2] of length 2.

// The tests are generated such that there is exactly one solution. You may not use the same element twice.

// Your solution must use only constant extra space.
// [2,7,11,15]

var twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while(left < right){
        let s1 = numbers[left];
        let s2 = numbers[right];
        let sum = s1 + s2;
        if(sum < target){
            left++;
        }else if(sum > target){
            right--;
        }else{
            return [left + 1, right + 1]; //+1 because 1index array
        }
    }
};