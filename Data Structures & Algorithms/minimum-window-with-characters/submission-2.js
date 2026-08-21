class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        const countT = {};
        const window = {};
        
        

        for(const char of t){
            countT[char] = (countT[char] || 0) + 1;
        }

        let have = 0;
        let need = Object.keys(countT).length;
        let result = [];
        let resultLength = Infinity;

        let left = 0;
        for(let right =  0; right < s.length; right++){
            let char = s[right];

            window[char] = (window[char] || 0) + 1;
            if(countT[char] && window[char] === countT[char]){
                have++;
            }

            while(have === need){
                let len = right - left + 1;

                if(len < resultLength){
                    result = [left, right];
                    resultLength = len;
                }

                window[s[left]]--;

                if(countT[s[left]] && window[s[left]] < countT[s[left]]){
                    have--;
                }

                left++;

            }
        }

        return resultLength < Infinity ? s.substring(result[0], result[1] + 1) : ""
    }
}
