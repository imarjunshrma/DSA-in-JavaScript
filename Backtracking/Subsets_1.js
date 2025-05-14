
//subsets
// Given an integer array of unique elements , return all possible subsets (the power set) the solution set must not contain duplicate subsets return the solution in any order



function subsets(ar){
    const results = [];
    const n = ar.length;
    function helper(i,subsets){
     //base case
     if(i === n){
        console.log("subsets",subsets);
        return results.push([...subsets]);
     }
    //  2options
    // don't include
    helper(i+1,subsets);

    subsets.push(ar[i]);
    //include
    helper(i+1,subsets);
    subsets.pop(); //backtrack
    }
    helper(0,[]);
    return results;
}

console.log(subsets([1,2,3]));