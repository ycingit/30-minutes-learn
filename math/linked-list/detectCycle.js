/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let bool = false;
    if(!head || !head.next) {
        return null
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
    let detectIndex = null;
    let initNode = head;
    if(bool) {
        detectIndex = 0;
        while(!Object.is(initNode, slowNode)) {
            initNode = initNode.next;
            slowNode = slowNode.next;
            detectIndex++;
        }
    }
    return detectIndex === null ? detectIndex : initNode;
};

// 结论：当发现 slow 与 fast 相遇时，我们再额外使用一个指针 ptr 起始，它指向链表头部；随后，它和 slow 每次向后移动一个位置。最终，它们会在入环点相遇。
//a+(n+1)b+nc=2(a+b)⟹a=c+(n−1)(b+c)