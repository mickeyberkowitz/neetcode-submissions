class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        if (nums[left] === val && nums[right] !== val) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        } 
        if (nums[left] !== val) {
            left++;
        } 
        if(nums[right] == val) {
            right--;
        }
    }

    return left;
    }
}
