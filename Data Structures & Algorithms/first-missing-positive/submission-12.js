class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        const maxMissing = nums.length;

        for(let i = 0; i < nums.length; i++){
            if(nums[i] < 0){
                nums[i] = 0;
            }
        }

        for(let i = 0; i < nums.length; i++){
            let num = Math.abs(nums[i]);
            if(num > 0 && num <= maxMissing){                
                if(nums[num - 1] > 0){
                    nums[num - 1] = nums[num - 1] * -1;
                }else if(nums[num - 1] === 0){
                    nums[num - 1] = (maxMissing + 1) * -1;
                }
            }
        }

        for(let i = 0; i <= nums.length; i++){
            if(nums[i] >= 0){
                return i +1;
            }
        }

        return maxMissing + 1;
    }
}
