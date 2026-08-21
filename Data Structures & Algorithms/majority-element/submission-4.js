class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const map = {};

        for(const num of nums){
            map[num] = (map[num] || 0) + 1;
        }

        let key = nums[0];

        for(const element in map){
            if(map[element] > map[key])
                key = element;
        }

        return key;
    }
}
