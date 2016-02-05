'use strict';

var _ = require('lodash');

function lookup(data1, data2, options) {
  var key1 = _.get(options, 'key1', false);
  var key2 = _.get(options, 'key2', false);
  var alias = _.get(options, 'alias', 'child');
  var isEqual = _.get(options, 'isEqual', _.isEqual);
  var item1;

  _.forEach(data1, function(item) {
    item1 = item;
    _.forEach(data2, function(item2) {
      if (isEqual(_.get(item1, key1), _.get(item2, key2))) {
        item1[alias] = item2;
        return;
      }
    });
  });

  return data1;
}

module.exports = lookup;