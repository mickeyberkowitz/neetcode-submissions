class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = [];
        const prefix = Array(nums.length).fill(1);
        const postfix = Array(nums.length).fill(1);

        for(let i = 1; i < nums.length; i++){
            prefix[i] = prefix[i - 1] * nums[i - 1];
        }

        for(let i = nums.length - 2; i >= 0; i--){
            postfix[i] = postfix[i + 1] * nums[i + 1];
        }

        for(let i = 0; i < nums.length; i++){
            result.push(prefix[i] * postfix[i]);
        }

        return result;
    }
}
