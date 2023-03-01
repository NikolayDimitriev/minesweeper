export function increaseCellsValuesAroundMine(
  matrix: number[][],
  i: number,
  j: number
) {
  if (i === 0 && j === 0) {
    matrix[i + 1][j] += 1;
    matrix[i][j + 1] += 1;
    matrix[i + 1][j + 1] += 1;
  } else if (i === 15 && j === 15) {
    matrix[i - 1][j] += 1;
    matrix[i][j - 1] += 1;
    matrix[i - 1][j - 1] += 1;
  } else if (i === 0 && j === 15) {
    matrix[i + 1][j] += 1;
    matrix[i][j - 1] += 1;
    matrix[i + 1][j - 1] += 1;
  } else if (i === 15 && j === 0) {
    matrix[i - 1][j] += 1;
    matrix[i][j + 1] += 1;
    matrix[i - 1][j + 1] += 1;
  } else if (i === 0) {
    matrix[i + 1][j] += 1;
    matrix[i + 1][j + 1] += 1;
    matrix[i + 1][j - 1] += 1;
    matrix[i][j + 1] += 1;
    matrix[i][j - 1] += 1;
  } else if (i === 15) {
    matrix[i - 1][j] += 1;
    matrix[i - 1][j + 1] += 1;
    matrix[i - 1][j - 1] += 1;
    matrix[i][j + 1] += 1;
    matrix[i][j - 1] += 1;
  } else if (j === 0) {
    matrix[i - 1][j] += 1;
    matrix[i + 1][j] += 1;
    matrix[i - 1][j + 1] += 1;
    matrix[i][j + 1] += 1;
    matrix[i + 1][j + 1] += 1;
  } else if (j === 15) {
    matrix[i - 1][j] += 1;
    matrix[i + 1][j] += 1;
    matrix[i - 1][j - 1] += 1;
    matrix[i][j - 1] += 1;
    matrix[i + 1][j - 1] += 1;
  } else {
    matrix[i - 1][j + 1] += 1;
    matrix[i][j + 1] += 1;
    matrix[i + 1][j + 1] += 1;
    matrix[i + 1][j] += 1;
    matrix[i - 1][j] += 1;
    matrix[i - 1][j - 1] += 1;
    matrix[i][j - 1] += 1;
    matrix[i + 1][j - 1] += 1;
  }
}
