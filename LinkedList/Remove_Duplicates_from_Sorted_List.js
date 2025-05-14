
// Given the head of a sorted linked list, delete all duplicates such that each element appears only once. Return the linked list sorted as well.



//[1,2,2,2,3]

class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}
//link list class use val not value
var deleteDuplicates = function (head) {
    let current = head;
    while (current) {
        let next = current.next;

        while (next && current.val === next.val ) {
            next = next.next;
        }
        current.next = next;
        current = next;
    }
};

function deleteDuplicates(head){
    let prev = null;
    // let head = convertIntoLinkedList(head1);
    let current = head;

    
    while(current !== null){
        let next = current.next;
      if(prev && prev.val === current.val){
          prev.next = next; //remove duplicate element
      }else{
          prev = current;
        }
        current = next;
    }
    
    return head;
}

// Input: head = [1,1,2]
//create linked list
let input = [1, 1, 2];

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
deleteDuplicates(head);
// console.log(head);