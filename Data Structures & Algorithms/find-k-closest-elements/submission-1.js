class Solution {
    /**
     * @param {number[]} arr
     * @param {number} k
     * @param {number} x
     * @return {number[]}
     */
    findClosestElements(arr, k, x) {
        const result = [];
        let index = 0;

        for(let i = 0; i < arr.length; i++){
            if(Math.abs(arr[index] - x) > Math.abs(arr[i] - x)){
                index = i;
            }
        }

        result.push(arr[index]);

        let left = index - 1;
        let right = index + 1;

        while(result.length < k){
            if(left >= 0 && right < arr.length){
                if(Math.abs(arr[left] - x) <= Math.abs(arr[right] - x)){
                    result.push(arr[left]);
                    left--;
                }else{
                    result.push(arr[right]);
                    right++;
                }
            }else if(left >= 0){
                result.push(arr[left]);
                left--;
            }else if(right < arr.length){
                result.push(arr[right]);
                right++;
            }
        }

        return result.sort((a,b) => a - b);
        
    }
}
