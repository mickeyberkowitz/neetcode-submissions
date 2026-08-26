/**
 * // This is the MountainArray's API interface.
 * // You should not implement it, or speculate about its implementation
 * class MountainArray {
 *     @param {number} index
 *     @return {number}
 *     get(index) {
 *         ...
 *     }
 *
 *     @return {number}
 *     length() {
 *         ...
 *     }
 * }
 */

class Solution {
    /**
     * @param {number} target
     * @param {MountainArray} mountainArr
     * @return {number}
     */
    findInMountainArray(target, mountainArr) {
        let left = 0;
        let right = mountainArr.length() - 1;
        let peak = 0;

        while(left <= right){
            const mid = left + Math.floor((right - left) / 2);

            let midNum = mountainArr.get(mid);
            let leftNum = mountainArr.get(mid - 1);
            let rightNum = mountainArr.get(mid + 1);

            if(midNum > leftNum && midNum > rightNum){
                peak = mid;
                break;
            }else if(midNum > leftNum){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }

        left = 0;
        right = peak;

        while(left <= right){
            const mid = left + Math.floor((right - left) / 2);

            let num = mountainArr.get(mid);

            if(num === target) return mid;

            if(num < target){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }

        left = peak + 1;
        right = mountainArr.length() - 1;

        while(left <= right){
            const mid = left + Math.floor((right - left) / 2);

            let num = mountainArr.get(mid);

            if(num === target) return mid;

            if(num > target){
                left = mid + 1;
            }else{
                right = mid - 1;
            }
        }

        return -1;
        
    }
}
