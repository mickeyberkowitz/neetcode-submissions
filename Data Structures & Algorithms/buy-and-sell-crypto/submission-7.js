class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let left = 0;

        for(let right = 0; right < prices.length; right++){
            while(prices[left] > prices[right]){
                left++;
            }
            profit = Math.max(profit, prices[right] - prices[left]);
        }

        return profit;
    }
}
