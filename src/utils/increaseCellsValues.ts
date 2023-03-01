export function increaseCellsValuesAroundMine(
  matrix: number[][],
  i: number,
  j: number
) {
  if (i === 0 && j === 0) {
    increaseRightDownTriangle(matrix, i, j);
  } else if (i === 15 && j === 15) {
    increaseLeftUpTriangle(matrix, i, j);
  } else if (i === 0 && j === 15) {
    increaseLeftDownTriangle(matrix, i, j);
  } else if (i === 15 && j === 0) {
    increaseRightUpTriangle(matrix, i, j);
  } else if (i === 0) {
    increaseRightThreeCells(matrix, i, j);
    increaseUpAndDownCells(matrix, i, j);
  } else if (i === 15) {
    increaseLeftThreeCells(matrix, i, j);
    increaseUpAndDownCells(matrix, i, j);
  } else if (j === 0) {
    increaseLeftAndRightCells(matrix, i, j);
    increaseDownThreeCells(matrix, i, j);
  } else if (j === 15) {
    increaseLeftAndRightCells(matrix, i, j);
    increaseUpThreeCells(matrix, i, j);
  } else {
    increaseLeftThreeCells(matrix, i, j);
    increaseRightThreeCells(matrix, i, j);
    increaseUpAndDownCells(matrix, i, j);
  }
}

function increaseRightUpTriangle(matrix: number[][], i: number, j: number) {
  matrix[i - 1][j] += 1;
  matrix[i][j + 1] += 1;
  matrix[i - 1][j + 1] += 1;
}
function increaseRightDownTriangle(matrix: number[][], i: number, j: number) {
  matrix[i + 1][j] += 1;
  matrix[i][j + 1] += 1;
  matrix[i + 1][j + 1] += 1;
}

function increaseLeftUpTriangle(matrix: number[][], i: number, j: number) {
  matrix[i - 1][j] += 1;
  matrix[i][j - 1] += 1;
  matrix[i - 1][j - 1] += 1;
}

function increaseLeftDownTriangle(matrix: number[][], i: number, j: number) {
  matrix[i + 1][j] += 1;
  matrix[i][j - 1] += 1;
  matrix[i + 1][j - 1] += 1;
}

function increaseRightThreeCells(matrix: number[][], i: number, j: number) {
  matrix[i + 1][j] += 1;
  matrix[i + 1][j + 1] += 1;
  matrix[i + 1][j - 1] += 1;
}

function increaseLeftThreeCells(matrix: number[][], i: number, j: number) {
  matrix[i - 1][j] += 1;
  matrix[i - 1][j + 1] += 1;
  matrix[i - 1][j - 1] += 1;
}

function increaseDownThreeCells(matrix: number[][], i: number, j: number) {
  matrix[i - 1][j + 1] += 1;
  matrix[i][j + 1] += 1;
  matrix[i + 1][j + 1] += 1;
}

function increaseUpThreeCells(matrix: number[][], i: number, j: number) {
  matrix[i - 1][j - 1] += 1;
  matrix[i][j - 1] += 1;
  matrix[i + 1][j - 1] += 1;
}

function increaseUpAndDownCells(matrix: number[][], i: number, j: number) {
  matrix[i][j + 1] += 1;
  matrix[i][j - 1] += 1;
}
function increaseLeftAndRightCells(matrix: number[][], i: number, j: number) {
  matrix[i - 1][j] += 1;
  matrix[i + 1][j] += 1;
}
