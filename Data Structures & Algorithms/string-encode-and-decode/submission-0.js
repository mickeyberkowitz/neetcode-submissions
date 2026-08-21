class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = "";

        for(const str of strs){
            encoded += str.length + "#" + str;
        }

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const strings = [];

        let i = 0;

        while(i < str.length){
            let j = i;
            while(str[j] !== "#")
                j++;

            const strLen = parseInt(str.substring(i,j));

            i = j + 1;
            j = i + strLen;

            strings.push(str.substring(i,j));
            
            i = j;
        }

        return strings;
    }
}
