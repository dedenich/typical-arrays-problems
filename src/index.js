
exports.min = function min (array) {
  if (!array || array.length == 0) return 0;
  else
  return Math.min(...array);
}

exports.max = function max (array) {
  if (!array || array.length == 0) return 0;
  else
  return Math.max(...array);
}

exports.avg = function avg (array) {
  reducer = (a, c) => a + c;
  if (!array || array.length == 0) return 0;
  else
  return (array.reduce(reducer))/array.length;
}
