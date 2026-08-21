class Solution {
    /**
     * @param {number} x
     * @return {number}
     */
    mySqrt(x) {
        let result = 0;
        let left = 0;
        let right = x;

        while(left <= right){
            let mid = left + Math.floor((right - left) / 2);

            if(mid * mid === x)
                return mid;
            else if(mid * mid > x)
                right = mid - 1;
            else{
                left = mid + 1;
                result = mid;
            }
        }

        return result;
    }
}
