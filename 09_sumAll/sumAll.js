const sumAll = function(n1, n2) {
  // Return 'ERROR' for negative numbers
  if ( (n1 < 0) || (n2 < 0) ) return 'ERROR';
  // Return 'ERROR' FOR decimal numbers
  if (!Number.isInteger(n1) || !Number.isInteger(n2)) return "ERROR";

  // Init final result with start
  let result = 0;
  
  // Init start and end with lower and higher values respectively
  let [start, end] = (n1 < n2) ? [n1, n2] : [n2, n1];
  // Increment end by 1 to include the last number
  end = end + 1;

  // Iterate from start to end
  for (let n = start; n < end; n++) {
    // Add n numbers to the result
    result += n;
  }

  // Return the result
  return result;
};

// Do not edit below this line
module.exports = sumAll;
