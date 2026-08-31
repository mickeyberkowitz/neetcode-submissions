/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        const seen = new Set();

        let node = head;

        while(node){
            if(seen.has(node)){
                return true;
            }
            seen.add(node)

            node = node.next;
        }

        return false;
    }
}
