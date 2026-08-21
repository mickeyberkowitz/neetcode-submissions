class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let left = 1;
        let right = Math.max(...piles);
        let result = right;

        while(left <= right){
            let mid = left + Math.floor((right - left) / 2);

            let totalTime = 0;
            for(const pile of piles){
                totalTime += Math.ceil(pile / mid);
            }

            if(totalTime <= h){
                result = mid;
                right = mid - 1;
            }else{
                left = mid + 1;
            }
        }

        return result;
    }
}
