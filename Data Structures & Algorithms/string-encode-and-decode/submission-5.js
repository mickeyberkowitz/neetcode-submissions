class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if(strs.length === 0) return "";

        const sizes = [];
        let res = "";

        for(const s of strs){
            sizes.push(s.length);
        }

        res = sizes.join(",");

        res += "#";

        for(const s of strs){
            res += s;
        }

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if(str === "") return [];

        let sizesEnd = str.indexOf("#");
        let sizeString = str.substring(0,sizesEnd);
        let sizes = sizeString.split(",");
        let result = [];

        let startIndex = sizesEnd + 1;

        for(const size of sizes){
            
            result.push(str.substring(startIndex, startIndex + Number(size)));

            startIndex += Number(size);
        }

        return result;
    }
}
