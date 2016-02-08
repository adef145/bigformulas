'use strict';

function convTime(value, from, to) {
  var result = value;
  if (from.toLowerCase() !== to.toLowerCase()) {
    var param = [];
    param['ms'] = 1; // milisecond
    param['s'] = param['ms'] * 1000; // second
    param['m'] = param['s'] * 60; // minute
    param['h'] = param['m'] * 60; // hour
    param['d'] = param['h'] * 24; // day

    result = (param[from.toLowerCase()] / param[to.toLowerCase()]) * value;
  }
  return result;
}

module.exports = convTime;