const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = ''
  let val = 1;
  let arrStr = str.split('');
  arrStr.forEach((e, i) => {
    if (e == arrStr[i+1]) {
      val++
    } else {
      if (val > 1) {
        res += val+e;
        val = 1
      }else{
        res += e
        val = 1
      }
    }
  })

  return res

}


module.exports = {
  encodeLine
};
