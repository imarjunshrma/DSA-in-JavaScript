// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

var dailyTemperatures = function(temperatures) {
    let output = Array.from({length:temperatures.length}).fill(0);
    
    let stack = [];//monotonic increasing stack
    
    for(let i = 0;i<temperatures.length;i++){
      
      let j = stack.length - 1;
      
      while(j >= 0 && temperatures[stack[j]] < temperatures[i]){
        let popedIdx = stack.pop();
        
        let fIdx = i - popedIdx;
        // console.log(i,j,popedIdx);
        output[popedIdx] = fIdx;
        j--;
      }
      
      stack.push(i);
     
    }
    
    return output;
};