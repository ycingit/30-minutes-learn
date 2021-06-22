/**
 * @param {number[]} T
 * @return {number[]}
 */
 var dailyTemperatures = function(T) {
    const res = []
    const stack = []
    T.forEach((item, index) => {
        while(stack.length !==0 && T[stack[stack.length -1]] < item) {
            const num = stack.pop()
            res[num] = index - num
        }
        stack.push(index)
    })
    stack.forEach((item, index) => {
        res[item] = 0
    })
    return res
};