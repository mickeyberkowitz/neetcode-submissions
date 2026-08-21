class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = {};
        const result = [];

        for(const num of nums){
            map[num] = (map[num] || 0) + 1;
        }

        for(const key in map){
            if(result.length < k){
                result.push(Number(key));
                continue;
            }
                
            
            let minIndex = 0;
            for(let i = 0; i < k; i++){
                if(map[result[i]] < map[result[minIndex]]){
                    minIndex = i;
                }
            }

            if(map[result[minIndex]] < map[key]){
                result[minIndex] = Number(key);
            }
        }

        return result;

    }
}
