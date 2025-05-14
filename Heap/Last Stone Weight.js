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
  
  function maxheapifybubbleUp(array,i){
    let n = array.length;
    
    while(i > 0){
      //n -> 2n+1
      let parentIdx = Math.floor((i-1)/2);
      
      if(array[i] < array[parentIdx]) break;
      //already heapify
      
      [array[parentIdx],array[i]] = [array[i],array[parentIdx]];
      i = parentIdx;
    }
  }
 
 var lastStoneWeight = function(stones) {
     let heap = [];
     
     heap.push(...stones);
     let n = heap.length;
     //n -> 2n+1 
     let internalNodes = Math.floor(n/2);
     // console.log(internalNodes);
     for(let i = internalNodes - 1; i >= 0;i--){
       maxheapify(heap,i);
     }
     // console.log(heap);
     // let secondHeap = heap; //size k
     function extractmax(){
       if (heap.length === 1) return heap.pop(); // Avoid assigning undefined
       let last = heap.pop();
       let first = heap[0];
       heap[0] = last;
       maxheapify(heap,0);
       return first;
     }
     while(heap.length > 1){
       // console.log(heap);
      let y =  extractmax();
      let x = extractmax();
     // console.log("y,x",y,x);
      if(y !== x){
        let remainWeight = Math.abs(y - x);
        heap.push(remainWeight);
        maxheapifybubbleUp(heap,heap.length - 1);
        // heapify but bubbleUp approach
      }
     }
     
     // console.log(heap);
     return heap.length > 0 ? heap[0] : 0;
 };

 //otherise use pop and push and sorting(ascending) o(n2)-> time complexity

 //sort descending order - remove from front and push