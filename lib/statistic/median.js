'use strict';

var _ = require('lodash');

function median(data, options) {
  var result;
  var key = _.get(options, 'key', false);
  var sortedData;
  if (key) {
    sortedData = _.sortBy(data, [key]);
  } else {
    sortedData = data.sort();
  }

  var midIndex = sortedData.length / 2;
  if (midIndex % 2 === 0) {
    var first = sortedData[midIndex - 1];
    var second = sortedData[midIndex];
    result = ( key ?
      _.get(second, key, 0) + _.get(first, key, 0)
      : second + first ) / 2;
  } else {
    result = ( key ?
      _.get(sortedData[Math.floor(midIndex)], key, 0)
      : sortedData[Math.floor(midIndex)] );
  }

  return result;
}

module.exports = median;