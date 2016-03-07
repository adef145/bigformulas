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
```javascript
var Formulas = require('bigformulas');
```

## Example

```javascript
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
```javascript
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
```javascript
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
```javascript
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
```javascript
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
```javascript
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
```javascript
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
```javascript
data = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];
console.log(Formulas.transpose(data));

data = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
console.log(Formulas.transpose(data));
```

###### lookup(data1, data2, options)
* data1: collection of data source
* data2: collection of data to lookup
* options:
  * alias: alias of child to be stored in data1 if lookup (default 'child')
  * isEqual: function to be validated that data (item in data1 & item in data2) is founded (default isEqual from lodash)
  * typeJoin: type join like 'inner' / 'left' (default is inner)
* return: object
```javascript
var data1 = [{id: 1, name: 'Ade'}, {id: 2, name: 'Fruandta'}];
var data2 = [{id: 1, parentId: 3, favorite: true}, {id: 2, parentId: 2, favorite: false}];
console.log(Formulas.lookup(data1, data2, {
  alias: 'favorited',
  isEqual: function(item1, item2) {
    return item1.id === item2.parentId;
  },
  typeJoin: 'left'
}));
```

###### dateAdd(dateTime, type, value)
* dateTime: datetime value to calculated
* type: string ('milisecond', 'second', 'minute', 'hour', 'day', 'month', 'year')
* value: number
* return: date
```javascript
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
```javascript
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

###### dateFormat(dateTime, format)
* dateTime: date value to formated
* format: string format (DD is date, MM is month value, MMM is name of month only 3 letters, MMMM is full name month, YY is year only 2 numbers right, YYYY is full year, hh is hours, mm is minutes, ss is seconds)
* return: string
```javascript
var date = new Date();
date = Formulas.dateAdd(date, 'day', 2);
console.log(date);
console.log(Formulas.dateFormat(date, 'DD:MM:YY hh:mm:ss'));
console.log(Formulas.dateFormat(date, 'DD MMM YYYY hh:mm:ss'));
console.log(Formulas.dateFormat(date, 'DD MMMM YYYY hh:mm:ss'));
```

###### convTemperatur(value, from, to)
* value: value to calculated
* from: string (celcius is 'C', fahrenheit is 'F', reamur is 'R', kelvin is 'K')
* to: string (celcius is 'C', fahrenheit is 'F', reamur is 'R', kelvin is 'K')
* return: number
```javascript
data = 75;
console.log(Formulas.convTemperature(data, 'R', 'K'));
```

###### convTime(value, from, to)
* value: value to calculated
* from: string (milisecond is 'ms', second is 's', minute is 'm', hour is 'h', day is 'd')
* to: string (milisecond is 'ms', second is 's', minute is 'm', hour is 'h', day is 'd')
* return: number
```javascript
data = 100;
console.log(Formulas.convTime(data, 's', 'm'));
data = 1;
console.log(Formulas.convTime(data, 'd', 'h'));
```

###### convDistance(value, from, to)
* value: value to calculated
* from: string (milimeter is 'mm', centimeter is 'cm', desimeter is 'dm', meter is 'm', dekameter is 'dam', hektometer is 'hm', kilometer is 'km')
* to: string (milimeter is 'mm', centimeter is 'cm', desimeter is 'dm', meter is 'm', dekameter is 'dam', hektometer is 'hm', kilometer is 'km')
* return: number
```javascript
data = 100;
console.log(Formulas.convDistance(data, 'mm', 'm'));
data = 1;
console.log(Formulas.convDistance(data, 'km', 'cm'));
```

###### convWeight(value, from, to)
* value: value to calculated
* from: string (miligram is 'mg', centigram is 'cg', desigram is 'dg', gram is 'g', dekagram is 'dag', hektogram is 'hg', kilogram is 'kg')
* to: string (miligram is 'mg', centigram is 'cg', desigram is 'dg', gram is 'g', dekagram is 'dag', hektogram is 'hg', kilogram is 'kg')
* return: number
```javascript
data = 100;
console.log(Formulas.convWeight(data, 'mg', 'g'));
data = 1;
console.log(Formulas.convWeight(data, 'kg', 'cg'));
```

###### isEven(value)
* value: value to calculated
* return: true / false
```javascript
data = 1;
console.log(Formulas.isEven(data));
```

###### isOdd(value)
* value: value to calculated
* return: true / false
```javascript
data = 1;
console.log(Formulas.isOdd(data));
```

###### isEmail(email)
* email: string email to validated
* return: true / false
```javascript
data = 'ade.fruandta@gmail.com';
console.log(Formulas.isEmail(data));
```

###### right(text, number)
* text: string to be substring
* number: number word to be get from right
* return: string
```javascript
var text = "abcd"
console.log(Formulas.right(text, 2));
```

###### left(text, number)
* text: string to be substring
* number: number word to be get from left
* return: string
```javascript
var text = "abcd"
console.log(Formulas.left(text, 2));
```