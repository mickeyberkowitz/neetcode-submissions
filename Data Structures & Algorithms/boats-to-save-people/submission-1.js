class Solution {
    /**
     * @param {number[]} people
     * @param {number} limit
     * @return {number}
     */
    numRescueBoats(people, limit) {
        people.sort((a,b) => a - b);
        let boats = 0;

        let left = 0;
        let right = people.length - 1;

        while(left <= right){
            if(people[left] + people[right] > limit){
                boats++;
                right--;
            }else{
                boats++;
                right--;
                left++;
            }
        }

        return boats;
    }
}
