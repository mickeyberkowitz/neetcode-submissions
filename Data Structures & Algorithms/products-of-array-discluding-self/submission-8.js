class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const numbers = [];
        let product = 1;
        let zeroCount = 0;
        for(const num of nums){
            if(num === 0){
                zeroCount++
                 continue;}
            product = product * num;
        }
        if(zeroCount > 1)
            return Array(nums.length).fill(0)
        for(const num of nums){
            if(zeroCount > 0)
                numbers.push( num === 0 ? product : 0);
            else
                numbers.push(product / num);
        }

        return numbers;
    }
}
