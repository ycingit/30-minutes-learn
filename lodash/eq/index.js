const _ = require('../lodash.min');

var object = { 'a': 1 };
var other = { 'a': 1 };
 
console.log(_.eq(object, object))

console.log(_.eq(object, other))

console.log(_.isEqual(object, other))

console.log(_.eq('a', 'a'))

console.log(_.eq('a', Object('a')))

console.log(_.eq(NaN, NaN))

console.log(_.eq(undefined, undefined))
