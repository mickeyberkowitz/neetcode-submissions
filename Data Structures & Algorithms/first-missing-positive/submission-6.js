class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    firstMissingPositive(nums) {
        const set = new Set(nums);
        let firstMissingPositive = 1;

        while(set.has(firstMissingPositive)){
            firstMissingPositive++;
        }

        return firstMissingPositive;
    }
}
