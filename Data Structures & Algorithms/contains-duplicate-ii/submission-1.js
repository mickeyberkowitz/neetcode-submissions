class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        const map = {};

        for(let i = 0; i < nums.length; i++){
            const num = nums[i];
            if(!map[num]){
                map[num] = [];
            }
            map[num].push(i);
        }

        for(const num in map){
            if(map[num].length > 1){
                for(let i = 1; i < map[num].length; i++){
                    const arr = map[num];
                    if(Math.abs(arr[i - 1] - arr[i]) <= k){
                    return true;
                    }
                }                
            }
        }
        return false;
    }
}
