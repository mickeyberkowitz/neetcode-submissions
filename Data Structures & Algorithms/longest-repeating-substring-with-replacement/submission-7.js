class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const count = {};
        let result = 0;

        let left = 0;
        let maxFrequency = 0;

        for(let right = 0; right < s.length; right++){
            count[s[right]] = (count[s[right]] || 0) + 1;
            maxFrequency = Math.max(maxFrequency, count[s[right]]);

            while(right - left + 1 - maxFrequency > k){
                count[s[left]] = count[s[left]] - 1;
                left++;
            }
            result = Math.max(result, right - left + 1)
        }

        return result;
    }
}
