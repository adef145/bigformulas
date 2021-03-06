var stringfy = require('json-stable-stringify');
var Formulas = require('../index');

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
var data2 = [{id: 1, parentId: 3, favorite: true}, {id: 2, parentId: 2, favorite: false}];
console.log(Formulas.lookup(data1, data2, {
  alias: 'favorited',
  isEqual: function(item1, item2) {
    return item1.id === item2.parentId;
  }
}));
console.log(Formulas.lookup(data1, data2, {
  alias: 'favorited',
  isEqual: function(item1, item2) {
    return item1.id === item2.parentId;
  },
  typeJoin: 'left'
}));

// dateAdd
var date = new Date();
console.log(date);
console.log(Formulas.dateAdd(date, 'second', 1));
console.log(Formulas.dateAdd(date, 'minute', 1));
console.log(Formulas.dateAdd(date, 'hour', 1));
console.log(Formulas.dateAdd(date, 'day', 1));
console.log(Formulas.dateAdd(date, 'month', 1));
console.log(Formulas.dateAdd(date, 'year', 1));

console.log('');

// dateDiff
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

// dateFormat
var date = new Date();
date = Formulas.dateAdd(date, 'day', 2);
console.log(date);
console.log(Formulas.dateFormat(date, 'DD:MM:YY hh:mm:ss'));
console.log(Formulas.dateFormat(date, 'DD MMM YYYY hh:mm:ss'));
console.log(Formulas.dateFormat(date, 'DD MMMM YYYY hh:mm:ss'));

// maxDiff
data = [6, 1, 2, 5];
console.log(Formulas.maxDiff(data));
data = [{num: 6}, {num: 2}, {num: 5}, {num: 1}, {num: 3}];
console.log(Formulas.maxDiff(data, {key: 'num', type: 'sequence'}));

// convTemperatur
data = 75;
console.log(Formulas.convTemperature(data, 'R', 'K'));

// convTime
data = 100;
console.log(Formulas.convTime(data, 's', 'm'));
data = 1;
console.log(Formulas.convTime(data, 'd', 'h'));

// convDistance
data = 100;
console.log(Formulas.convDistance(data, 'mm', 'm'));
data = 1;
console.log(Formulas.convDistance(data, 'km', 'cm'));

// convWeight
data = 100;
console.log(Formulas.convWeight(data, 'mg', 'g'));
data = 1;
console.log(Formulas.convWeight(data, 'kg', 'cg'));

// isEven
data = 1;
console.log(Formulas.isEven(data));

// isOdd
data = 1;
console.log(Formulas.isOdd(data));

// isEmail
data = 1;
console.log(Formulas.isEmail(data));
data = 'ade.fruandta@gmail';
console.log(Formulas.isEmail(data));
data = 'ade.fruandta@gmail.com';
console.log(Formulas.isEmail(data));

// text
var text = "abcd"
console.log(Formulas.left(text, 2));
console.log(Formulas.left(text, 5));
console.log(Formulas.right(text, 2));
console.log(Formulas.right(text, 5));