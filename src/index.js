module.exports = function reverse (n) {
  const numStr = n.toString();
  const reversedNum = parseInt(numStr.split('').reverse().join(''));
  return reversedNum
}