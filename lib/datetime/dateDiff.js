'use strict';

var _ = require('lodash');

function dateDiff(dateTime1, dateTime2) {
  if (!_.isDate(dateTime1) || !_.isDate(dateTime2)) {
    console.log('date is not date type');
    return;
  }

  var result = {};
  var paramSecond = 1000;
  var paramMinute = paramSecond * 60;
  var paramHour = paramMinute * 60;
  var paramDay = paramHour * 24;

  var diff = dateTime2.getTime() - dateTime1.getTime();
  var abs = 1;
  if (diff < 0) {
    abs = -1;
    diff = Math.abs(diff);
  }

  // day
  if (diff >= paramDay) {
    var diffDay = Math.floor(diff / paramDay);
    result.day = diffDay * abs;
    diff -= (diffDay * paramDay);
  }

  // hour
  if (diff >= paramHour) {
    var diffHour = Math.floor(diff / paramHour);
    result.hour = diffHour * abs;
    diff -= (diffHour * paramHour);
  }

  // minute
  if (diff >= paramMinute) {
    var diffMinute = Math.floor(diff / paramMinute);
    result.minute = diffMinute * abs;
    diff -= (diffMinute * paramMinute);
  }

  // second
  if (diff >= paramSecond) {
    var diffSecond = Math.floor(diff / paramSecond);
    result.second = diffSecond * abs;
    diff -= (diffSecond * paramSecond);
  }

  // second
  if (diff > 0) {
    result.milisecond = diff * abs;
  }

  return result;
}

module.exports = dateDiff;