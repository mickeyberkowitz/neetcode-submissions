class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        if(nums.length === 1) return nums;

        const mid = Math.floor(nums.length / 2);
        const left = this.sortArray(nums.slice(0,mid));
        const right = this.sortArray(nums.slice(mid));

        return this.merge(left, right);
    }

    merge(arr1, arr2){
        const mergedArray = [];

        while(arr1.length > 0 && arr2.length > 0){
            if(arr1[0] < arr2[0]){
                mergedArray.push(arr1.shift());
            }else{
                mergedArray.push(arr2.shift());
            }
        }

        while(arr1.length > 0){
            mergedArray.push(arr1.shift());
        }
        while(arr2.length > 0){
            mergedArray.push(arr2.shift());
        }

        return mergedArray;
    }
}
