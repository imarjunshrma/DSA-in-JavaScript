
//FIND THE SMALLEST ELEMENT AND PUT IT IN FRONT

// var selectionSort = function (ar) {

//     //
//     for (let i = 0; i < ar.length - 1; i++) {
//         let smallest = i;
//         for (let j = i + 1; j < ar.length; j++) {
//          if(ar[j] < ar[smallest]) smallest = j;
//         }

//         if(smallest !== i){
//             let temp = ar[smallest];
//             ar[smallest] = ar[i];
//             ar[i] = temp;
//         }
//     }

//     return ar;
// }

const selectionSort = (ar) => {
    const n = ar.length;

   for(let i = 0; i< n-1;i++){
       let smallest = i;
       for(let j = i;j < n ; j++){
           if(ar[j] < ar[smallest]){
               smallest = j;
           }
       }
       //swap smallest with ar[i]
       [ar[i],ar[smallest]] = [ar[smallest],ar[i]];
   }
    return ar;
}

console.log(selectionSort([64, 34, 33,25, 12, 22, 11,11, 90]));