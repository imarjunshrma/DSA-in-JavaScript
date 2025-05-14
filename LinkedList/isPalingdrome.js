// Given the head of a singly linked list, return true if it is a palindrome or false otherwise.


var isPalindrome = function (head) {
    //find the middle of a linked list
    let slow = head;
    let fast = head;


    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    //compare right part to left part

    let prev = null;
    while (slow) {
        let next = slow.next;
        slow.next = prev;
        prev = slow;
        slow = next;
    }

    //compare both halfs
    let right = prev;
    let left = head;
    while (right) {
        if (right.value !== left.value) return false;

        right = right.next;
        left = left.next;
    }

    return true;
};