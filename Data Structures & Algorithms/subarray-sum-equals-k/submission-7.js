class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const map = {0:1};
        let result = 0;
        let currentSum = 0;

        for(const num of nums){
            currentSum += num;
            let diff = currentSum - k;

            result += (map[diff] || 0);

            map[currentSum] = (map[currentSum] || 0 ) + 1;
        }

        return result;
    }
}
