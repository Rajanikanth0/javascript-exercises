const removeFromArray = function(array, ...args) {

  for (let index = 0; index < array.length; index++) {
    const item = array[index];

    if (args.includes(item)) {
      array.splice(index, 1);
      index--;
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
