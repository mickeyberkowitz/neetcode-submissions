class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const result = [];
        nums.sort((a,b) => a - b);

        for(let i = 0; i < nums.length; i++){
            if(nums[i] > 0) break;
            if(i > 0 && nums[i] === nums[i-1]) continue;
            let l = i + 1;
            let k = nums.length - 1;

            while(l < k){
                const sum = nums[i] + nums[l] + nums[k];
                if(sum === 0){
                    result.push([nums[i], nums[l], nums[k]]);
                    l++;
                    while(l < k && nums[l] === nums[l -1]){
                        l++;
                        k--;
                    }
                }else if(sum > 0){
                    k--;
                }else{
                    l++;
                }
            }
        }
        return result;
    }
}
