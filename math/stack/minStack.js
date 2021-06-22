/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.isEmpty()) {
        return null
    }
    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if (this.isEmpty()) {
        return null
    }
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    let min = null
    this.stack.forEach((item) => {
        if(min === null || min > item) {
            min = item
        }
    })
    return min
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