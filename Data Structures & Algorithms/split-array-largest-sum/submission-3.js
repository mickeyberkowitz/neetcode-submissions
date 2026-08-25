class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    splitArray(nums, k) {

        function canSplit(largest){
            let subArrayCount = 1;
            let currentSum = 0;

            for(const num of nums){
                currentSum += num;

                if(currentSum > largest){
                    subArrayCount++;

                    if(subArrayCount > k) return false;

                    currentSum = num;
                }
            }
            return true;
        }

        let left = Math.max(...nums);
        let right = nums.reduce((a,b) => a + b, 0);
        let result = left;

        while(left <= right){
            const mid = left + Math.floor((right - left) / 2);

            if(canSplit(mid)){
                result = mid;
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }

        return result;
        
    }
}
