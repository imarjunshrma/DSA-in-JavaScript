var addTwoNumbers = function (l1, l2) {

    let first = l1;
    let second = l2;
    let head = null;
    let current = null;
    let part = 0;
    // console.log(l1,l2)

    while (first || second) {
        let sum = part;
        if (first) {
            sum = sum + first.val;
            first = first.next;
        }
        if (second) {
            sum = sum + second.val;
            second = second.next;
        }

        let reminder = sum % 10;
        part = Math.floor(sum / 10);
        // console.log("reminder",reminder)
        // output.push(reminder);
        let newNode = new ListNode(reminder);
        if (head) {
            current.next = newNode;
            current = current.next;
            // head.next = newNode;
        } else {
            head = newNode;
            current = head;

        }
    }

    if (part !== 0) {
        let newNode = new ListNode(part);
        current.next = newNode;
    }

    return head;

}