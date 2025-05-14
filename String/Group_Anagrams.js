// Given an array of strings strs, group the 
// anagrams
//  together. You can return the answer in any order.

var groupAnagrams = function(strs) {
    let sortStrs = [];
    for(let element of strs){
        let sortSring = element.split("").sort().join("");
        sortStrs.push(sortSring); //o(1)
    }
    //
    // comparison
    let hashMap = {};
    for(let i=0;i<sortStrs.length;i++){
     let element = sortStrs[i];
     if(element in hashMap){
         hashMap[element].push(strs[i]);
     }else{
         hashMap[element] = [strs[i]];
     }
    }

    // console.log(hashMap);
    return Object.values(hashMap);

};

console.log(groupAnagrams([""]));