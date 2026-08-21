class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        this.mergeSort(nums, 0, nums.length - 1);
        return nums;
    }

    mergeSort(nums, leftPointer, rightPointer){
        if(rightPointer <= leftPointer) return;

        let midPointer = Math.floor((leftPointer + rightPointer) / 2);
        this.mergeSort(nums, leftPointer, midPointer);
        this.mergeSort(nums, midPointer + 1, rightPointer);
        this.merge(nums, leftPointer, rightPointer, midPointer);
    }

    merge(nums, leftPointer, rightPointer, midPointer){
        const leftArray = nums.slice(leftPointer, midPointer + 1);
        const rightArray = nums.slice(midPointer + 1, rightPointer + 1);

        let [i, j, k] = [leftPointer, 0, 0];
        while(j < leftArray.length && k < rightArray.length){
            if(leftArray[j] <= rightArray[k]){
                nums[i] = leftArray[j];
                j++;
            }else{
                nums[i] = rightArray[k];
                k++; 
            }
            i++;
        }

        while(j < leftArray.length){
            nums[i] = leftArray[j];
            i++;
            j++;
        }

        while(k < rightArray.length){
            nums[i] = rightArray[k];
            k++;
            i++;
        }
    }
}

