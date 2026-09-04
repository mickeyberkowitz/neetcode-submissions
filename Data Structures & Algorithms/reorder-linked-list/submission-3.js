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
     * @return {void}
     */
    reorderList(head) {
        const list = [];

        let node = head;

        while(node){
            list.push(node);
            node = node.next;
        }

        let i = 0;
        let j = list.length - 1;

        while(i < j){
            let temp = list[i].next;
            list[i].next = list[j];
            list[j].next = temp;
            i++;
            j--;
        }

        list[i].next = null;
    }
}
