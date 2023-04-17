const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let num = (''+n).split('').reduce((a,b) => +a + +b);
  if (num > 9) return getSumOfDigits(num)
  else return num
}
// getSumOfDigits(91) //1);
// getSumOfDigits(100)// 1);
// getSumOfDigits(35) //8);
// getSumOfDigits(99) //9);
// getSumOfDigits(123)// 6);

module.exports = {
  getSumOfDigits
};
