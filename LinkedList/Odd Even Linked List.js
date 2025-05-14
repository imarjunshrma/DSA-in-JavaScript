// Given the head of a singly linked list, group all the nodes with odd indices together followed by the nodes with even indices, and return the reordered list.

// The first node is considered odd, and the second node is even, and so on.

// Note that the relative order inside both the even and odd groups should remain as it was in the input.

// You must solve the problem in O(1) extra space complexity and O(n) time complexity.


var mergeTwoLists = function(head) {
    let odd = head;
    let even = head.next;
    let evenHead = even;
    
    
    while(odd && odd.next){
        odd.next = even.next;
        odd = even.next;
        
        even.next = odd.next;
        even = odd.next;
    }
    
  //   console.log(convertListToArray(evenHead),convertListToArray(head))
    
  //   head.next = even;
     odd.next = evenHead;
    console.log(convertListToArray(head));
  };