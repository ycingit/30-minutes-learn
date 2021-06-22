/**
 * initialize your data structure here.
 */
 var Stack = function() {
    this.stack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
Stack.prototype.push = function(x) {
    this.stack.push(x)
};

/**
 * @return {void}
 */
Stack.prototype.pop = function() {
    if (this.isEmpty()) {
        return null
    }
    this.stack.pop()
};

/**
 * @return {number}
 */
Stack.prototype.top = function() {
    if (this.isEmpty()) {
        return null
    }
    return this.stack[this.stack.length - 1]
};

/**
 * @return {boolean}
 */
 Stack.prototype.isEmpty = function() {
    return this.stack.length === 0 ? true : false
};
