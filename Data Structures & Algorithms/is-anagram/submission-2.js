class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length !== t.length)
            return false;
        const sMap = new Map();
        const tMap = new Map();

        for(let i = 0; i < s.length; i++){
            const sChar = s[i];
            const tChar = t[i];

            if(sMap.has(sChar))
                sMap.set(sChar, sMap.get(sChar) + 1);
            else
                sMap.set(sChar, 1);

            if(tMap.has(tChar))
                tMap.set(tChar, tMap.get(tChar) + 1);
            else
                tMap.set(tChar, 1);
        }

        for(const char of sMap.keys()){
            if(sMap.get(char) !== tMap.get(char))
                return false;
        }

        return true;
    }
}
