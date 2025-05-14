/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
function swap(i,j,words){
    let temp = words[j];
    words[j] = words[i];
    words[i] = temp;
}

function permutation(words){
    //return all permutations
    // let output = [];
    let output = new Set();
    
    function helper(i,permu){
        if(i === words.length - 1){
            // console.log("permu",permu);
            let str = "";
            permu.forEach(per => {
                str += per;
            })
            // output.push(str);
            output.add(str);
            return;
        }
        // console.log("helper...",i)
        
        for(let j = i;j < words.length;j++){
            // console.log("line 13..")
            // permu.push(words[j]);
            swap(i,j,words);
            helper(i+1,permu);
            swap(j,i,words);
        }
    }
    helper(0,words);
    return output;
    // console.log(output)
}

var findSubstring = function(s, words) {
    let length = words.length;
   const permu = permutation(words)
   
   let k = (words[0].length) * words.length;
   let output = [];
//   console.log(permu,permu.has("rabfoo"))
    //permutation
    
    for(let i =0;i<s.length - k + 1;i++){
        let currWindow = s.slice(i,i+k);
        // console.log(currWindow)
        if(permu.has(currWindow)){
            output.push(i);
        }
    }
    
    return output;
    
};
