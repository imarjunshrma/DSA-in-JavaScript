//power sum problem
// Power Sum - Let’s define a peculiar type of array in which each element is either an integer or another peculiar array. Assume that a peculiar array is never empty. Write a function that will take a peculiar array as its input and find the sum of its elements. If an array is an element in the peculiar array you have to convert it to it’s equivalent value so that you can sum it with the other elements. Equivalent value of an array is the sum of its elements raised to the number which represents how far nested it is. For e.g. [2,3[4,1,2]] = 2+3+ (4+1+2)^2

// another example - [1,2,[7,[3,4],2]] = 1 + 2 +( 7+(3+4)^3+2)^2



function powerSum(array,power){
    let sum = 0;
  

    // for(let i =0;i<array.length;i++){
    //     //if element is array
    //     if(typeof array[i] === "object" && Array.isArray(array[i])){
    //       sum += powerSum(array[i],power+1);
    //     }else{
    //         sum +=array[i]; //3
    //     }
    //     // if element is integer
    // }

    array.forEach(ar => {
        if(Array.isArray(ar)){
            sum += powerSum(ar,power+1);
        } else{
            sum += ar;
        }
    })
    return Math.pow(sum,power);
}


console.log(powerSum([1, 2, [3, 4, [5, 6]]],1));