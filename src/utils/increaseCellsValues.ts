import { TBoard } from '../common.types';

export function increaseCellsValuesAroundMine(matrix: TBoard, i: number, j: number) {
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

function increaseRightUpTriangle(matrix: TBoard, i: number, j: number) {
  matrix[i - 1][j].value += 1;
  matrix[i][j + 1].value += 1;
  matrix[i - 1][j + 1].value += 1;
}
function increaseRightDownTriangle(matrix: TBoard, i: number, j: number) {
  matrix[i + 1][j].value += 1;
  matrix[i][j + 1].value += 1;
  matrix[i + 1][j + 1].value += 1;
}

function increaseLeftUpTriangle(matrix: TBoard, i: number, j: number) {
  matrix[i - 1][j].value += 1;
  matrix[i][j - 1].value += 1;
  matrix[i - 1][j - 1].value += 1;
}

function increaseLeftDownTriangle(matrix: TBoard, i: number, j: number) {
  matrix[i + 1][j].value += 1;
  matrix[i][j - 1].value += 1;
  matrix[i + 1][j - 1].value += 1;
}

function increaseRightThreeCells(matrix: TBoard, i: number, j: number) {
  matrix[i + 1][j].value += 1;
  matrix[i + 1][j + 1].value += 1;
  matrix[i + 1][j - 1].value += 1;
}

function increaseLeftThreeCells(matrix: TBoard, i: number, j: number) {
  matrix[i - 1][j].value += 1;
  matrix[i - 1][j + 1].value += 1;
  matrix[i - 1][j - 1].value += 1;
}

function increaseDownThreeCells(matrix: TBoard, i: number, j: number) {
  matrix[i - 1][j + 1].value += 1;
  matrix[i][j + 1].value += 1;
  matrix[i + 1][j + 1].value += 1;
}

function increaseUpThreeCells(matrix: TBoard, i: number, j: number) {
  matrix[i - 1][j - 1].value += 1;
  matrix[i][j - 1].value += 1;
  matrix[i + 1][j - 1].value += 1;
}

function increaseUpAndDownCells(matrix: TBoard, i: number, j: number) {
  matrix[i][j + 1].value += 1;
  matrix[i][j - 1].value += 1;
}
function increaseLeftAndRightCells(matrix: TBoard, i: number, j: number) {
  matrix[i - 1][j].value += 1;
  matrix[i + 1][j].value += 1;
}
