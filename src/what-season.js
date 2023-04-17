const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!arguments.length) return "Unable to determine the time of year!"
  // if (date.length = 0) {
  //   //throw new Error('Unable to determine the time of year!');
  //   return "Unable to determine the time of year!"
  // }
  
  if (Object.prototype.toString.call(date) != '[object Date]' || typeof date == 'string' || Object.getOwnPropertySymbols(date).length !== 0){
    throw new Error('Invalid date!');
    //return "Invalid date!"
  }

  if (date.getMonth() >= 2 && date.getMonth() <= 4) {
    console.log('spring');
    return 'spring'
  }
  if (date.getMonth() >= 5 && date.getMonth() <= 7) {
      console.log('summer');
      return 'summer'
  }
  if (date.getMonth() >= 8 && date.getMonth() <= 10) {
      console.log('autumn');
      return 'autumn'
  }
  if (date.getMonth() == 11 || date.getMonth() >= 0 && date.getMonth() <= 1) {
      console.log('winter');
      return 'winter'
  }
}

module.exports = {
  getSeason
};
