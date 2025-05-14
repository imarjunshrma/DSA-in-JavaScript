// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

// Note that you don't need to modify intervals in-place. You can make a new array and return it.

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]


var insert = function(intervals, newInterval) {
    let output = [];
    
    for(let i =0 ;i<intervals.length;i++){
        const element = intervals[i];
        const s1 = element[0];
        const e1 = element[1];
        //new interval can comes before
        if(newInterval[1] < s1){
            output.push(newInterval);
            output.push(...intervals.slice(i));
            return output;
        }
        //new Interval comes after
        else if(newInterval[0] > e1){
            output.push(element);
        }
        else{
            //e1 > newInterval[0]
               newInterval = [Math.min(s1,newInterval[0]),Math.max(e1,newInterval[1])];
        }
        // after
        //otherwise overlap
    }
    //if not return
    output.push(newInterval);
    return output;
}