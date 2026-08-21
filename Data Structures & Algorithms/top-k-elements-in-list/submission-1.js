class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {};

        for(const num of nums){
            count[num] = (count[num] || 0) + 1;
        }

        const array = Object.entries(count).map(arr => [arr[1], parseInt(arr[0])]);

        array.sort((a,b) => b[0] - a[0]);

        return array.slice(0,k).map(num => num[1]);
    }
}
