'use strict';

var _ = require('lodash');
var dateAdd = require('./dateAdd');

function getDiff(dateTime1, dateTime2) {
  var diff = dateTime2.getTime() - dateTime1.getTime();
  return diff;
}

function dateDiff(dateTime1, dateTime2) {
  if (!_.isDate(dateTime1) || !_.isDate(dateTime2)) {
    console.log('date is not date type');
    return;
  }

  var tmpDateTime2 = _.cloneDeep(dateTime2);
  var result = {};
  var paramSecond = 1000;
  var paramMinute = paramSecond * 60;
  var paramHour = paramMinute * 60;
  var paramDay = paramHour * 24;

  var diff = getDiff(dateTime1, dateTime2);
  var abs = 1;
  if (diff < 0) {
    abs = -1;
    diff = Math.abs(diff);
  }

  // year
  if (tmpDateTime2.getFullYear() !== dateTime1.getFullYear()
    && (tmpDateTime2.getMonth() >= dateTime1.getMonth()
      || dateTime1.getMonth() >= tmpDateTime2.getMonth())
    && (tmpDateTime2.getDate() >= dateTime1.getDate()
      || dateTime1.getDate() >= tmpDateTime2.getDate())) {
    var diffYear = tmpDateTime2.getFullYear() - dateTime1.getFullYear();
    result.year = diffYear;
    tmpDateTime2 = dateAdd(tmpDateTime2, 'year', -diffYear);
    diff = Math.abs(getDiff(dateTime1, tmpDateTime2));
  }

  // month
  if (tmpDateTime2.getMonth() !== dateTime1.getMonth()
    && (tmpDateTime2.getDate() >= dateTime1.getDate()
      || dateTime1.getDate() >= tmpDateTime2.getDate())) {
    var diffMonth = tmpDateTime2.getMonth() - dateTime1.getMonth();
    result.month = diffMonth;
    tmpDateTime2 = dateAdd(tmpDateTime2, 'month', -diffMonth);
    diff = Math.abs(getDiff(dateTime1, tmpDateTime2));
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