class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagramMap = new Map();

        for(const str of strs){
            const count = new Array(26).fill(0);

            for(const char of str){
                count[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            const key = count.join(",");
            if(!anagramMap.has(key))
                anagramMap.set(key, []);

            anagramMap.set(key, [...anagramMap.get(key), str]);

        }

        return [...anagramMap.values()];
    }
}
