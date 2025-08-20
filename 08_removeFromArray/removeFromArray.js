const removeFromArray = function(array, ...args) {
  const tempArray = [];

  for (const item of array) {
    if (!args.includes(item)) tempArray.push(item);
  }

  return tempArray;
};

// Do not edit below this line
module.exports = removeFromArray;
