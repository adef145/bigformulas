'use strict';

var _ = require('lodash');

function transpose(datas) {
  var results = [];
  var i = 0;
  var j = 0;

  _.forEach(datas, function(data) {
    j = 0;
    _.forEach(data, function(item) {
      var coll = results[j] || [];
      coll.push(item);
      results[j] = coll;
      j++;
    });
  });

  return results;
}

module.exports = transpose;