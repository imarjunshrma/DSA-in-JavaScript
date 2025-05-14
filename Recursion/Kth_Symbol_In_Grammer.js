//defination
// We build a table of n rows (1-indexed). We start by writing 0 in the 1st row. Now in every subsequent row, we look at the previous row and replace each occurrence of 0 with 01, and each occurrence of 1 with 10.

// For example, for n = 3, the 1st row is 0, the 2nd row is 01, and the 3rd row is 0110.
// Given two integer n and k, return the kth (1-indexed) symbol in the nth row of a table of n rows.
 
// 0  -> 1 row
// 01 -> 2nd row
// 0110 -> n rows
//kth symbol in nth row of a table of n rows


//so just
//0
//01
//0110 -> 
//01101001 -> 2(N -1) 


// recurrence relation - break problem into sub prolbme
//nth row and kth symbol
//nth-1 row and kth symbol


//base case 
//recurive case 

// 4th row 3 index

function kthSymboleInGrammer(n,k){
    //base case
    if(n === 1) return 0; //first valid case or last invalid case
    const length = Math.pow(2,n-1);
    const mid = length/2;
    //recursive case
    if(k > length/2){
        // console.log("37...");
        return 1-kthSymboleInGrammer(n-1,k-mid);
    }else{
        // console.log("38...");
        return kthSymboleInGrammer(n-1,k);
    }
}

console.log(kthSymboleInGrammer(3,4));