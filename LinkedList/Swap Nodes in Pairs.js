// Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)


var swapPairs = function(list) {
    let dummy = new Node(-1);
    dummy.next = list;
    let curr = list;
    let prev = dummy;
   // let prev = new Node(-1);
   // let head = null;
    
    while(curr && curr.next){
      
     let next = curr.next;
     let superNext = next.next;
     
     
     curr.next = next.next;
     prev.next = next; 
   
     next.next = curr;
     // list = prev;
     prev = curr;
     curr = curr.next;
     // console.log(curr);
    }
    
    console.log(linkedListToArray(dummy.next))
   };