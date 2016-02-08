'use strict';

function convDistance(value, from, to) {
  var result = value;
  if (from.toLowerCase() !== to.toLowerCase()) {
    var param = [];
    param['mm'] = 1; // milimeter
    param['cm'] = param['mm'] * 10; // centimeter
    param['dm'] = param['cm'] * 10; // desimeter
    param['m'] = param['dm'] * 10; // meter
    param['dam'] = param['m'] * 10; // dekameter
    param['hm'] = param['dam'] * 10; // hektometer
    param['km'] = param['hm'] * 10; // kilometer

    result = (param[from.toLowerCase()] / param[to.toLowerCase()]) * value;
  }
  return result;
}

module.exports = convDistance;