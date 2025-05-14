// Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

// The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

// (the integers in the candidates array are all non negative )

var combinationSum = function(candidates, target) {
    //Write code here
    // [2,3,8,9] target = 9
    // so need to make target
    const output = [];
    const n = candidates.length;

    function helper(i,current,currentSum){
        //base case
        //edge case
        if(currentSum > target) return;
        if(currentSum === target) return output.push([...current]);

        //recursive case
        // j -> i to n-1
        for(let j = i;j<n;j++){
            //
             current.push(candidates[j]);
             helper(j,current,currentSum + candidates[j]);
             current.pop(); //backtrack to avoid duplicate results
        }
    }

    helper(0,[],0);
    return output;
    // 2,2,2,3
    //
};
console.log(combinationSum([2,3,8,9],9));