/**
 * Initialize your data structure here.
 */
var MyLinkedList = function(val) {
    this.head = {
        val: val,
        next: null
    }
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    let linkedIndex = 0;
    let currNode = this.head;
    while(currNode) {
        if(linkedIndex > index) {
            break;
        } else if (linkedIndex === index) {
            return currNode.val
        }
        currNode = currNode.next;
        linkedIndex++;
    }
    return -1
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    if(this.head.val || this.head.val === 0) {
        var realHead = {
            val: val,
            next: this.head
        }
        this.head = realHead
    } else {
        this.head.val = val
    }
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if(!this.head.val && this.head.val !== 0) {
        this.head.val = val
        return
    }
    let lastLinkNode;
    let linkedNode = this.head;
    while(linkedNode) {
        lastLinkNode = linkedNode;
        linkedNode = linkedNode.next;
    }
    lastLinkNode.next = {
        val: val,
        next: null
    }
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index <= 0) {
        this.addAtHead(val)
    }
    let linkedIndex = 0;
    let preNode = this.head;
    let nextNode = this.head.next;
    while(preNode) {
        if(linkedIndex + 1 === index) {
            let currNode = {
                val: val,
                next: nextNode
            }
            
            preNode.next = currNode
            break;
        }
        preNode = nextNode;
        if(nextNode) {
            nextNode = nextNode.next;
        }
        linkedIndex++;
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    let linkedIndex = 0;
    let preNode = this.head;
    let nextNode = this.head.next;
    if(index === 0) {
        this.head = this.head.next;
        return
    }
    while(preNode) {
        if(linkedIndex + 1 === index) {
            if(nextNode) {
                preNode.next = nextNode.next
            }
            break;
        }
        preNode = nextNode;
        if(nextNode) {
            nextNode = nextNode.next;
        }
        linkedIndex++;
    }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

var linkedList = new MyLinkedList();
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1,2);   //链表变为1-> 2-> 3
linkedList.get(1);            //返回2
linkedList.deleteAtIndex(1);  //现在链表是1-> 3
linkedList.get(1);            //返回3
console.log(linkedList)