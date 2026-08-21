class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        const strLeng = strs[0].length;
        let prefix = "";

        for(let i = 0; i < strLeng; i++){
            const propose = strs[0][i];

            for(const str of strs){
                if(str[i] !== propose)
                    return prefix;
            }

            prefix = prefix + propose;
        }

        return prefix;

    }
}
