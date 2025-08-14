const repeatString = function(string, num) {
  let result = string;

  for (let n = 0; n < num - 1; n++) {
    result += string;
  }

  return result;
};

// Do not edit below this line
module.exports = repeatString;
