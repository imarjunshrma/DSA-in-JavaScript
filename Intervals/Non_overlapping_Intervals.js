// Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.

// Note that intervals which only touch at a point are non-overlapping. For example, [1, 2] and [2, 3] are non-overlapping.

var eraseOverlapIntervals = function(intervals) {
    //SORT INTERVALS ARRAY
    intervals.sort((a,b)=> a[0] - b[0]);

    let previous = 0;
    let count = 0;
    for(let i = 1;i<intervals.length;i++){
        const element = intervals[i];

        // [1,5] [3,4]
        if(intervals[previous][1] > element[0]){
            //overlap
            //remove higher end value
            count++;
          if(intervals[previous][1] > element[1]){
            previous = i;
          }
          //assgin previous to min value
        }else{
            //not overlap
            previous = i;

        }
    }
    return count;
};


//insetead of assign previous to previous end value
var eraseOverlapIntervals1 = function(intervals) {
    //SORT INTERVALS ARRAY
    intervals.sort((a,b)=> a[0] - b[0]);

    let previous = intervals[1];
    let count = 0;
    for(let i = 1;i<intervals.length;i++){
        const element = intervals[i];

        // [1,5] [3,4]
        if(previous > element[0]){
            //overlap
            //remove higher end value
            count++;
        
            previous = Math.min(previous,element[1]);
        }else{
            //not overlap
           previous = element[1];

        }
    }
    return count;
};