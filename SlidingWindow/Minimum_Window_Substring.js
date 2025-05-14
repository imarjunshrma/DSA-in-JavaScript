// Given two strings s and t of lengths m and n respectively, return the minimum window 
// substring
//  of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

var minWindow = function (s, t) {

    let tCounts = {};
    let windowCounts = {};
    //iterate t and get the counts of every character
    for(let item of t){
        tCounts[item] = (tCounts[item] || 0) + 1;
  }


    let neededCritieras = Object.keys(tCounts).length;
    let currentCritieras = 0;

    let minLength = Infinity;

    let currentDirection = [-1,-1]; 
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        let el = s[right];
        windowCounts[el] = (windowCounts[el] || 0) + 1;

        //check this make a criteria 
        if (el in tCounts && tCounts[el] === windowCounts[el]) {
            currentCritieras += 1;
        }
        //
        while (neededCritieras === currentCritieras) {
            //try to move left pointer
            let cEl = s[left];
            windowCounts[cEl] = windowCounts[cEl] > 0 ? windowCounts[cEl] - 1 : 0;
            if (minLength > (right - left + 1)) {
                minLength = right - left + 1;
                currentDirection = [left, right]; // Update the best indices
            }
            if (cEl in tCounts && tCounts[cEl] > windowCounts[cEl]) {
                currentCritieras -= 1;
            }
            //move left pointer and try to find a minimum length window 
            left += 1;
        }
    }

    const [leftPointer,rightPointer] = currentDirection;
    return minLength === Infinity ? "" : s.slice(leftPointer, rightPointer + 1);
};


console.log(minWindow("ADOBECODEBANC", "ABC"));