// Breadth-First Search

//   10
//  /   \
// 8     12
// /\    / \
// 6  9  14 16

var breadthFirstSearch = function (root) {
    const queue = [];
    queue.push(root);
    const output = [];

    while (queue.length > 0) {
        const element = queue.shift();
        output.push(element);
        if (element.left !== null) queue.push(element.left);
        if (element.right !== null) queue.push(element.right);
    }

    return output;
}
