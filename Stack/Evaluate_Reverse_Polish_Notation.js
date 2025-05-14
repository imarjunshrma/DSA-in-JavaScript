// Evaluate Reverse Polish Notation



// reverse polish notation is Reverse Polish Notation (RPN), also called postfix notation, is a way of writing mathematical expressions where the operator comes after the operands.
//Operands are written first.Operators follow the operands immediately after the 2 required numbers.
const evaluate = {
    "+": (n1, n2) => n1 + n2,
    "-": (n1, n2) => n1 - n2,
    "*": (n1, n2) => n1 * n2,
    "/": (n1, n2) => Math.trunc(n1 / n2)
}
var evalRPN = function (tokens) {

    let stack = []; //stack using array

    for (let token of tokens) {
        if (token in evaluate) {
            let n2 = stack.pop();
            let n1 = stack.pop();
            const output = evaluate[token](n1, n2);
            stack.push(output)
        } else {
            stack.push(parseInt(token));
        }
    }

    return stack.pop();
};

console.log(evalRPN(["2","1","+","3","*"]));