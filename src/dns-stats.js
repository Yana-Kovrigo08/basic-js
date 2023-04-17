const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {};
  domains.forEach((e) => {
    let str = '',
        strS = [];
    for (let i = e.split('.').length-1; i >= 0; i--) {
      str += `.${e.split('.')[i]}`;
      strS.push(e.split('.')[i]);
      let r = 0;
      domains.forEach(ee => {
        if(ee.includes([...strS].reverse().join('.'))){
          r++;
        }
      })
      res[str] = r;
    }
  })
  return res;
}

module.exports = {
  getDNSStats
};
