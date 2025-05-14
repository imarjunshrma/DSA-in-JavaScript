

class Heap {
    constructor(input) {
        this.heap = [];
        // this.heap.concat(...input);
    }
    swap(array, left, right) {
        [array[left], array[right]] = [array[right], array[left]];
    }
    build(array) {
        //heapify algorithm perform
        //bottom up
        // bubble down or shift down approach
        //leafs nodes are always follor heap property

        // 0 to floor(n/2) - 1
        const iIndex = Math.floor(array.length / 2) - 1;
        // 0 to internalNodesIndex
        for (let i = iIndex; i >= 0; i--) {
            // console.log(array[i]);
            this.bubbleDown(array, i);
        }
        // console.log("out of loop....")
        // this.heap.push(...array);
        this.heap = array;

        return this.heap;
    }
    bubbleDown(array, index) {


        while (true) {
            let element = array[index]; //parent
            //children
            let leftChildIdx = 2 * (index) + 1; //2n + 1 , 2n + 2 
            let rightChildIdx = 2 * (index) + 2;
            
            // console.log("index",index,array[index],array[leftChildIdx],array[rightChildIdx])
            let largest = null;
            if (leftChildIdx < array.length && array[leftChildIdx] > element) {
                largest = leftChildIdx;
            }
            if(rightChildIdx < array.length){
                //right child index is valid
                //now check that 
                if((largest && array[rightChildIdx] > array[largest]) || (!largest && array[rightChildIdx] > element)){
                    largest = rightChildIdx;
                }
            }

            

            if (largest === null) break;
            this.swap(array, index, largest);
            //now heapify child also because swapping largest with elment
            index = largest;
        }
    }
    bubbleUp(array, index){
        while(index > 0){
            let parentIdx = Math.floor((index - 1)/2);
            // console.log("index",index,parentIdx,array[parentIdx],array[index])
            if(array[parentIdx] > array[index]) break; //no swap is required
            this.swap(array,parentIdx,index);
            index = parentIdx;
        }    
    }
    extractMax(){
        //remove root node
        //pop last element
        let lastElement = this.heap.pop();
        //put it on root
        this.heap[0] = lastElement;

        // now heapify this position
        this.bubbleDown(this.heap,0);

    }
    peek(){
        return this.heap[0];
    }

    insert(node){
        //always insert from last node
        this.heap.push(node);
        // now use bubble up approach and heapify array
        // this.bubbleUp()
        // for(let i = this.heap.length - 1; i>=0 ;i--){
        // }
        this.bubbleUp(this.heap,this.heap.length - 1);
    }

}

let heap = new Heap();
heap.build([3, 9, 2, 1, 4, 5]);
// console.log(heap.extractMax());
console.log(heap.heap);
heap.insert(20);
console.log(heap.heap);