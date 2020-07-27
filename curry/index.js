const add = (x, y) => x + y;
const addCurried = x => y => x + y; //柯里化
console.log(addCurried(4)(4))

const curry = binaryFn => {
    return function(firstArg){
        return function(secondArg){
            return binaryFn(firstArg,secondArg);
        }
    }
}

let autoCurriedAdd = curry(add)
console.log(autoCurriedAdd(2)(2))

const tableOf2 = y => 2 * y;
const tableOf3 = y => 3 * y;
const tableOf4 = y => 4 * y;

console.log(tableOf2(4))
console.log(tableOf3(4))
console.log(tableOf4(4))

const genericTable = (x, y) => x * y

const curryTableOf2 = curry(genericTable)(2)
const curryTableOf3 = curry(genericTable)(3)
const curryTableOf4 = curry(genericTable)(4)

console.log(curryTableOf2(4))
console.log(curryTableOf3(4))
console.log(curryTableOf4(4))