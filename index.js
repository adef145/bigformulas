'use strict';

var collection = {
  // statistic
  mean: require('./lib/statistic/mean'),
  median: require('./lib/statistic/median'),
  modus: require('./lib/statistic/modus'),
  max: require('./lib/statistic/max'),
  maxDiff: require('./lib/statistic/maxDiff'),
  min: require('./lib/statistic/min'),
  // matrix
  transpose: require('./lib/matrix/transpose'),
  // collection
  lookup: require('./lib/collection/lookup'),
  // datetime
  dateAdd: require('./lib/datetime/dateAdd'),
  dateDiff: require('./lib/datetime/dateDiff'),
  // converter
  convTemperature: require('./lib/converter/convTemperature'),
  convTime: require('./lib/converter/convTime'),
  convDistance: require('./lib/converter/convDistance'),
  convWeight: require('./lib/converter/convWeight'),
  // logical
  isEven: require('./lib/logical/isEven'),
  isOdd: require('./lib/logical/isOdd'),
  isEmail: require('./lib/logical/isEmail')
};

module.exports = collection;