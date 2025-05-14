//this approach will not work for [1] one element 
//what's solution
var removeNthFromEnd = function(head, n) {
    let dummy = new Node(-1);
    dummy.next = head;
    let slow = dummy;
    let fast = dummy;
    
    // console.log(fast)
    //move fast pointer already n steps to create difference
    
    for(let i = 0;i<=n;i++){
      // if(fast.next)
      fast = fast.next;
    }
    
    while(fast){
      fast = fast.next;
      slow = slow.next;
    }
    // console.log(linkedListToArray(slow),linkedListToArray(fast))
    slow.next = slow.next.next;
    
    // console.log(linkedListToArray(head));
  
   return head;
};
