'use strict';

var _ = require('lodash');

const _month = [
  'JANUARY',
  'FEBRUARY',
  'MARCH',
  'APRIL',
  'MAY',
  'JUNE',
  'JULY',
  'AUGUST',
  'SEPTEMBER',
  'OCTOBER',
  'NOVEMBER',
  'DECEMBER'
]

function dateFormat(dateTime, format) {
  if (!_.isDate(dateTime)) {
    console.log('date is not date type');
    return;
  }

  var result = format;
  if (result.search('DD') > -1) {
    var date = dateTime.getDate().toString();
    result = result.replace('DD', '0'.repeat(2 - date.length) + date);
  }
  if (result.search('MMMM') > -1) {
    var month = dateTime.getMonth();
    result = result.replace('MMMM', _month[month]);
  } else if (result.search('MMM') > -1) {
    var month = dateTime.getMonth();
    result = result.replace('MMM', _month[month].substring(0, 3));
  } else if (result.search('MM') > -1) {
    var month = (dateTime.getMonth() + 1).toString();
    result = result.replace('MM', '0'.repeat(2 - month.length) + month);
  }
  if (result.search('YYYY') > -1) {
    var year = dateTime.getFullYear();
    result = result.replace('YYYY', year);
  } else if (result.search('YY') > -1) {
    var year = dateTime.getFullYear().toString().substring(2);
    result = result.replace('YY', year);
  }
  if (result.search('hh') > -1) {
    var hour = dateTime.getHours().toString();
    result = result.replace('hh', '0'.repeat(2 - hour.length) + hour);
  }
  if (result.search('mm') > -1) {
    var minute = dateTime.getMinutes().toString();
    result = result.replace('mm', '0'.repeat(2 - minute.length) + minute);
  }
  if (result.search('ss') > -1) {
    var second = dateTime.getSeconds().toString();
    result = result.replace('ss', '0'.repeat(2 - second.length) + second);
  }

  return result;
}

module.exports = dateFormat;