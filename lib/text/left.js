'use strict';

function left(text, totalWord) {
  if (text.length < totalWord) {
    console.log('lenght text < totalWord');
    return;
  }

  return text.substring(0, totalWord);
}

module.exports = left;