class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const map = new Map();
        for(const num of nums){
            if(!map.has(num))
                map.set(num, 0);
            
            map.set(num, map.get(num) + 1);
        }

        for(const key of map.keys()){
            const value = map.get(key);
            if(value > (nums.length / 2))
                return key;
        }
    }
}
