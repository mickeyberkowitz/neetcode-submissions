class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
             
       
        const set = new Set(nums);
        let longestStreak = 0;
            
    for(let i = 0; i < nums.length; i++){
        if(!set.has(nums[i] - 1)){
            let currentStreak = 1;
            let currentNum = nums[i];
            while(set.has(currentNum + 1)){
                currentNum += 1;
                currentStreak += 1;
            }
            longestStreak = Math.max(longestStreak, currentStreak);
        }
    }
    return longestStreak;
    }
}
