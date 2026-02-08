// Given an integer array nums, return the length of the longest strictly increasing 
// subsequence


//time -> 2 ^n and space -> o(n)
var lengthOfLISRecursionApproach = function (nums) {
  let len = nums.length;

  function helper(curr, prev) {
    //base case
    if (curr >= len) return 0;

    //recursive case

    //exclude
    let exclude = helper(curr + 1, prev);

    //include
    let include = 0;

    if (nums[curr] > nums[prev] || prev === -1) {
      include = 1 + helper(curr + 1, curr);
    }

    return Math.max(exclude, include);

  }

  return helper(0, -1);
};

//memoization
//n+1 -> offset because prev = -1
var lengthOfLISMemoizationApproach = function (nums) {
  let n = nums.length;

  let memo = Array.from({ length: n }, () => new Array(n + 1).fill(-1));
  // console.log(memo);
  //store computations
  function helper(curr, prev) {
    // console.log("helper...")
    //base case
    if (curr >= n) return 0;

    //recursive case

    if (memo[curr][prev + 1] !== -1) {
      return memo[curr][prev + 1];
    }
    //exclude
    let exclude = helper(curr + 1, prev);

    //include
    let include = 0;

    if (nums[curr] > nums[prev] || prev === -1) {
      include = 1 + helper(curr + 1, curr);
    }

    // console.log("here..",curr,prev)
    memo[curr][prev + 1] = Math.max(exclude, include);
    return memo[curr][prev + 1];

  }

  // console.log(memo)

  return helper(0, -1);
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))
//memoization 
//simple memoize


//tabulation
var lengthOfLISTabulationWith2DArrayApproach = function (nums) {
  let n = nums.length;
  let dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
  // console.log(dp);

  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j >= 0; j--) {
      let exclude = dp[i + 1][j];

      let include = 0;
      if (j - 1 === -1 || nums[j - 1] < nums[i]) {
        include = 1 + dp[i + 1][i + 1];
      }

      dp[i][j] = Math.max(exclude, include);
    }
  }
  return dp[0][0];
}

//tabulation using 1d array
var lengthOfLISTabulationWith1DArrayApproach = function (nums) {
  let n = nums.length;
  let dp = new Array(n).fill(1);

  let longest = 1;
  for (let i = 1; i < n; i++) {
    let max = 0;

    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        max = Math.max(dp[j], max);
      }
    }
    dp[i] = 1 + max;
    if (dp[i] > longest) longest = dp[i]; //to assign longest
  }
  return longest;
  // return dp[n-1];
}


//using binary search approach

let binarySearch = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;

  //element that is greater than target 
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (target > nums[mid]) {
      //in right part
      start = mid + 1;
    } else {
      //in left part

      end = mid - 1;
    }
  }
  return start;
}
//smallest element that is greater than

var lengthOfLIS = function (nums) {
  let n = nums.length;
  let dp = [];
  dp.push(nums[0]);
  // console.log(dp);

  for (let i = 1; i < n; i++) {
    let num = nums[i];
    if (num > dp[dp.length - 1]) {
      dp.push(num);
    } else {
      //find the smallest that is greater than from our elemnt
      const index = binarySearch(dp, num);
      dp[index] = num;
      // console.log(index)
      //and replace
    }
  }

  return dp.length;
};



console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))