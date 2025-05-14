var generateSubarrays = function(nums) {
    let subarrays = [];

    function helper(i, sub) {
        if (sub.length > 0) { // Only push non-empty subarrays
            subarrays.push([...sub]);
        }

        for (let j = i; j < nums.length; j++) {
            sub.push(nums[j]);  // Include current element
            helper(j + 1, sub); // Recurse for next index
            sub.pop();          // Backtrack (remove last element)
        }
    }

    helper(0, []);
    return subarrays;
};