class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let left = 0;
        let right = nums.length - 1;
        let result = nums[0];
        while(left <= right){

            if(nums[left] <= nums[right]){
                result = Math.min(result, nums[left]);
                break;
            }
            
            let mid = left + Math.floor((right - left) / 2);

            result = Math.min(result, nums[mid])
            
            if(nums[left] <= nums[mid]){
                left = mid + 1;
            }else if(nums[mid] < nums[right]){
                right = mid - 1;
            }else{
                return nums[left];
            }
        }

        return result;
    }
}
