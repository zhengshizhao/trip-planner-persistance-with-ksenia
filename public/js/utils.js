'use strict';

var utilsModule = {

// Merges source object keys to target object keys
  merge: function (source, target) {
    Object.keys(source).forEach(function (key) {
      target[key] = source[key];
    });
  },

// Pushes item into array if it doesn't yet exist in the array
  pushUnique: function (array, item) {
    if (array.indexOf(item) > -1) return;
    return array.push(item);
  },

  // Removes item from the array
   remove: function (array, item) {
    var index = array.indexOf(item);
    if (index === -1) return;
    return array.splice(index, 1);
  }

};
