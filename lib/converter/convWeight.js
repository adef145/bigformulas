'use strict';

function convWeight(value, from, to) {
  var result = value;
  if (from.toLowerCase() !== to.toLowerCase()) {
    var param = [];
    param['mg'] = 1; // miligram
    param['cg'] = param['mg'] * 10; // centigram
    param['dg'] = param['cg'] * 10; // desigram
    param['g'] = param['dg'] * 10; // gram
    param['dag'] = param['g'] * 10; // dekagram
    param['hg'] = param['dag'] * 10; // hektogram
    param['kg'] = param['hg'] * 10; // kilogram

    result = (param[from.toLowerCase()] / param[to.toLowerCase()]) * value;
  }
  return result;
}

module.exports = convWeight;