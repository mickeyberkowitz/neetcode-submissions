class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const prefix = new Array(height.length).fill(0);
        const sufix = new Array(height.length).fill(0);
        let result = 0;

        prefix[0] = height[0];
        for(let i = 1; i < height.length; i++){
            prefix[i] = Math.max(height[i], prefix[i - 1]);
        }

        sufix[height.length - 1] = height[height.length - 1];
        for(let i = height.length - 2; i >=0; i--){
            sufix[i] = Math.max(sufix[i + 1], height[i]);
        }

        for(let i = 0; i < height.length; i++){
            result += Math.min(prefix[i], sufix[i]) - height[i];
        }

        return result;
    }
}
