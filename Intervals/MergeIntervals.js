//merge intervals
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// [[1,3],[2,6],[8,10],[15,18]]


var merge = function(intervals) {
    
    intervals.sort((a,b)=>a[0] - b[0]); //sort array in ascending order
    
    let mergedIntervals = [];
    mergedIntervals.push(intervals[0]);

    let i = 1;
    // [[1,3],[2,6],[8,10],[15,18]]
    while(i < intervals.length){
     let firstElement = mergedIntervals[mergedIntervals.length - 1][0]; //1
     let lastElement = mergedIntervals[mergedIntervals.length - 1][1]; //3
    // console.log("intervlas",intervals);
     if(intervals[i][0] <= lastElement){
        mergedIntervals.pop();
        mergedIntervals.push([firstElement,Math.max(lastElement,intervals[i][1])])
     }else{
        mergedIntervals.push(intervals[i]);
     }
     i++;
    }

    return mergedIntervals;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]]));
console.log(merge([[1,4],[4,5]]));