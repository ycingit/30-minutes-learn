const object1 = {};

(function () {
    var valueGlobal = 'val'
    Object.defineProperty(object1, 'property1', {
    //   value: 42,
    //   writable: true,
    set(value) {
        console.log('set', value);
        valueGlobal = value;
        return value;
    },
    get() {
        console.log('get', valueGlobal);
        return valueGlobal;
    }
    });
})()

object1.property1 = { name: [
    {a:[{}]}
]};
console.log(1);
object1.property1.name = 1;
// throws an error in strict mode

console.log(object1.property1);
// expected output: 42
