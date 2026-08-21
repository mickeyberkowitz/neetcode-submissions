class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const ROWS = matrix.length;
        const COLS = matrix[0].length;

        let left = 0;
        let right = ROWS * COLS - 1;

        while(left <= right){
            let mid = left + Math.floor((right - left) / 2);

            let row = Math.floor(mid / COLS);
            let col = mid % COLS;

            let current = matrix[row][col];

            if(current === target){
                return true;
            }else if(current > target){
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }

        return false;
    }
}
