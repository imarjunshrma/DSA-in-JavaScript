//quick sort


//choose element as pivot apply quick sort on left and right part
// 9 3 4 5 6 7
// 4 3 9 5 6 7
//5 2 3 1
// 2 5 3 1
// smaller pivot greater
const getPivot = (nums,start,end) => {

    const middle = Math.floor((start + end)/2);
    const pivot = nums[middle];
    //swap middle with first element
    [nums[start],nums[middle]] = [nums[middle],nums[start]]
    // console.log('nums',nums);
    let i = start + 1;
    let j = end;
    while(i <= j){
        //left greater , right smaller

        while(nums[i] <= pivot){
            i++;
        }

        while(nums[j] > pivot){
        j--;
        }

        if(i < j){
            [nums[i],nums[j]] = [nums[j],nums[i]];
        }
    }

    [nums[j],nums[start]] = [nums[start],nums[j]];
    return j;
}
var quickSort = function(nums,start=0,end=nums.length - 1) {
    // console.log(start,end)
    if(start < end){
        let pivot = getPivot(nums,start,end);
        quickSort(nums,start,pivot-1);
        quickSort(nums,pivot+1,nums.length - 1);
    }
    return nums;
};


console.log(quickSort([5,2,3,1]))



// another approach
// otmise space complexity
// on lower size subArray
function swap(nums,first,second){
    [nums[first],nums[second]] = [nums[second],nums[first]];
}

//4 7 7
function getPivot(nums,start,end){
    let pivotIndex = Math.floor((start + end)/2);
    let pivot = nums[pivotIndex];
    
    //swap start and pivot element
    swap(nums,start,pivotIndex);
    
    let i = start + 1;
    let j = end;
    
    while(i <= j){
        while(nums[i] <= pivot){
            i++;
        }
        while(nums[j] > pivot){
            j--;
        }
        
        if(i < j){
            swap(nums,i,j);
        }
    };
    swap(nums,j,start);
    return pivotIndex;
    
}

var quickSort = function(nums,start = 0,end=nums.length - 1){
    //find a pivot call partition function
    // if(start < end)
    while(start < end){
    let pivotIndex = getPivot(nums,start,end);
    //check which subArray is smaller
    
    //left is smaller
    if(pivotIndex - start <= end - pivotIndex){
        quickSort(nums,start,pivotIndex - 1);
        start = pivotIndex + 1; // shift things on right subArray
    }else{
        quickSort(nums,pivotIndex + 1,end);
        end = pivotIndex - 1;
    }
    }
  
  return nums;
}
