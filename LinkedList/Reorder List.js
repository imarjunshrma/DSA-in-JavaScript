// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.


var reorderList = function(list) {
    let stack = [];
     let head = list;
     let curr = head;
     
     
     while(curr){
       stack.push(curr);
       curr = curr.next;
     }
     
     let trav = list;
     let prev = null;
     let n = stack.length;
     let counter = 0;
     while(counter < Math.floor(n/2)){
       let next = trav.next;
       let node = stack.pop();
       // node.next = null; //remove previous connections
       // console.log("node",node,trav);
       trav.next = node;
       node.next = next;
       prev = trav;
       trav = next;
       counter++;
     }
     trav.next = null;
     // console.log(linkedListToArray(head))
   };


   var reorderList = function(list) {
    //using fast and slow pointer
    
   // console.log(linkedListToArray(list))
    let slow = list;
    let fast = list;
    
    while(fast && fast.next){
      slow = slow.next;
      fast = fast.next.next;
    }
     // console.log(linkedListToArray(list))
    // reverse this 
    
    let prev = null;
    let curr = slow;
    
    while(curr){
      let next = curr.next;
      curr.next = prev;
      
      prev = curr;
      curr = next;
    }
    //this made list half
    
     let first = list;
     let second = prev;
   
     while(first && second){
      let next = first.next;
       let next2 = second.next;
   
       first.next = second;
       second.next = next;
       
       second = next2;
       first = next;  
     }
   
     if(first) first.next = null;
     // nCurr.next = null;
     // prev.next = null;
    console.log(list,prev);
    
    
   // console.log(linkedListToArray(list))
   };
   