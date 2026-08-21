class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const stack = [];

        for(let i = 0; i < tokens.length; i++){
            if("+-*/".includes(tokens[i])){
                let val;
                let num1 = stack.pop();
                let num2 = stack.pop();

                switch(tokens[i]){
                    case "+":
                        val = num2 + num1;
                    break;
                    case "-":
                        val = num2 - num1;
                    break;
                    case "*":
                    val = num2 * num1;
                    break;
                    case "/":
                        val = Math.trunc(num2 / num1);
                    break
                }

                stack.push(val);
            }else{
                stack.push(Number(tokens[i]));
            }
        }

        return stack.pop();
    }
}
