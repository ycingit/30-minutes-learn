const lodash = require('../lodash.min');

var greet = function(greeting, name) {
    return greeting + ' ' + name;
};

var sayHelloTo = lodash.partial(greet, 'hello');
console.log( sayHelloTo('fred'));
// => 'hello fred'

// 使用了占位符。
var greetFred = lodash.partial(greet, lodash, 'fred');
console.log(greetFred('hi'));

console.log(lodash.now())
// => 'hi fred'