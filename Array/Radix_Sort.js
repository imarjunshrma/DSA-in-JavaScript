
function countSort(nums,place){
    let unit = Math.pow(10,place);
    //digit -> value/unit
    //1 -> 10
    // digit- 1,2
    // 23 -> 2 digit - 2
// digit - unit 10th 100th 
    //suppose 0 to 9
    let frequencyArray = Array.from({ length: 10 }).fill(0);
    let output = Array.from({length:nums.length}).fill(0);

    for (let i = 0; i < nums.length; i++) {
        const digit = Math.floor(nums[i]/unit)%10; //particular digit
        frequencyArray[digit] = frequencyArray[digit] + 1; //increase frequency
    }
    //now cummulative sum (prefix sum) of frequencyArray
    for (let i = 1; i < frequencyArray.length; i++) {
        frequencyArray[i] = frequencyArray[i] + frequencyArray[i - 1];
    }

    //find value  and find index value - 1 -> push on output
    //backward
    for(let i = nums.length - 1;i >= 0; i--){
        let valDigit = Math.floor(nums[i]/unit)%10; //particular digit
        const outputIndex = frequencyArray[valDigit]--;
        output[outputIndex] = nums[i];
    }

    for(let i = 0; i < output.length;i++){
        nums[i] = output[i];
    }
}


function radixSort(nums) {

    //max number
    let maxNum = Math.max(...nums);
    //max digits
    let maxDigits = Math.floor(Math.log10(maxNum)) + 1;

    //counting sort algorithm

    for(let i = 0; i < maxDigits; i++){
        countSort(nums,i);
    }
    return nums;
}

console.log(radixSort([5, 2, 3, 1]));