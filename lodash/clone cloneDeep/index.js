const lodash = require('../lodash.min');

var objects = [{ 'a': 1 }, { 'b': 2 }];
 
var shallow = lodash.clone(objects);
var shallow2 = lodash.cloneDeep(objects)
objects[0]['a'] = 2
console.log(shallow, shallow[0] === objects[0], shallow2, shallow2[0] === objects[0]);
