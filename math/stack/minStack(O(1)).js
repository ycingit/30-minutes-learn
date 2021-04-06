/**
 * initialize your data structure here.
 */
 var MinStack = function() {
    this.stack = []
    this.min = 0
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    let diff
    if (this.isEmpty()) {
        diff = 0
        this.min = x
    } else {
        diff = x - this.min
        this.min = diff <= 0 ? x : this.min
    }
    this.stack.push(diff)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.isEmpty()) {
        return
    }
    let diff = this.topDiff()
    this.min = diff <= 0 ? this.min - diff : this.min
    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    let diff = this.topDiff()
    return diff <= 0 ? this.min : diff + this.min
};

/**
 * @return {number}
 */
 MinStack.prototype.topDiff = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min
};

/**
 * @return {boolean}
 */
 MinStack.prototype.isEmpty = function() {
    return this.stack.length === 0 ? true : false
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */