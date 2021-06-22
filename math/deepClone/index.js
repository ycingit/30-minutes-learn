// 利用 WeakMap 解决循环引用
let map = new WeakMap();
function deepClone(obj) {
    if (obj instanceof Object) {
        if (map.has(obj)) {
            return map.get(obj);
        }
        let newObj;
        if (obj instanceof Array) {
            newObj = [];
        } else if (obj instanceof Function) {
            newObj = function () {
                return obj.apply(this, arguments);
            };
        } else if (obj instanceof RegExp) {
            // 拼接正则
            newObj = new RegExp(obj.source, obj.flags);
        } else if (obj instanceof Date) {
            newObj = new Date(obj);
        } else {
            newObj = {};
        }
        // 克隆一份对象出来
        let desc = Object.getOwnPropertyDescriptors(obj);
        let clone = Object.create(Object.getPrototypeOf(obj), desc);
        map.set(obj, clone);
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                newObj[key] = deepClone(obj[key]);
            }
        }
        return newObj;
    }
    return obj;
}

var d = { a: { a:1 } };
var c = deepClone(d); 
c.a = { b: 1 };
console.log(c , d);