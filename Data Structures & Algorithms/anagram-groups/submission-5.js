class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const result = [];
        const seen = new Set();

        for(let i = 0; i < strs.length; i++){
            if(seen.has(i))
                continue;
            const subset = [];
            subset.push(strs[i]);
            seen.add(i);

            for(let j = i + 1; j < strs.length; j++){
                if(!seen.has(j) && this.validAnagram(strs[i], strs[j])){
                    subset.push(strs[j]);
                    seen.add(j);
                }
            }
            result.push(subset);
        }

        return result;
    }

    validAnagram(str1, str2){
        const str1Map = {};
        const str2Map = {};

        if(str1.length !== str2.length)
            return false;
        
        for(const s of str1){
            str1Map[s] = (str1Map[s] || 0) + 1;
        }

        for(const s of str2){
            str2Map[s] = (str2Map[s] || 0) + 1;
        }

        for(const key of str1){
            if(str1Map[key] !== str2Map[key])
                return false;
        }

        return true;
    }
}
