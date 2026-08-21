class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const s1Map = {};
        const window = {};

        for(const char of s1){
            s1Map[char] = (s1Map[char] || 0) + 1;
        }

        let need = Object.keys(s1Map).length;
        let have = 0;

        let left = 0;
        for(let right = 0; right < s2.length; right++){
            let char = s2[right];
            window[char] = (window[char] || 0) + 1;

            if(s1Map[char] && window[char] === s1Map[char]){
                have++;
            }

            while(have === need){
                if(right - left + 1 == s1.length){
                    return true;
                }

                window[s2[left]]--;
                if(s1Map[s2[left]] && window[s2[left]] < s1Map[s2[left]]){
                    have--;
                }
                left++;
            }
        }

        return false;
        
    }
}
