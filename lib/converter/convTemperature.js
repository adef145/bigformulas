'use strict';

function convCelcius(value, from) {
  var result = 0;
  switch (from) {
    case 'R': // reamur
      result = (5/4) * value;
      break;
    case 'F': // fahrenheit
      result = (value - 32) * (5/9);
      break;
    case 'K': // kelvin
      result = value - 273;
      break;
  }
  return result;
}

// value always from celcius
function convReamur(value) {
  return (4/5) * value;
}

// value always from celcius
function convFahrenheit(value) {
  return ((9/5) * value) + 32;
}

// value always from celcius
function convKelvin(value) {
  return value + 273;
}

function convTemperature(value, from, to) {
  var result = value;
  if (from.toUpperCase() !== to.toUpperCase()) {
    if (from.toUpperCase() !== 'C') { // from celcius
      result = convCelcius(value, from.toUpperCase());
    }
    switch (to.toUpperCase()) {
      case 'R': // reamur
        result = convReamur(result);
        break;
      case 'F': // fahrenheit
        result = convFahrenheit(result);
        break;
      case 'K': // kelvin
        result = convKelvin(result);
        break;
    }
  }
  return result;
}

module.exports = convTemperature;