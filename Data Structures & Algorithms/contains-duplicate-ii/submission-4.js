class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {boolean}
     */
    containsNearbyDuplicate(nums, k) {
        let left = 0;
        const set = new Set();

        for(let right = 0; right < nums.length; right++){
            if(right - left > k){
                set.delete(nums[left]);
                left++;
            }
            if(set.has(nums[right])){
                return true;
            }

            set.add(nums[right]);
        }

        return false;
    }
}
