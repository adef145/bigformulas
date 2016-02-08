'use strict';

var _ = require('lodash');

function maxDiffSequence(data, options) {
  var result = {};
  var maxDiff = 0;
  var tmpMin;
  var key = _.get(options, 'key', false);

  _.forEach(data, function(item) {
    if (!tmpMin) {
      tmpMin = item;
    } else {
      var value = (key ? _.get(item, key) : item);
      var valueMin = (key ? _.get(tmpMin, key) : tmpMin);
      if (value - valueMin > maxDiff) {
        result.max = item;
        result.min = tmpMin;
        maxDiff = value - valueMin;
      }
      if (value < valueMin) {
        tmpMin = item;
      }
    }
  });

  return result;
}

function maxDiffRandom(data, options) {
  var result = {};
  var key = _.get(options, 'key', false);

  _.forEach(data, function(item) {
    if (!result.max && !result.min) {
      result.max = item;
      result.min = item;
    } else {
      var value = (key ? _.get(item, key) : item);
      var valueMin = (key ? _.get(result.min, key) : result.min);
      var valueMax = (key ? _.get(result.max, key) : result.max);
      if (value > valueMax) {
        result.max = item;
      }
      if (value < valueMin) {
        result.min = item;
      }
    }
  });
  return result;
}

function maxDiff(data, options) {
  var result;
  var type = _.get(options, 'type', 'random');

  switch (type) {
    case 'sequence':
      result = maxDiffSequence(data, options);
      break;
    default:
      result = maxDiffRandom(data, options);
      break;
  }

  return result;
}

module.exports = maxDiff;