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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {

        let node = head;
        let count = 0;

        while(node){
            count++;
            node = node.next;
        }

        let target = count - n;

        if(target === 0){
            return head.next;
        }

        node = head;
        count = 0;
        let prev;

        while(count < target){
            prev = node;
            node = node.next;
            count++;
        }

        prev.next = node.next;
        return head;
    }
}
