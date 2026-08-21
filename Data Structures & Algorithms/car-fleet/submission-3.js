class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const stack = [];
        const pairs = position.map((p, i) => [p, speed[i]]);

        pairs.sort((a,b) => b[0] - a[0]);

        for(const pair of pairs){
            stack.push(pair);

            if(stack.length > 1){
                let front = stack[stack.length - 2];
                let back = stack[stack.length - 1];

                if((target - back[0]) / back[1] <= (target - front[0]) / front[1]  ){
                    stack.pop();
                }
            }
        }

        return stack.length;
    }
}
