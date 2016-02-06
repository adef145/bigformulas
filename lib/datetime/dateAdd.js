'use strict';

var _ = require('lodash');

function dateAdd(dateTime, type, value) {
  if (!_.isDate(dateTime)) {
    console.log('date is not date type');
    return;
  }

  var paramSecond = 1000;
  var paramMinute = paramSecond * 60;
  var paramHour = paramMinute * 60;
  var time = dateTime.getTime();
  var date = dateTime.getDate();
  var month = dateTime.getMonth();
  var year = dateTime.getFullYear();

  switch (type) {
    case 'milisecond':
      dateTime.setTime(time + value);
      break;
    case 'second':
      dateTime.setTime(time + (value * paramSecond));
      break;
    case 'minute':
      dateTime.setTime(time + (value * paramMinute));
      break;
    case 'hour':
      dateTime.setTime(time + (value * paramHour));
      break;
    case 'day':
      dateTime.setDate(date + value);
      break;
    case 'month':
      dateTime.setMonth(month + value);
      break;
    case 'year':
      dateTime.setYear(year + value);
      break;
    default:
      dateTime.setTime(time + value);
      break;
  }

  return dateTime;
}

module.exports = dateAdd;