import { TBoard, TCellInfo } from '../common.types';

export function openCell(matrix: TBoard, cell: TCellInfo): TBoard {
  if (matrix[cell.x][cell.y].value === 0) {
    openNeighborsCells(matrix, cell);
  } else {
    matrix[cell.x][cell.y].isOpened = true;
  }

  return matrix;
}

function openNeighborsCells(matrix: TBoard, cell: TCellInfo) {
  const i = cell.x;
  const j = cell.y;

  matrix[i][j].isOpened = true;

  if (i === 0 && j === 0) {
    checkOnZeroValueOrOpenCell(matrix, i + 1, j);

    checkOnZeroValueOrOpenCell(matrix, i, j + 1);

    checkOnZeroValueOrOpenCell(matrix, i + 1, j + 1);
  } else if (i === 15 && j === 15) {
    checkOnZeroValueOrOpenCell(matrix, i - 1, j);

    checkOnZeroValueOrOpenCell(matrix, i, j - 1);

    checkOnZeroValueOrOpenCell(matrix, i - 1, j - 1);
  } else if (i === 0 && j === 15) {
    checkOnZeroValueOrOpenCell(matrix, i + 1, j);

    checkOnZeroValueOrOpenCell(matrix, i, j - 1);

    checkOnZeroValueOrOpenCell(matrix, i + 1, j - 1);
  } else if (i === 15 && j === 0) {
    checkOnZeroValueOrOpenCell(matrix, i - 1, j);

    checkOnZeroValueOrOpenCell(matrix, i, j + 1);

    checkOnZeroValueOrOpenCell(matrix, i - 1, j + 1);
  } else if (i === 0) {
    checkOnZeroValueOrOpenCell(matrix, i + 1, j);

    checkOnZeroValueOrOpenCell(matrix, i + 1, j + 1);

    checkOnZeroValueOrOpenCell(matrix, i + 1, j - 1);

    checkOnZeroValueOrOpenCell(matrix, i, j + 1);

    checkOnZeroValueOrOpenCell(matrix, i, j - 1);
  } else if (i === 15) {
    checkOnZeroValueOrOpenCell(matrix, i - 1, j);

    checkOnZeroValueOrOpenCell(matrix, i - 1, j + 1);

    checkOnZeroValueOrOpenCell(matrix, i - 1, j - 1);

    checkOnZeroValueOrOpenCell(matrix, i, j + 1);

    checkOnZeroValueOrOpenCell(matrix, i, j - 1);
  } else if (j === 0) {
    checkOnZeroValueOrOpenCell(matrix, i - 1, j);

    checkOnZeroValueOrOpenCell(matrix, i + 1, j);

    checkOnZeroValueOrOpenCell(matrix, i - 1, j + 1);

    checkOnZeroValueOrOpenCell(matrix, i, j + 1);

    checkOnZeroValueOrOpenCell(matrix, i + 1, j + 1);
  } else if (j === 15) {
    checkOnZeroValueOrOpenCell(matrix, i - 1, j);

    checkOnZeroValueOrOpenCell(matrix, i + 1, j);

    checkOnZeroValueOrOpenCell(matrix, i - 1, j - 1);

    checkOnZeroValueOrOpenCell(matrix, i, j - 1);

    checkOnZeroValueOrOpenCell(matrix, i + 1, j - 1);
  } else {
    checkOnZeroValueOrOpenCell(matrix, i - 1, j);

    checkOnZeroValueOrOpenCell(matrix, i - 1, j + 1);

    checkOnZeroValueOrOpenCell(matrix, i - 1, j - 1);

    checkOnZeroValueOrOpenCell(matrix, i + 1, j);

    checkOnZeroValueOrOpenCell(matrix, i + 1, j + 1);

    checkOnZeroValueOrOpenCell(matrix, i + 1, j - 1);

    checkOnZeroValueOrOpenCell(matrix, i, j + 1);

    checkOnZeroValueOrOpenCell(matrix, i, j - 1);
  }
}

function checkOnZeroValueOrOpenCell(matrix: TBoard, i: number, j: number) {
  if (matrix[i][j].value === 0 && matrix[i][j].isOpened === false) {
    openNeighborsCells(matrix, matrix[i][j]);
  } else {
    matrix[i][j].isOpened = true;
  }
}
