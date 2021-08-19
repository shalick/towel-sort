module.exports = function towelSort (matrix) {
  if(matrix === undefined) {
    return matrix = []
  }
  matrix = matrix.map((x, i) => (i % 2 !== 0) ? x.reverse() : x);
  matrix = [].concat(...matrix);
  return matrix;
}

