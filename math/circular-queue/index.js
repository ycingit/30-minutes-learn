/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.queue = new Array(k);
    this.head = null;
    this.tail = null;
    this.startIndex = 0;
    this.endIndex = k - 1;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.isFull()) {
        return false
    }
    const operateIndex = (this.tail === null || this.tail === this.endIndex) ?                                          this.startIndex : this.tail + 1;
    this.queue[operateIndex] = value;
    this.tail = operateIndex;
    this.head = (this.head || this.head === this.startIndex) ? this.head : operateIndex;
    return true
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty()) {
        return false
    }
    const nextIndex = (this.head === this.endIndex && this.head !== this.tail) ?                                     this.startIndex : (this.head === this.tail) ? null : this.head + 1;
    this.queue[this.head] = undefined;
    this.tail = this.head === this.tail ? nextIndex : this.tail;
    this.head = nextIndex;
    return true
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    return this.isEmpty() ? -1 : this.queue[this.head]
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    return this.isEmpty() ? -1 : this.queue[this.tail]
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.head === this.tail && this.queue[this.head] === undefined
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return (this.head === this.startIndex && this.tail === this.endIndex) || this.tail + 1 === this.head
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */