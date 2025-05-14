// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.





var mergeTwoLists = function(list1, list2) {
    //merge both lists
    let left = list1;
    let right = list2
    let head = null;
    let curr = null;
    
    while(left && right){
      if(left.val <= right.val){
        if(!head){
          head = left;
          curr = left;
         
        }else{
          curr.next = left;
          curr = curr.next;
        }
        
         left = left.next;
      }else{
       // console.log(head);
         if(!head){
          head = right;
          curr = right;
        }else{
          curr.next = right;
          curr = curr.next;
        }
        
       right = right.next;
      }
    }
    
   // head.next = left || right;
   if(curr){
     curr.next = left || right;
   }else{
     curr = left || right;
     head = curr;
   }
   
   
   // console.log(linkedListToArray(head),linkedListToArray(curr))
   return head;
 };


 