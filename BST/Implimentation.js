class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    breadthFirst() {
        //edge case
        if (!this.root) return [];
        //write code here
        const queue = []; //impliment queue as an array to save time not a efficient
        const output = [];

        queue.push(this.root);

        while (queue.length > 0) {
            const element = queue.shift();
            output.push(element.value);
            if (element.left) {
                queue.push(element.left);
            }
            if (element.right) {
                queue.push(element.right);
            }
        }
        return output;
    }



    deapthFirst() {
        if (!this.root) return [];
        const output = [];

        //inorder traversal
        function traverse(current) {
            if (current.left) traverse(current.left); //explore left
            output.push(current.value);
            if (current.right) traverse(current.right); //explore right
        }
        traverse(this.root);
        return output;
    }
}
// Example usage:
const bst = new BinarySearchTree();
bst.root = new Node(40);
bst.root.left = new Node(20);
bst.root.left.left = new Node(12);
bst.root.left.right = new Node(22);
bst.root.right = new Node(42);
bst.root.right.left = new Node(41);
bst.root.right.right = new Node(45);
console.log(JSON.stringify(bst));
// console.log(bst.breadthFirst()); // [1, 2, 3]