'use strict';

var _ = require('lodash');

function mean(data, options) {
  var key = _.get(options, 'key', false);
  var isCounted = _.get(options, 'isCounted', function() { return true; });
  var total = 0;
  var count = 0;

  _.forEach(data, function(item) {
    if (isCounted(item)) {
      if (key) {
        total += _.get(item, key, 0);
      } else {
        total += item;
      }
      count += 1;
    }
  });

  return total / count;
}

module.exports = mean;