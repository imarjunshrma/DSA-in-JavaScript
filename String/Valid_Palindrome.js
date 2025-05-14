// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.
//A - 65

//a
//z
var isPalindrome = function (s) {
    let nums = s.toLowerCase();

    //97 to 122
    let newSt = []; //o(1)
    for (let i = 0; i < nums.length; i++) { //o(n)
        // (!isNaN(nums[i]) && (nums[i] >= 0 && nums[i] <= 9)) ||
        let val = nums.charCodeAt(i); //o(1)
        // console.log("value",val);
        if(( val >= 97 && val <= 122) || (val >= 48 && val <= 57) ){
            // between 0 to 9 
            //or a to z
            newSt.push(nums[i]);
        }
    }
    let str = newSt.join("");


    //check palindrome 
    //two pointers
    // console.log(str);

    let left = 0;
    let right = str.length - 1;

    while(left < right){
        if(str[left]!== str[right]){
            return false;
        }
        left++;
        right--;
    }
   return true;
};

console.log(isPalindrome("0P"));