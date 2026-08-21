class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const colorCounts = new Array(3).fill(0);

        for(const num of nums){
            colorCounts[num]++;
        }

        let index = 0;
        for(let i = 0; i < 3; i++){
            while(colorCounts[i] > 0){
                nums[index] = i;
                index++;
                colorCounts[i]--;
            }
        }
    }
}
