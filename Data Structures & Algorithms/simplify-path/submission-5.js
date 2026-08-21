class Solution {
    /**
     * @param {string} path
     * @return {string}
     */
    simplifyPath(path) {
        const split = path.split("/");
        const stack = [];
        let result = "";

        for(let i = 0; i < split.length; i++){
            if(split[i] === ".."){
                stack.pop();
            }else if( split[i] !== "." && split[i] !== ""){
                stack.push(split[i]);
            }
        }

        while(stack.length > 0){
            result = `/${stack.pop()}${result}`;
        }

        return result === "" ? "/" : result;

    }
}
