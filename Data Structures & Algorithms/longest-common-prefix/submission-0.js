class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        const commonPrefix = [];
        const firstWordLength = strs[0].length;

        for(let i = 0; i < firstWordLength; i++){
            let isCommon = true;
            let char = strs[0][i];
            for(const str of strs){
                if(char !== str[i])
                    isCommon = false;
            }
            if(isCommon)
                commonPrefix.push(char);
            else
                break;
        }

        return commonPrefix.join("");

    }
}
