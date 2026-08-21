class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let redCounter = 0;
        let blueCounter = nums.length - 1;

        for(let i = 0; i <= blueCounter; i++){
            while([0,2].includes(nums[i]) && i >= redCounter && i <= blueCounter){
                if(nums[i] === 0 && i > redCounter){
                    [nums[i], nums[redCounter]] = [nums[redCounter], nums[i]];
                    redCounter++;
                }
                else if(nums[i] === 2 && i < blueCounter){
                    [nums[i], nums[blueCounter]] = [nums[blueCounter], nums[i]];
                    blueCounter--
                }else{break}
            }
        }
    }
}
