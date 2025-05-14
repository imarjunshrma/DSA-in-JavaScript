//impliment a queue with stack
//fifo insert from rear and remove from beginig

class Stack {
    constructor() {
        this.items = [];
        this.size = this.items.length;
    }

    push(value) {
        this.items.push(value);
        this.size++;
        return this;
    }
    pop() {
        if (this.size === 0) return -1;
        const element = this.items.pop();
        return element
    }

}


class QueueWithStack {

    constructor(){
        // this.stack = new Stack();
        this.item = [];
    }

    //insert from rear
    enqueue(value){
     this.item.push(value); // push from rear
    }

    //remove from begining
    dequeue(){

    }

    //remove from begining
}