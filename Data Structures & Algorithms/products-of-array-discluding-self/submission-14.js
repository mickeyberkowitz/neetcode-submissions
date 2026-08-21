class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = Array(nums.length).fill(1);

        let prefix = 1;
        for(let i = 1; i < nums.length; i++){
            result[i] = prefix * nums[i - 1];
            prefix = result[i];
        }
        let postfix = 1;
        for(let i = nums.length - 1; i >= 0; i--){
            result[i] = postfix * result[i];
            postfix = postfix * nums[i];
        }

        return result;
    }
}
