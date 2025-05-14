function maxheapify(array,i){
   let n = array.length;
    while( true ){
        let leftChildIdx = 2 * i + 1;
        let rightChildIdx = 2 * i + 2;
        
        let largest = i;

        if(leftChildIdx < n && array[leftChildIdx] > array[largest]){
            largest = leftChildIdx;
        }
        if(rightChildIdx < n && array[rightChildIdx] > array[largest]){
            largest = rightChildIdx;
        }


        if(largest === i) break;


        //swap largest and i
        [array[i],array[largest]] = [array[largest],array[i]];
        i = largest;   
    }

    
}
function minHeapify(array,i){
    let n = array.length;
     while( true ){
         let leftChildIdx = 2 * i + 1;
         let rightChildIdx = 2 * i + 2;
         
         let smallest = i;
 
         if(leftChildIdx < n && array[leftChildIdx] < array[smallest]){
            smallest = leftChildIdx;
         }
         if(rightChildIdx < n && array[rightChildIdx] < array[smallest]){
            smallest = rightChildIdx;
         }
 
 
         if(smallest === i) break;
 
 
         //swap largest and i
         [array[i],array[smallest]] = [array[smallest],array[i]];
         i = smallest;   
     }
 
     
 }
 var findKthLargest = function (nums, k) {
    let minHeap = [];
    //let's take a k size min heap

    for (let i = 0; i < k; i++) {
        minHeap.push(nums[i]);
    }
    //now heapify this array
    for (let i = Math.floor(k / 2) - 1; i >= 0; i--) {
        minHeapify(minHeap,i);
    }


    //
    for(let i = k;i<nums.length;i++){
        if(nums[i] > minHeap[0]){
            // minHeap.push(nums[i]);
            // if(minHeap.length > k){
            //     let popedElement = minHeap.pop();
            //     minHeap[0] = popedElement;
            //     minHeapify(minHeap,0);
            // }
            
            minHeap[0] = nums[i]; // Directly replace root
            minHeapify(minHeap, 0); // Heapify the root
        }
    }

   console.log(minHeap);
    return minHeap[0];
};


console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
// 3,2,1,5
//1,2,3,5