'use strict';

var collection = {
  mean: require('./lib/statistic/mean'),
  median: require('./lib/statistic/median'),
  modus: require('./lib/statistic/modus'),
  max: require('./lib/statistic/max'),
  maxDiff: require('./lib/statistic/maxDiff'),
  min: require('./lib/statistic/min'),
  transpose: require('./lib/matrix/transpose'),
  lookup: require('./lib/collection/lookup'),
  dateAdd: require('./lib/datetime/dateAdd'),
  dateDiff: require('./lib/datetime/dateDiff'),
  convTemperature: require('./lib/converter/convTemperature')
};

module.exports = collection;