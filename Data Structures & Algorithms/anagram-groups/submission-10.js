class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = {};
        const result = [];

        for(const str of strs){
            const count = new Array(26).fill(0);

            for(const char of str){
                count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }

            const key = count.join(",");

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
