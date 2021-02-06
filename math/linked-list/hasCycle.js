/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let bool = false;
    if(!head || !head.next) {
        return bool
    }

    let fastNode = head;
    let slowNode = head;
    let fastStep = 2;
    let slowStep = 1;

    while(fastNode) {
        let step = 0;
        while(step < 2) {
            if(fastNode) {
                fastNode = fastNode.next
            }
            if(step === 0) {
                slowNode = slowNode.next
            }
            if(!fastNode) {
                break;
            }
            step++;
        }
        bool = Object.is(fastNode, slowNode)
        if(bool) {break}
    }
    return bool;
};