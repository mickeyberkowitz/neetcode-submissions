class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxWater = 0;
        let left = 0;
        let right = heights.length - 1;

        while(left < right){
            let area = right - left;
            let water;

            if(heights[left] < heights[right] ){
                water = area * heights[left];
                left++
            }else{
                water = area * heights[right];
                right--;
            }

            maxWater = Math.max(water, maxWater);
            
        }

        return maxWater;
    }
}
