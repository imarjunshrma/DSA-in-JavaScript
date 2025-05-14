

function mergeArray(left,right){

    let result = [];
    let i = 0;
    let j =0;

    while(i< left.length && j <  right.length){
        if(left[i] <= right[j]){
            result.push(left[i]);
            i++;
        }else{ 
            result.push(right[j]);
            j++;
        }
    }

    // console.log(i,left.length,j,right.length)
    //
    while( i < left.length){
     result.push(left[i]);
     i++;
    }

    while(j < right.length){
        result.push(right[j]);
        j++;
    }
    return result;
}
// 0(log n + m) to merge two arrays
var mergeSort = function(nums){

    function helper(nums){
        if(nums.length <= 1) return nums;
        let middle = Math.floor(nums.length/2);
    
        let left = helper(nums.slice(0,middle)); // slice -> o(n/2)
        let right = helper(nums.slice(middle));

        return mergeArray(left,right);
    }

    return helper(nums);
}
// n -> n/2 -> n/4 -> n/8

// logn * Log(n+m) * n
//nlogn or depth of recursion - o(n)
//worst case space can be o(n)
console.log(mergeSort([5, 3, 8, 6, 1, 9]));