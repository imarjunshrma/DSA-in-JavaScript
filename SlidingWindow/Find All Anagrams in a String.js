

//not optimised solution
//error - >Output Limit Exceeded

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {

    let required = {};
    for (let i = 0; i < p.length; i++) {
      required[p[i]] = (required[p[i]] || 0) + 1;
    }
    let left = 0;
    let current = {};
    let output = [];
    let need = Object.keys(required).length;
    let neededLength = p.length;
    let have = 0;
    for (let right = 0; right < s.length; right++) {
      let currEle = s[right];     
      current[currEle] = (current[currEle] || 0) + 1;
      if (current[currEle] === required[currEle]) {
        have++;
      }

      while ( right - left + 1 > neededLength) {
        let currEle = s[left];
        if (current[currEle] === required[currEle]) {
          have--;
        }
        current[currEle]--;
        left++;
  
      }
  
      if (need === have) {
      output.push(left);
      }
    }
  
  return output;
  };