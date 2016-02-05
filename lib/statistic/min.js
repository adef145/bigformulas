'use strict';

var _ = require('lodash');

function min(data, options) {
  var result = null;
  var key = _.get(options, 'key', false);

  _.forEach(data, function(item) {
    var value = (key ? _.get(item, key) : item);
    var currentValue = (key ? _.get(result, key) : result);
    if (result === null) {
      result = item;
    } else if (currentValue > value) {
      result = item;
    }
  });

  return result;
}

module.exports = min;