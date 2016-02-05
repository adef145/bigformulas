# Big Formulas

This code for everyone who need Collection formulas (likes mean, median, modus, etc) or Matrix function (like transpose, etc).
This code used [lodash](https://github.com/lodash/lodash "lodash").

## How to use

This code build in nodejs.

Targeting dependencies to
```bash
npm install bigformulas
```

Require bigformulas
```bash
var Formulas = require('bigformulas');
```

## Example

```bash
var Formulas = require('bigformulas');

// mean
data = [1, 2, 3, 4];
console.log(Formulas.mean(data) + ' => ' + 2.5);
```

## Dictionary

###### max(data, options)
* data: collection of data to calculated
* options: 
  * key: if data an object give a string of key
```bash
data = [1, 2, 3];
console.log(Formulas.max(data));

data = [{num: 3}, {num: 1}, {num: 2}, {num: 1}];
console.log(Formulas.max(data, {key: 'num'}));
```

###### min(data, options)
* data: collection of data to calculated
* options: 
  * key: if data an object give a string of key
```bash
data = [1, 2, 3];
console.log(Formulas.min(data));

data = [{num: 3}, {num: 1}, {num: 2}, {num: 1}];
console.log(Formulas.min(data, {key: 'num'}));
```

###### mean(data, options)
* data: collection of data to calculated
* options:
  * key: if data an object give a string of key
  * isCounted: give a function to check data to calculated (default always true)
```bash
data = [1, 2, 3];
console.log(Formulas.min(data));

data = [{num: 3}, {num: 1}, {num: 2}, {num: 1}];
console.log(Formulas.min(data, {key: 'num'}));

data = [{num: 1}, {num: 2}, {num: 3}, {num: 4}];
console.log(Formulas.mean(data, {key: 'num', isCounted: function(item) {
  return item.num > 1;
}}) + ' => ' + 3);
```

###### median(data, options)
* data: collection of data to calculated
* options:
  * key: if data an object give a string of key
```bash
data = [3, 1, 2, 4];
console.log(Formulas.median(data) + ' => ' + 2.5);

data = [{num: 4}, {num: 1}, {num: 2}, {num: 3}];
console.log(Formulas.median(data, {key: 'num'}) + ' => ' + 2.5);
```

###### modus(data, options)
* data: collection of data to calculated
* options:
  * key: if data an object give a string of key
  * isCounted: give a function to check data to calculated (default always true)
```bash
data = [1, 2, 2, 4];
console.log(Formulas.modus(data));

data = [{num: 3}, {num: 1}, {num: 2}, {num: 1}];
console.log(Formulas.modus(data, {key: 'num'}));

data = [{num: 3}, {num: 1}, {num: 2}, {num: 1}];
console.log(Formulas.modus(data, {key: 'num', isCounted: function(item) {
  return item.num > 1;
}}));
```

###### traspose(data)
* data: collection of data to transpose
```bash
data = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
console.log(Formulas.transpose(data));

data = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
console.log(Formulas.transpose(data));
```

###### lookup(data1, data2, options)
* data1: collection of data source
* data2: collection of data to lookup
* options:
 * key1: key of data1 to be lookup
 * key2: key of data2 to be lookup
 * alias: alias of child to be stored in data1 if lookup (default 'child')
 * isEqual: function to be validated that data is founded (default isEqual from lodash)
```bash
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
```