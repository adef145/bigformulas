# Big Formulas

This code for everyone who need Collection formulas (likes mean, median, modus, etc) or Matrix function (like transpose, etc).
This code used [lodash](https://github.com/lodash/lodash "lodash").

## How to use

This code build in nodejs.

Install Big Formulas
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
* return: number / object
```bash
data = [1, 2, 3];
console.log(Formulas.max(data));

data = [{num: 3}, {num: 1}, {num: 2}, {num: 1}];
console.log(Formulas.max(data, {key: 'num'}));
```

###### maxDiff(data, options)
* data: data to calculated
* options:
  * key: if data an object give a string of key
  * type: string ('sequence' or 'random') default 'random'
* return: object {max, min}
```bash
data = [6, 1, 2, 5];
console.log(Formulas.maxDiff(data));
data = [{num: 6}, {num: 1}, {num: 2}, {num: 5}];
console.log(Formulas.maxDiff(data, {key: 'num', type: 'sequence'}));
```

###### min(data, options)
* data: collection of data to calculated
* options:
  * key: if data an object give a string of key
* return: number / object
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
* return: number / object
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
* return: number / object
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
* return: number / object
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
* return: array
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
* return: object
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

###### dateAdd(dateTime, type, value)
* dateTime: datetime value to calculated
* type: string ('milisecond', 'second', 'minute', 'hour', 'day', 'month', 'year')
* value: number
* return: date
```bash
var dateTime = new Date();
console.log(dateTime);
console.log(Formulas.dateAdd(dateTime, 'second', 1));
console.log(Formulas.dateAdd(dateTime, 'minute', 1));
console.log(Formulas.dateAdd(dateTime, 'hour', 1));
console.log(Formulas.dateAdd(dateTime, 'day', 1));
console.log(Formulas.dateAdd(dateTime, 'month', 1));
console.log(Formulas.dateAdd(dateTime, 'year', 1));
```

###### dateDiff(dateTime1, dateTime2)
* dateTime1: date value to calculated
* dateTime2: date value to calculated
* return: object {milisecond, second, minute, hour, day, month, year}
```bash
var date1 = new Date();
var date2 = new Date();
console.log(date1);
date2 = Formulas.dateAdd(date2, 'milisecond', 100);
date2 = Formulas.dateAdd(date2, 'second', 100);
date2 = Formulas.dateAdd(date2, 'minute', 23);
date2 = Formulas.dateAdd(date2, 'hour', 22);
date2 = Formulas.dateAdd(date2, 'day', 2);
date2 = Formulas.dateAdd(date2, 'month', 13);
date2 = Formulas.dateAdd(date2, 'year', 2);
console.log(date2);
console.log(Formulas.dateDiff(date1, date2));
console.log(Formulas.dateDiff(date2, date1));
```

###### convTemperatur(value, from, to)
* value: value to calculated
* from: string (celcius is 'C', fahrenheit is 'F', reamur is 'R', kelvin is 'K')
* to: string (celcius is 'C', fahrenheit is 'F', reamur is 'R', kelvin is 'K')
```bash
data = 75;
console.log(Formulas.convTemperatur(data, 'R', 'K'));
```