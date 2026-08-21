class Solution {
    /**
     * @param {number[]} weights
     * @param {number} days
     * @return {number}
     */
    shipWithinDays(weights, days) {
        let left = Math.max(...weights);
        let right = weights.reduce((a,b) => a + b, 0);
        let result = right;

        let canShip = (cap) => {
            let currentCap = cap
            let shipDays = 1;

            for(const weight of weights){
                if(currentCap - weight < 0){
                    shipDays++;
                    currentCap = cap;
                }
                    currentCap -= weight;
                
            }

            return shipDays <= days;
        };

        while(left <= right){
            let capacity = left + Math.floor((right - left) / 2);
            if(canShip(capacity)){
                right = capacity - 1;
                result = Math.min(capacity, result);
            }else{
                left = capacity + 1;
            }
        }

        return result;
    }
}
