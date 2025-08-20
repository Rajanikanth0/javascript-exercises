const sumAll = function(start, end) {
  // Return 'ERROR' for negative numbers
  if ( (start < 0) || (end < 0) ) return 'ERROR';
  // Return 'ERROR' FOR decimal numbers
  if (!Number.isInteger(start) || !Number.isInteger(end)) return "ERROR";
  // set start and end with lower and higher values respectively
  if (start > end) [end, start] = [start, end];

  // Length of the Range
  const len = end + 1 - start;
  // Arithmetic formula
  return (len / 2) * (start + end);
};

// Do not edit below this line
module.exports = sumAll;
