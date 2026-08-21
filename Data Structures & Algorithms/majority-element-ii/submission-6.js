class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        const majorityCount = Math.floor(nums.length / 3);
        const map = {};
        const result = [];

        for(let i = 0; i < nums.length; i++){
            map[nums[i]] = (map[nums[i]] || 0) + 1;
        }

        for(const key in map){
            if(map[key] > majorityCount){
                result.push(+key);
            }
        }

        return result;
    }
}
