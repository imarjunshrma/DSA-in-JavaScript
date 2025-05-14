// Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

// Only numbers 1 through 9 are used.
// Each number is used at most once.
// Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

var combinationSum3 = function(k,target) {
 
    let results = [];
    function helper(i,comb,currentSum,currentLen=0){
        if(currentSum > target || currentLen > k) return;
        //base case
        if(currentSum === target && currentLen === k) return results.push([...comb]);
        
        //recursive case
        for(let j = i;j<=9;j++){
            comb.push(j);
            helper(j+1,comb,currentSum + j,currentLen+1);
            comb.pop()
        }
        
    }
    helper(1,[],0,0);
    return results;
 };