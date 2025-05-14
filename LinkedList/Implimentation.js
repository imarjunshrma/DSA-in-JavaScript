class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
//2-node of index 2 1.next
//1->2->3->4->null
//because oth index link list
 class SingleLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    getNode(index) {
        //edge case index is invalid
        if (index < 0 || index >= this.size) return -1;


        if (index === 0) return this.head;
        if (index === this.size - 1) return this.tail;

        let counter = 0;
        let node = this.head;
        while (counter !== index) {
            node = node.next;
            counter++;
        }
        return node;
    }

    //delete tail
    //add at tail 

    //add at head
    addAtHead(value) {
        const node = new Node(value);
        if (this.head === null) {
            this.tail = node;
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;

        return this;
    }

    //add at tail 
    addAtTail(value) {
        const node = new Node(value);
        if (this.head === null) {
            this.tail = node;
            this.head = node;
        } else {
            // const prevNode = this.getNode(this.size - 1);
            this.tail.next = node;
            this.tail = node;
        }
        this.size++;

        return this;
    }

    addNode(value, index) {
        if (index < 0 || index > this.size) return "Invalid index";

        if (index === 0) return this.addAtHead(value);
        if (index === this.size) return this.addAtTail(value);


        const prevNode = this.getNode(index - 1);
        const node = new Node(value);
        node.next = prevNode.next;
        prevNode.next = node;
        this.size++;
        return this;
    }
    //delete head
    deleteAtHead() {
        if (this.size === 0) return "List is empty"; // Handle empty list case
        let temp = this.head;
        this.head = temp.next;
        this.size--;
        if (this.size === 0){
            this.tail = null;
        }

        return temp;
    }
    deleteAtTail() {

        if (this.size === 0) return "List is empty"; // Handle empty list case
        const temp = this.tail;
        const prevNode = this.getNode(this.size - 2);
        prevNode.next = null;
        this.tail = prevNode;
        this.size--;
        //if size is 0 then head and tail will be same
        if(this.size === 0){
            this.head = null;
        }
        return temp;

    }
    deleteNode(index) {
        if (index < 0 || index >= this.size) return "Invalid index";
        if (index === 0) return this.deleteAtHead();
        if (index === this.size - 1) return this.deleteAtTail();

        const prevNode = this.getNode(index - 1); //prevNode
        const temp = prevNode.next;
        prevNode.next = temp.next;
        this.size --;
        return temp;
    }
    //add at index
    //delete at index
    printList(){
        let result = [];
        let counter = 0;
        let currentNode = this.head;

        while(counter < this.size){
            result.push(currentNode.value);
            currentNode = currentNode.next;
            counter ++;
        }

        console.log(result.join("->"));
    }
}

module.exports = SingleLinkedList;
// const Sl = new SingleLinkedList();
// for(let i = 0;i<5;i++){
//     Sl.addNode(i*5,i);
// }
// Sl.printList();

