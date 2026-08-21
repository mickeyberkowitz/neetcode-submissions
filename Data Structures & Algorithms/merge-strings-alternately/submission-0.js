class Solution {
    /**
     * @param {string} word1
     * @param {string} word2
     * @return {string}
     */
    mergeAlternately(word1, word2) {
        let len = word1.length > word2.length ? word1.length : word2.length;
        let result = "";

        for(let i = 0; i < len; i++){
            result += (word1[i] || "");
            result += (word2[i] || "");
        }

        return result;
    }
}
