// Search in 2D Array-Write an efficient algorithm that searches for a value target in an m x n integer matrix. This matrix has the following properties:

// Integers in each row are sorted from left to right.

// The first integer of each row is greater than the last integer of the previous row.

// If the value is there in the matrix return true, else false.



// Try :

// Try to write the solution with T=O(mn) where m and n are the number of rows and number of columns respectively.

const searchMatrix = function (matrix, target) {
    //write your code here
    //find the rows and columns
    let m = matrix.length;
    let n = matrix[0].length;
    let top = 0;
    let bottom = m - 1;
    let relevantRow = -1;
    while (top <= bottom) {
        let mid = Math.floor((top + bottom) / 2)
        //compare target with the middle row elements

        if (target < matrix[mid][0]) {
            //target is inside between top and middle
            bottom = mid - 1;
        } else if (target > matrix[mid][n - 1]) {
            //target is inside between bottom and middle
            top = mid + 1
        }
        else {
            //target inside middle row target = maxtrix[mid]
            relevantRow = mid;
            break;
        }
    }


    //if we foudn relevant row then perform binary search on taht row
    if(relevantRow === -1) return false;

    let left = 0;
    let right = n - 1

    while(left <= right){
        let mid = Math.floor((left + right) / 2);

        if(matrix[relevantRow][mid] < target){
           left = mid + 1;
        }else if(matrix[relevantRow][mid] > target){
            right = mid - 1;
        }else{
            // relevantIndex = mid;
            // break;
            // return [relevantRow,mid];
            return true;
        }
    }


    return false;

}

console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13))