const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let res = [];
  //let newArr = [...matrix].flat();
  // console.log(newArr);
  // newArr.forEach((e,i) => {
  //   let r = 0;
  //   if (newArr[i-matrix[0].length - 1] == true){r++}
  //   if (newArr[i-matrix[0].length] == true){r++}
  //   if (newArr[i-matrix[0].length + 1] == true){r++}

  //   if (newArr[i-1] == true){r++}
  //   if (newArr[i+1] == true){r++}

  //   if (newArr[i+matrix[0].length - 1] == true){r++}
  //   if (newArr[i+matrix[0].length] == true){r++}
  //   if (newArr[i+matrix[0].length + 1] == true){r++}

  //   res.push(r)
  // })
  for(let i = 0; i < matrix.length; i++) {
    res[i] = [];

    for(let j = 0; j < matrix[0].length; j++) {
      let num = 0;
      if (matrix[i - 1]) {
        if(matrix[i - 1][j]) num++;
        if(matrix[i - 1][j + 1]) num++;
        if(matrix[i - 1][j - 1]) num++;
      }
      if(matrix[i][j - 1]) num++;
      if(matrix[i][j + 1]) num++;
      if (matrix[i + 1]) {
        if(matrix[i + 1][j]) num++;
        if(matrix[i + 1][j + 1]) num++;
        if(matrix[i + 1][j - 1]) num++;
      }
      res[i][j] = num;
    }
  }
  console.log(res);
  return res;
}

// const matrix = [
//   [true, false, false],
//   [false, true, false],
//   [false, false, false]
// ];
// minesweeper(matrix)   // => [ [1, 2, 1], [2, 1, 1], [1, 1, 1] ];

module.exports = {
  minesweeper
};
