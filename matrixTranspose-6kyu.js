// Write a function that outputs the transpose of a matrix - a new matrix where the columns and rows of the original are swapped.

// For example, the transpose of:

// | 1 2 3 |
// | 4 5 6 |

// is

// | 1 4 |
// | 2 5 |
// | 3 6 |

// The input to your function will be an array of matrix rows. You can assume that each row has the same length, and that the height and width of the matrix are both positive.

const transpose = (matrix) => {
  let newMatrix = [];
  let miniArr = [];
  let counter = 0;

  // Loop through matrix, pick first item in each arr, create arr with items, push arr to newMatrix
  while (counter < matrix[0].length) {
    for (let k = 0; k < matrix.length; k++) {
      miniArr.push(matrix[k][counter]);
    }
    newMatrix.push(miniArr);
    miniArr = [];
    counter++;
  }
  return newMatrix
};

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
  ])
); // [[1,4], [2,5], [3,6]]
