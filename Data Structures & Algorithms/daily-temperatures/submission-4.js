class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = new Array(temperatures.length).fill(0);
        let stack = [];

        for(let i = 0; i < temperatures.length; i++){
            const currentTemp = temperatures[i];

            while(stack.length > 0 && stack[stack.length - 1][0] < currentTemp){
                let oldIndex = stack.pop()[1];

                result[oldIndex] = i - oldIndex;
            }

            stack.push([currentTemp, i]);
        }

        return result;
    }
}
