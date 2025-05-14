

function swap(ar,j){
    let temp = ar[j];
    ar[j] = ar[j + 1];
    ar[j + 1] = temp;
}


const bubbleSort = function (ar) {
    for (let i = 0; i < ar.length - 1; i++) {
        for (let j = 0; j < ar.length - i; j++) {
            if (ar[j] > ar[j + 1]) {
                // swap(ar[j],ar[j+1]);
                //swap both elements
               swap(ar,j);
            }
        }
    }

    return ar;

}


//bublle sort optimal approach
//o(n2) best - o(n) if array is already sorted
const bubbleSort2 = (ar) => {
    const n = ar.length;
    for(let i = 0;i < n-1;i++){
        let isSorted = true;
        for(let j = 0 ; j < n-i ;j++ ){
            if(ar[j] > ar[j+1]){
                isSorted = false;
              [ar[j], ar[j + 1]] = [ar[j + 1], ar[j]];
            }
        }
        
           if(isSorted){
                break;
            }
    }
    
    return ar;
}

console.log(bubbleSort([64, 34, 25, 12, 22, 11, 90]));