class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        let redCounter = 0;
        let blueCounter = nums.length - 1;
        let index = 0;

        while(index <= blueCounter){
            if(nums[index] === 0){
                [nums[index], nums[redCounter]] = [nums[redCounter], nums[index]];
                redCounter++;
                index++;    
            }else if(nums[index] === 2){
                [nums[index], nums[blueCounter]] = [nums[blueCounter], nums[index]];
                blueCounter--;
            }else{
                index++;
            }
        }
    }
}
