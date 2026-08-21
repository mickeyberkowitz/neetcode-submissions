class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length){
            return false;
        }

        const s1Map = new Array(26).fill(0);
        const s2Map = new Array(26).fill(0);
        const charCodeOffset = "a".charCodeAt(0);
        let matches = 0;

        for(let i = 0; i < s1.length; i++){
            s1Map[s1.charCodeAt(i) - charCodeOffset]++;
            s2Map[s2.charCodeAt(i) - charCodeOffset]++;
        }

        for(let i = 0; i < s1Map.length; i++){
            if(s1Map[i] === s2Map[i]){
                matches++;
            }
        }

        let left = 0;
        for(let right = s1.length; right < s2.length; right++){
            if(matches === 26){
                return true;
            }
            let index = s2.charCodeAt(right) - charCodeOffset;
            s2Map[index]++;

            if(s1Map[index] === s2Map[index]){
                matches++;
            }else if(s1Map[index] + 1 === s2Map[index]){
                matches--;
            }

            index = s2.charCodeAt(left) - charCodeOffset;
            s2Map[index]--;

            if(s1Map[index] === s2Map[index]){
                matches++;
            }else if(s1Map[index] - 1 === s2Map[index]){
                matches--;
            }

            left++;

        }

        return matches === 26;

    }
}
