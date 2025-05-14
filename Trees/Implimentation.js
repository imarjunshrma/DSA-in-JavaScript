//   10
//  /   \
// 8     12
// /\    / \
// 6  9  14 16

// 7

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
//
class BinarySearchTree {
    constructor() {
        this.root = null;
    }
    insert(value) {
        const node = new Node(value);
        if (this.root == null) return this.root = node;

        let current = this.root;
        while (current) {
            if (value < current.value) {
                //left
    
                if(current.left === null){
                    current.left = node;
                }else{
                    current = current.left;
                }
            } else {
                current = current.right;
                if(current === null){
                    current.right = node;
                }
            }
        }

        current = node;


    }
}

const b1 = new BinarySearchTree();
b1.insert(10);
b1.insert(12);
b1.insert(8);
b1.insert(6);
console.log(b1);