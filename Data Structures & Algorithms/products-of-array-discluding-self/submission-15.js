class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const prefix = [];
        const sufix = [];
        const result = [];

        let product = 1;
        for(let i = 0; i < nums.length; i++){
            prefix.push(product);
            product = product * nums[i];
        }
        product = 1;
        for(let i = nums.length - 1; i >= 0; i--){
            sufix[i] = product;
            product = product * nums[i];
        }

        for(let i = 0; i < nums.length; i++){
            result.push(prefix[i] * sufix[i]);
        }

        return result;
    }
}
