'use strict';

var collection = {
  mean: require('./lib/statistic/mean.js'),
  median: require('./lib/statistic/median.js'),
  modus: require('./lib/statistic/modus.js'),
  max: require('./lib/statistic/max.js'),
  min: require('./lib/statistic/min.js'),
  transpose: require('./lib/matrix/transpose.js'),
  lookup: require('./lib/collection/lookup.js'),
  dateAdd: require('./lib/datetime/dateAdd.js'),
  dateDiff: require('./lib/datetime/dateDiff.js')
};

module.exports = collection;