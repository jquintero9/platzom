"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
function platzom(str) {
  var MAX_LENGTH = 10;
  var translation = str;

  var reversed = function reversed(word) {
    return word.split("").reverse().join("");
  };

  // Rule 4
  if (str === reversed(str)) {
    var capitalize = true,
        newWord = "";

    for (var i = 0; i < str.length; i++) {
      newWord += capitalize ? str.charAt(i).toUpperCase() : str.charAt(i).toLowerCase();
      capitalize = !capitalize;
    }

    return newWord;
  }
  // Regla 1
  if (str.toLowerCase().endsWith("ar")) {
    translation = str.slice(0, -2);
  }
  // Rule 2
  if (translation.toLowerCase().startsWith("z")) {
    translation = translation.concat("pe");
  }
  // Rule3
  if (translation.length >= MAX_LENGTH) {
    var HALF_STRING = Math.round((translation.length - 1) / 2);
    var firstPart = translation.substring(0, HALF_STRING);
    var lastPart = translation.substring(HALF_STRING);

    translation = firstPart.concat("-", lastPart);
  }

  return translation;
}