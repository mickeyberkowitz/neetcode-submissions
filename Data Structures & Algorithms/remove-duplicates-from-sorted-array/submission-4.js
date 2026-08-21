class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let k = 0;
        let n = 1;

        while(n < nums.length){
            while(nums[k] === nums[n] && n < nums.length){
                n++;
            }
            if(n < nums.length){
                k++;           
            [nums[k], nums[n]] = [nums[n], nums[k]];
            n++;
            }
        }
        return k + 1;
    }
}
