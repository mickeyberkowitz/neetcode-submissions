class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};
        const result = [];
        for(const str of strs){
            const key = str.split("").sort().join("");
            if(!map[key]){
                map[key] = [];
            }

            map[key].push(str);
        }

        for(const key in map){
            result.push(map[key]);
        }

        return result;
    }
}
