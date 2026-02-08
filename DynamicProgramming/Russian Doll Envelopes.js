// You are given a 2D array of integers envelopes where envelopes[i] = [wi, hi] represents the width and the height of an envelope.

// One envelope can fit into another if and only if both the width and height of one envelope are greater than the other envelope's width and height.

// Return the maximum number of envelopes you can Russian doll (i.e., put one inside the other).

// Note: You cannot rotate an envelope.

 
var maxEnvelopes = function(pairs) {
    let n = pairs.length;
    pairs.sort((a,b) => a[0] - b[0]); //sort
  
    let dp = new Array(n).fill(1);
    let longest = 1;
    for(let i = 1;i<n;i++){
      let max = 1;
      for(let j = 0;j<i;j++){
        if(pairs[i][0] > pairs[j][0] && pairs[i][1] > pairs[j][1]){
          max = Math.max(max,1 + dp[j]);
        }
      }
      
      dp[i] = max;
      if(max > longest) longest = max;
    }
    
    return longest;
};

//lis approach

function binarySearch(nums,target){
  let start = 0;
  let end = nums.length - 1;
  
  while(start <= end){
    let mid = Math.floor((start + end)/2);
    if(target > nums[mid]){
      start = mid + 1;
    }else{
      end = mid - 1;
    }
  }
 return start;
}

//

var lengthOfLIS = function(nums) {
    let n = nums.length;
    let dp = new Array(n);
    nums.sort((a,b)=> a[0] === b[0] ? b[1] - a[1] : a[0] - b[0])
    //if height is same then sort by deascending order
    //because we are considering height only
    //so if we do in ascending then [4,5,6]; will be considered lis
    console.log(dp);
    
    dp.push(nums[0]); //push first element
    
    for(let i = 1;i<n;i++){
      const num = nums[i][1];
      if(num > dp[dp.length - 1]){
        dp.push(num);
      }else{
        const index = binarySearch(dp,num);
        dp[index] = num;
      }
    }
}
