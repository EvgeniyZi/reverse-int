module.exports = function reverse (n) {
  let nPositive = Math.abs(n);
  return nPositive.toString().split('').reverse().join('');
}
