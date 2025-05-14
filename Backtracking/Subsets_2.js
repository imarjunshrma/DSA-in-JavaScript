//subsets-2
// Given an integer array that may contain duplicates elements, return all possilbe subsets



//why are we not using set this approach because set does not recoginise [1,2] and [1,2] different
// JavaScript sets use object references, not value-based uniqueness for arrays.
function subsets(arr){

    const results = [];
    const n = arr.length;

    //step 
    // sort array
    arr.sort((a,b) => a-b);

    function helper(i,subsets){
    //base case
    if(i===n){
        // console.log('subsets',subsets)
        return results.push([...subsets]);
    }

    //recursive case

     //include
     subsets.push(arr[i]);
     helper(i+1,subsets);
     subsets.pop(); //backtrack


     //exlude branch
     //ignore all the occurences of duplicate element
     let index = i;

     while(index < n && arr[index] === arr[index+1]){  
        index++;
     }
   
     //now index+1 would be a unique element
     
     helper(index+1,subsets);
    

    }


    helper(0,[]);

    return results;
}


console.log(subsets([1,3,3]));