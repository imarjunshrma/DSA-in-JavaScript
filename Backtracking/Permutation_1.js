//Given an array nums of disntict integer, return all the possilbe permutations . you can return the answer in any order.

const permutation = function(nums){
 
    let results = [];

    function helper(i){
        //base case
        if( i === nums.length - 1){
            return results.push([...nums]);
        }

        for(let j=i;j < nums.length;j++){
        [nums[i],nums[j]] = [nums[j],nums[i]]; //swapping
        helper(i+1);
        [nums[i],nums[j]] = [nums[j],nums[i]]; //swapping
        }
    }

    helper(0);

    return results;

}

console.log(permutation([1,2,3]));