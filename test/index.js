var stringfy = require('json-stable-stringify');
var Formulas = require('../index.js');

var data;

// mean
data = [1, 2, 3, 4];
console.log(Formulas.mean(data) + ' => ' + 2.5);

data = [{num: 1}, {num: 2}, {num: 3}, {num: 4}];
console.log(Formulas.mean(data, {key: 'num'}) + ' => ' + 2.5);

data = [{num: 1}, {num: 2}, {num: 3}, {num: 4}];
console.log(Formulas.mean(data, {key: 'num', isCounted: function(item) {
  return item.num > 1;
}}) + ' => ' + 3);

// median
data = [3, 1, 2, 4];
console.log(Formulas.median(data) + ' => ' + 2.5);

data = [{num: 4}, {num: 1}, {num: 2}, {num: 3}];
console.log(Formulas.median(data, {key: 'num'}) + ' => ' + 2.5);

data = [3, 1, 2];
console.log(Formulas.median(data) + ' => ' + 2);

data = [{num: 1}, {num: 2}, {num: 3}];
console.log(Formulas.median(data, {key: 'num'}) + ' => ' + 2);

// modus
data = [1, 2, 2, 4];
console.log(stringfy(Formulas.modus(data)) + ' => ' + stringfy({value: 2, count: 2}));

data = [{num: 3}, {num: 1}, {num: 2}, {num: 1}];
console.log(stringfy(Formulas.modus(data, {key: 'num'})) + ' => ' + stringfy({value: 1, count: 2}));

data = [{num: 3}, {num: 1}, {num: 2}, {num: 1}];
console.log(stringfy(Formulas.modus(data, {key: 'num', isCounted: function(item) {
  return item.num > 1;
}})) + ' => ' + stringfy({value: 3, count: 1}));

// transpose
data = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
console.log(Formulas.transpose(data));

data = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
console.log(Formulas.transpose(data));

// max
data = [1, 2, 3];
console.log(Formulas.max(data));

data = [{num: 3}, {num: 1}, {num: 2}, {num: 1}];
console.log(Formulas.max(data, {key: 'num'}));

// min
data = [1, 2, 3];
console.log(Formulas.min(data));

data = [{num: 3}, {num: 1}, {num: 2}, {num: 1}];
console.log(Formulas.min(data, {key: 'num'}));

// lookup
var data1 = [{id: 1, name: 'Ade'}, {id: 2, name: 'Fruandta'}];
var data2 = [{id: 1, parentId: 1, favorite: true}, {id: 2, parentId: 3, favorite: false}];
console.log(Formulas.lookup(data1, data2, {
  key1: 'id',
  key2: 'parentId'
}));

data1 = [{id: 1, name: 'Ade'}, {id: 2, name: 'Fruandta'}];
data2 = [{id: 1, parentId: 3, favorite: true}, {id: 2, parentId: 2, favorite: false}];
console.log(Formulas.lookup(data1, data2, {
  key1: 'id',
  key2: 'parentId',
  alias: 'favorited',
  isEqual: function(item1, item2) {
    return item1 === item2;
  }
}));