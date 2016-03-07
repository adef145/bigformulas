'use strict';

var _ = require('lodash');

function lookup(data1, data2, options) {
  var result = [];
  var alias = _.get(options, 'alias', 'child');
  var isEqual = _.get(options, 'isEqual', _.isEqual);
  var typeJoin = _.get(options, 'typeJoin', 'inner');
  var item1;
  var flag;
  var itemTemp;

  _.forEach(data1, function(item) {
    item1 = item;
    flag = 0;
    _.forEach(data2, function(item2) {
      if (isEqual(item1, item2)) {
        itemTemp = _.cloneDeep(item1);
        itemTemp[alias] = _.cloneDeep(item2);
        result.push(itemTemp);
        flag = 1;
        return;
      }
    });
    if (typeJoin === 'left' && flag === 0) {
      result.push(_.cloneDeep(item1));
    }
  });

  return _.uniq(result);
}

module.exports = lookup;