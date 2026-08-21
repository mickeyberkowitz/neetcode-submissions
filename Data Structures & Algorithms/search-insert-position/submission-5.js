class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    searchInsert(nums, target) {
        let left = 0;
        let right = nums.length;

        while(left < right){
            let mid = left + Math.floor((right - left) / 2);
            if(nums[mid] === target)
                return mid;
            else if(nums[mid] > target)
                right = mid - 1;
            else
                left = mid + 1;
        }

        return nums[left] < target ? left + 1 : left;
    }
}
