'use strict';

function right(text, totalWord) {
  if (text.length < totalWord) {
    console.log('lenght text < totalWord');
    return;
  }

  return text.substring(text.length - totalWord);
}

module.exports = right;