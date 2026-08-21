class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        let prefixSum = [];

        prefixSum[0] = nums[0];
        for(let i = 1; i < nums.length; i++){
            prefixSum[i] = prefixSum[i - 1] + nums[i];
        }

        if(prefixSum[nums.length - 1] < target){
            return 0;
        }

        let min = nums.length;

        let left = 0;
        for(let right = 0; right < nums.length; right++){
            if(prefixSum[right] < target){
                continue;
            }

            while(prefixSum[right] - prefixSum[left] >= target){
                left++;
            }
            min = Math.min(min, right - left + 1);
        }
        return min;
    }
}
