// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        const map = new Map();
        map.set(null, null);

        let current = head;

        while(current){

            if(!map.has(current)){
                map.set(current, new Node(0));
            }
            map.get(current).val = current.val;

            if(!map.has(current.next)){
                map.set(current.next, new Node(0))
            }

            map.get(current).next = map.get(current.next);

            if(!map.has(current.random)){
                map.set(current.random, new Node(0));
            }

            map.get(current).random = map.get(current.random);

            current = current.next;
        }

        return map.get(head);
    }
}
