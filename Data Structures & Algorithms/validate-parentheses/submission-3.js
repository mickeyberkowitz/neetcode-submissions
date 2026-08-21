class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        for(const bracket of s){
            if("({[".includes(bracket)){
                stack.push(bracket);
            }else{
                let coresponding = stack.pop();
                if(bracket === ")" && coresponding !== "("){
                    return false;
                }if(bracket === "}" && coresponding !== "{"){
                    return false;
                }if(bracket === "]" && coresponding !== "["){
                    return false;
                }
            }
        }
        return stack.length === 0;
    }
}
