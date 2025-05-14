// Given the head of a singly linked list, reverse the list, and return the reversed list.
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

var reverseList = function(head) {
    let prev = null;
    let current = head;

    while(current){
        let next = current.next; // so that next can be remember
        current.next = prev;
        prev = current;
        current = next; //move to the next node
    }
    // console.log(head);
    return prev; //return the new head
};

let input = [1,2,3,4,5];

let head = null;
let current = null;
input.forEach(element => {
    const node = new Node(element);
    // console.log("element1",current);
    if (head) {
        current.next = node;
        current = node;
    } else {
        head = node;
        current = node;
    }
    // console.log("element",current);
})

// console.log("head",head);


console.log(reverseList(head));