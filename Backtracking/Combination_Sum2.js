// Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

// Each number in candidates may only be used once in the combination.

// Note: The solution set must not contain duplicate combinations.

// Input: candidates = [10,1,2,7,6,1,5], target = 8
// Output: 
// [
// [1,1,6],
// [1,2,5],
// [1,7],
// [2,6]
// ]


var combinationSum2 = function(candidates, target) {
    let results = [];
    candidates.sort((a,b) => a-b);
    function helper(i,comb,currentSum){
    let hashMap = {};
    //base case
    if(currentSum > target || i > candidates.length - 1) return;
    if(currentSum === target) return results.push([...comb]);
    //recursive case

    for(let j = i;j<candidates.length;j++){
        // console.log("inside this")
        if(!hashMap[candidates[j]]){ //valid case
        // console.log(candidates[j])
           hashMap[candidates[j]] = 1;
           comb.push(candidates[j]);
        //   console.log(comb)
           helper(j+1,comb,currentSum + candidates[j]);
           comb.pop();
        }
    }

    }
    helper(0,[],0);
    return results;
};