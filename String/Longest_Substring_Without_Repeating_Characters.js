// Given a string s, find the length of the longest 
// substring
//  without repeating characters.
//both are same apporach just different way to write
// var lengthOfLongestSubstring = function(s) {
//     let maxLength = 0;
//     let windowCounts = {};
    
//     let left = 0;
//     for(let right = 0;right < s.length;right ++){
//         let element = s[right];
//          windowCounts[element] = (windowCounts[element] || 0) + 1;
         
//        //duplicate element
//         while(left < right &&(windowCounts[element] && windowCounts[element] > 1)){
//              let element1 = s[left];
//              windowCounts[element1] = (windowCounts[element1] || 0) - 1;
//             left++;
//         }
        
       
         
//          maxLength = Math.max(right - left + 1,maxLength);
//     }
//     return maxLength;
// };
var lengthOfLongestSubstring = function (s) {

    let start = 0;
    let hashMap = {};
    let maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        let element = s[i];

        if (element in hashMap) {
            start = Math.max(start,hashMap[element] + 1);
        }
        maxLength = Math.max(maxLength, i - start + 1);
        hashMap[element] = i;
    }
    return maxLength;
};

var lengthOfLongestSubstring = function(s) {
    
    
    let maxLength = 0;
    let curr = {};
    
    let left = 0;
    
    for(let right = 0;right<s.length;right++){
      //
      let ele = s[right];
      curr[ele] = (curr[ele] || 0) + 1;
      
      // console.log(curr,ele);
      
      //move left pointer till than ele frequency is 
      while(left < right && curr[s[right]] > 1){
         curr[s[left]]--; // move left pointer
        left++;
      }
      
      if(right - left + 1 > maxLength){
        //current length is greater than max length
        maxLength = right - left + 1;
      }
      
    }
    
    // console.log(maxLength)
    return maxLength;
};

console.log(lengthOfLongestSubstring("bbbbb"))