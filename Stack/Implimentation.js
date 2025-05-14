//push
//pop
//peek
//isEmpty
//size

//stack implimentation
//time complexity is O(1) and space complexity is O(1)
//lifo
//add from top/front and remove from top
// -- enqueue and dequeue operations queue
//    front ->[2,3,4,5] - rear
// enter at beginning of qeuue
// remove from end of array
//
class Stack {
    constructor() {
        this.stack = [];
        this.size = 0;
    }
    //add an element to the stack
    push(element) {
        //  this.stack.push(element);
        this.stack[this.size] = element;
        this.size++;
    }
    //remove an element from the stack
    pop() {
        // check stack is not empty
        if (this.isEmpty()) return null;
        let lastElement = this.stack[this.size - 1];
        this.size--;
        this.stack.length = this.size;
        return lastElement;
    }
    isEmpty() {
        if (this.size == 0) return true;

        return false;
    }

    peek() {
        if (this.isEmpty()) return null;
        return this.stack[this.size - 1];
    }
}

//linked list
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class StackWithLinkedList {
    constructor() {
        // this.head = null; //front
        // this.tail = null; //rear
        this.head = null; //front
        this.tail = null; //rear
        this.size = 0;
    }

    //add from begining
    //add at head

    push(value) {
        const node = new Node(value);
        if (this.size === 0) {
            this.head = node;
            this.tail = node;
        } else {
            // 1->2
            let temp = this.head;
            node.next = temp;
            this.head = node;
        }
        this.size++;
        return this;
    }

    //remove at head
    //remove from tail
    pop() {
        //
        if (isEmpty()) return -1;
        let temp = this.head;
        this.head = temp.next;
        this.size--;

        if (this.size === 0) {
            this.tail = null;
        }
        return temp;
    }

    isEmpty() {
        return this.size === 0;
    }
}