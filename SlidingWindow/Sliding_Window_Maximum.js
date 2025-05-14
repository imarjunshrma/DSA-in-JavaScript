// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler
var maxSlidingWindow = function (nums, k) {
    let output = [];
    let dequeue = []//store sliding window

    // element greather than maximum no logner required to remember

    for (let i = 0; i < k; i++) {
        let x = dequeue.length - 1;
        while (dequeue.length && nums[x] < nums[i]) {
            dequeue.pop();
            x--;
        }
        dequeue.push(i);
    }

    output.push(nums[dequeue[0]]);

    for (let i = k; i < nums.length; i++) {
        // console.log(dequeue);


        // Remove elements that are out of the sliding window
        // beyound the window
        if (dequeue.length && i - k === dequeue[0]) {
            dequeue.shift();
        }

        let x = dequeue.length - 1;
        while (dequeue.length && nums[x] < nums[i]) {
            dequeue.pop();
            x--;
        }


        // Add current index to deque
        dequeue.push(i);


        output.push(nums[dequeue[0]]);
    }

    // console.log(dequeue);

    return output;

};

console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));