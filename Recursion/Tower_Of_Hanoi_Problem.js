// The tower of Hanoi is a famous puzzle where we have three rods and N disks. The objective of the puzzle is to move the entire stack to another rod. You are given the number of discs N. Initially, these discs are in the rod 1. You need to print all the steps of discs movement so that all the discs reach the 3rd rod. Also, you need to find the total moves.



// Note: The discs are arranged such that the top disc is numbered 1 and the bottom-most disc is numbered N. Also, all the discs have different sizes and a bigger disc cannot be put on the top of a smaller disc. Refer the provided link to get a better clarity about the puzzle.







// Towers of Hanoi: In the classic problem of the Towers of Hanoi, you have 3 towers and N disks of different sizes which can slide onto any tower. The puzzle starts with disks sorted in ascending order of size from top to bottom (i.e., each disk sits on top of an even larger one).




// You have the following constraints:

// (1) Only one disk can be moved at a time.
// (2) A disk is slid off the top of one tower onto another tower.
// (3) A disk cannot be placed on top of a smaller disk. Write a program to move the disks from the first tower to the
// last using Stacks.


//let's suppose we have 3 roads r1,r2(to) and r3(auxiliary/helper road)
//so just move n-1 roads from r1 to r3 - recursive case (r2 helper road)
//move nth road from r1 to r2 - print statement
//move n-1 roads from r3 to r2  - recursive case (r1 helper road)


//explanation
// from   to  auxiliary
// R1     R2    R3
// n-1   ------  auxiliary
// 1  -------------- to 
// n-1 auxiliary ------- to



//n number of roads
function towerOfHanoi(n,from , to , auxiliary){
//
let steps = 0;
 
function recursiveTowerOfHanoi(n,from , to , auxiliary){
    //base case
    if(n===1){
        console.log(`Move disk 1 from rod ${from} to rod ${to}`);
        steps+=1;
        return;
    }

    //recursive case
    recursiveTowerOfHanoi(n-1,from,auxiliary,to); //move n-1 road from r1 to auxiliary

    //move 1 road 
    console.log(`Move disk ${n} from rod ${from} to rod ${to}`);
    steps+=1;

    //recur
    recursiveTowerOfHanoi(n-1,auxiliary,to,from); //move n-1 road from r1 to auxiliary  
    }


    recursiveTowerOfHanoi(n,from,to,auxiliary);
    console.log("total steps",steps);
}


towerOfHanoi(3,'r1','r2','r3');