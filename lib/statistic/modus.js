'use strict';

var _ = require('lodash');

function modus(data, options) {
  var key = _.get(options, 'key', false);
  var isCounted = _.get(options, 'isCounted', function() { return true; });
  var coll = [];
  var max = {
    value: {},
    count: 0
  };

  _.forEach(data, function(item) {
    if (isCounted(item)) {
      var count = 0;
      if (key) {
        coll[_.get(item, key, 0) + ''] = (coll[_.get(item, key, 0) + ''] || 0);
        coll[_.get(item, key, 0) + ''] += 1;
        count = coll[_.get(item, key, 0) + ''];
      } else {
        coll[item + ''] = (coll[item + ''] || 0);
        coll[item + ''] += 1;
        count = coll[item + ''];
      }

      if (max.count < count) {
        max.value = item;
        max.count = count;
      }
    }
  });

  return max;
}

module.exports = modus;