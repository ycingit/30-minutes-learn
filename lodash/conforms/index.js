const lodash = require('../lodash.min');
const fn = lodash.conforms({ 'b': function(n) { return n > 1; } })

console.log(fn)

var objects = [
    { 'a': 2, 'b': 1 },
    { 'a': 1, 'b': 2 }
];

console.log(lodash.filter(objects, fn))

var object = { 'a': 1, 'b': 2 };
 
console.log(lodash.conformsTo(object, { 'b': function(n) { return n > 1; } }))
console.log(lodash.conformsTo(object, { 'b': function(n) { return n > 2; } }))
 