var topKFrequent = function(nums, k) {
    let hashMap = {};
    
    //frequency
    nums.forEach(num => {
      hashMap[num] = (hashMap[num] || 0) + 1;
    }) //o(n)
    
    // console.log(hashMap);
    let heap = new Heap;
    //min heap
    
    let keys = Object.keys(hashMap); // O(n)
    // console.log(keys)
   
    heap.build(keys.slice(0,k)); //this will create heap and heapif  // o(k)
    
    // console.log(heap,keys);
    
    for(let i = k;i<keys.length;i++){ // o(n)
      let value = hashMap[keys[i]];
      if(value > hashMap[heap.heap[0]]){
        heap.heap[0] = keys[i];
        
        //bubble down
        heap.bubbleDown(heap.heap,0); // o(logn)
      }
    }
    //nlogn
    
    console.log(heap.heap);
    return heap.heap;
    
};

//time complexity o(nlogk)
//space - o(n) + o(k)