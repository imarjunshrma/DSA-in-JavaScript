// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

//brute force approach
// var hasCycle = function(head) {
//     // console.log(head);
//     let hashTable = {};

//     let current = head;
//     while(current){
//         if(current.value in hashTable){
//             return current.value;
//         }else{
//           hashTable[current.value] = true;
//         }
//         current = current.next;
//     }

//     return false;

// };

//tortoise and hare algorithm

// var hasCycle = function(head) {
//     let map = new Map(); // Use an object to store visited nodes
//     let current = head;

//     while (current !== null) {
//         // console.log(current)
//         if (map.has(current)) { // Correct way to check if node is visited
//         // console.log(current)
//             return true; // Cycle detected
//         }
//         map.set(current); // Mark node as visited
//         current = current.next;
//     }

//     return false; // No cycle found
// };

class Node {
    constructor(value) {
        this.val = value;
        this.next = null;
    }
}
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
//slow and fast pointer approach
//floid torotial and hare algorithm
var hasCycle = function (head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) break;
    }

    if(slow !== fast) return false;
   
    let p1 = head;
    let p2 = fast;

    while(p1 !== p2){
        p1 = p1.next;
        p2 = p2.next;
    }
    return p1;
}

console.log(hasCycle(head));