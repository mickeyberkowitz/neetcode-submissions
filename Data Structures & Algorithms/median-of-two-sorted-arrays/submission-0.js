class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        let i = 0;
        let j = 0;
        let median1 = 0;
        let median2 = 0;
        let totalLen = nums1.length + nums2.length;
        let mid = Math.floor(totalLen / 2) + 1; 

        for(let count = 0; count < mid; count++){
            median2 = median1;

            if(i < nums1.length && j < nums2.length){
                if(nums1[i] < nums2[j]){
                    median1 = nums1[i];
                    i++;
                }else{
                    median1 = nums2[j];
                    j++;
                }
            }else if(i < nums1.length){
                median1 = nums1[i];
                i++;
            }else{
                median1 = nums2[j];
                j++;
            }
        }

        if(totalLen % 2 === 0){
            return (median1 + median2) / 2.0;
        }else{
            return median1
        }
    }
}
