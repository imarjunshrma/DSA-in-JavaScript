// The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

// For example, "ACGAATTCCG" is a DNA sequence.
// When studying DNA, it is useful to identify repeated sequences within the DNA.

// Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.


// Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// Output: ["AAAAACCCCC","CCCCCAAAAA"]

// s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
// var findRepeatedDnaSequences = function (s) {
//     let k = 10;
//     let s1 = s.split(""); //o(n)
//     let hashMap = {};
//     let output = new Set();
//     let firstOccurence = s1.slice(0, k); //o(1)
//     hashMap[firstOccurence.join('')] = 0;
//     for (let i = k; i < s1.length; i++) { //o(n-k)
//         firstOccurence.shift(); //o(k)
//         firstOccurence.push(s1[i]); //o(1)
//         let firstOccurenceStr = firstOccurence.join(""); //o(k)
//         if (firstOccurenceStr in hashMap) {
//             hashMap[firstOccurenceStr] = hashMap[firstOccurenceStr] + 1;
//             // output.push(firstOccurenceStr);
//             output.add(firstOccurenceStr);
//         } else {
//             hashMap[firstOccurenceStr] = 0;
//         }
//     }

//     // console.log(hashMap);
//     return Array.from(output); //o(x)
// };



//optimal solution
//approach1
var findRepeatedDnaSequences1 = function (s) {
    const sequence = new Set();
    const patterns = new Set();
    const k = 10;

    for (let i = 0; i <= s.length - k; i++) {
        const subStr = s.slice(i, i + k);
        if (sequence.has(subStr)) {
            patterns.add(subStr);
        } else {
            sequence.add(subStr)
        }
    }

  return Array.from(patterns);
}

var findRepeatedDnaSequences = function(nums) {
    let k = 10;
    // h = h * a - nums[start  - 1] * a^l + nums[start + l -1]
    //initially count hash of first window
    // a - 0
    // c - 1
    // g - 2
    // t - 3
    let obj = {
        A:0,
        C:1,
        G:2,
        T:3
    }
    let hash = 0;
    let sequence = new Set();
    let pattern = new Set();
    for(let i = 0; i < k ; i++){
        //  hash += Math.pow(4,(k - i - 1)) * obj[nums[i]];
        hash = hash * 4 + obj[nums[i]];
    }
    sequence.add(hash); //storing index related to that hash
    for(let i = 1; i < nums.length - k + 1;i++){
         hash = hash * 4 - obj[nums[i - 1]] * Math.pow(4,k) + obj[nums[i + k - 1]];
        if(sequence.has(hash)){
            pattern.add(nums.slice(i,i+k));
        }else{
            sequence.add(hash)
        }
        // console.log("new hash",newHash)
    }
   return Array.from(pattern);
  
};

// var findRepeatedDnaSequences2= function(s){

//     const sequence = new Set();
//     const patterns = new Set();

//     const k = 10; //length of sub string

//     const L = s.length;

//     const a = 4; //base 4
//     const h = 0; //previous hash 

//     for(let i = 0; i < L - k + 1; i++){
//      if(i === 0){
//         //count hash of first sequence
//          for(let i = 0; i<k;i++){
//             h = h + Math.pow(a,k-1);
//          }
//      }else{
//      // h = h * base + nums[start + k -1] - nums[start - 1] * base^k
//      }
//     }









// }






//approach2
//rabin karp alogrithm (polinmal hashing technique)
console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"))