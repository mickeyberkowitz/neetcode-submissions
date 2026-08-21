class Solution {
    /**
     * @param {string} s
     * @return {string}
     */
    decodeString(s) {
        const stack = [];
        let result = "";

        for(let i = 0; i < s.length; i++){
            const char = s[i];

            if(char === "]"){
                let substr = "";

                while(stack[stack.length - 1] !== "["){
                    substr = stack.pop() + substr;
                }
                stack.pop();

                let num = "";

                while(stack.length > 0 && !isNaN(stack[stack.length - 1])){
                    num = stack.pop() + num;
                }

                stack.push(substr.repeat(parseInt(num)));
            }else{
                stack.push(char);
            }
        }

        return stack.join("");
    }
}
