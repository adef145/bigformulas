'use strict';

var _ = require('lodash');

function dateAdd(dateTime, type, value) {
  if (!_.isDate(dateTime)) {
    console.log('date is not date type');
    return;
  }

  var result = _.cloneDeep(dateTime);
  var paramSecond = 1000;
  var paramMinute = paramSecond * 60;
  var paramHour = paramMinute * 60;
  var time = dateTime.getTime();
  var date = dateTime.getDate();
  var month = dateTime.getMonth();
  var year = dateTime.getFullYear();

  switch (type) {
    case 'milisecond':
      result.setTime(time + value);
      break;
    case 'second':
      result.setTime(time + (value * paramSecond));
      break;
    case 'minute':
      result.setTime(time + (value * paramMinute));
      break;
    case 'hour':
      result.setTime(time + (value * paramHour));
      break;
    case 'day':
      result.setDate(date + value);
      break;
    case 'month':
      result.setMonth(month + value);
      break;
    case 'year':
      result.setYear(year + value);
      break;
    default:
      result.setTime(time + value);
      break;
  }

  return result;
}

module.exports = dateAdd;