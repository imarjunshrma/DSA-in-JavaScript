
//take first element from non sorted array and try to replace it in sorted array
const insertionSort = (ar) => {
    //
    for (let i = 1; i < ar.length; i++) {

        let j = i - 1;
        let temp = ar[i];
        while (j >= 0 && (ar[j] > temp)) {
                ar[j + 1] = ar[j];
                j--;
        }
        ar[j + 1]  = temp;
    }

    return ar;
}

//stable sort algorithm o(n2) - time complexity


console.log(insertionSort([64, 34, 25, 12, 22, 11, 90]));