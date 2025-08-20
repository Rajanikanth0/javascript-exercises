const sumAll = function(start, end) {
  // Return 'ERROR' for negative numbers
  if ( (start < 0) || (end < 0) ) return 'ERROR';
  // Return 'ERROR' FOR decimal numbers
  if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
  // set start and end with lower and higher values respectively
  if (start > end) [end, start] = [start, end];

  // Init final result with start
  let result = 0;

  // Iterate from start to end
  for (let n = start; n <= end; n++) {
    // Add n numbers to the result
    result += n;
  }

  // Return the result
  return result;
};

// Do not edit below this line
module.exports = sumAll;
