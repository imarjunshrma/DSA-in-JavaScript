//operations
//enqeue and deqeue


//[] - add from rear and remove from front this is typically queue behaviour
//rear = end of array
//front = start of array

//dequeue operation is not optimal in term of this
// need to use linked list for 0(1) time
class Queue {
    constructor() {
        this.queue = [];
        this.front = -1;
        this.rear = -1;
        this.size = 0;
    }

    enqueue(value) {
        this.rear++;
        if (this.front === -1) this.front++;
        this.size++;
        this.queue[this.rear] = value;
    }

    dequeue() {
        if (this.isEmpty()) return -1;
        const deletedValue = this.queue[this.front];

        for (let i = 0; i < this.size; i++) {
            this.queue[i] = this.queue[i + 1];
        }
        this.front++;
        this.size--;

        if (this.isEmpty()) {
            this.rear = -1;
            this.front = -1;
        }
        return deletedValue;
        // this.queue[]

    }
    isEmpty() {
        if (this.size === 0) return true;
        return false;
    }
    peek() {
        if (this.isEmpty()) return -1;

        return this.queue[this.front];
    }
}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
//insert from rear and remove from begining

class QueueWithLinkedList {
    constructor() {
        this.head = null; //front
        this.tail = null; //rear
        this.size = 0;
    }
    enqueue(value) {
        const node = new Node(value);
        if (this.size === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;
    }
    //remove from begining
    dequeue() {
        if(this.isEmpty()) return -1;
        let temp = this.head;
        this.head = this.head.next;
        this.size--;

        if(this.size === 0){
            this.tail = null;
        }
        return temp;
    }

    isEmpty() {
        return this.size === 0;
    }
}