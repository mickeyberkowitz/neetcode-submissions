class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const stack = [];

        for(const operation of operations){
            if(operation === 'C'){
                stack.pop();
            }else if(operation === "+"){
                let prev1 = stack.pop();
                let prev2 = stack.pop();
                let newScore = prev1 + prev2;
                stack.push(prev2);
                stack.push(prev1);    
                stack.push(newScore);
            }else if(operation === "D"){
                let prev1 = stack.pop();
                let newScore = prev1 * 2;
                stack.push(prev1);
                stack.push(newScore);
            }else{
                stack.push(+operation);
            }
        }

        return stack.reduce((acc, curr) => acc + curr, 0);

    }
}
