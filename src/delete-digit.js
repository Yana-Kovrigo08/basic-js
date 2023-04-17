const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nn = (''+n).split('');
  let res = 0;
  for (let i = 0; i < nn.length; i++) {
    let copyNN = [...nn]
    let v = copyNN.splice(i, 1)
    copyNN.join('') > res ? res = copyNN.join('') : res
  }
  return +res
}

//deleteDigit(152)  //  => 52

module.exports = {
  deleteDigit
};
