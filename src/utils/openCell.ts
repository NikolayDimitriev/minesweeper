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
    if (matrix[i + 1][j].value === 0 && matrix[i + 1][j].isOpened === false) {
      openNeighborsCells(matrix, matrix[i + 1][j]);
    } else {
      matrix[i + 1][j].isOpened = true;
    }
    if (matrix[i][j + 1].value === 0 && matrix[i][j + 1].isOpened === false) {
      openNeighborsCells(matrix, matrix[i][j + 1]);
    } else {
      matrix[i][j + 1].isOpened = true;
    }
    if (
      matrix[i + 1][j + 1].value === 0 &&
      matrix[i + 1][j + 1].isOpened === false
    ) {
      openNeighborsCells(matrix, matrix[i + 1][j + 1]);
    } else {
      matrix[i + 1][j + 1].isOpened = true;
    }
  } else if (i === 15 && j === 15) {
    if (matrix[i - 1][j].value === 0 && matrix[i - 1][j].isOpened === false) {
      openNeighborsCells(matrix, matrix[i - 1][j]);
    } else {
      matrix[i - 1][j].isOpened = true;
    }
    if (matrix[i][j - 1].value === 0 && matrix[i][j - 1].isOpened === false) {
      openNeighborsCells(matrix, matrix[i][j - 1]);
    } else {
      matrix[i][j - 1].isOpened = true;
    }
    if (
      matrix[i - 1][j - 1].value === 0 &&
      matrix[i - 1][j - 1].isOpened === false
    ) {
      openNeighborsCells(matrix, matrix[i - 1][j - 1]);
    } else {
      matrix[i - 1][j - 1].isOpened = true;
    }
  } else if (i === 0 && j === 15) {
    if (matrix[i + 1][j].value === 0 && matrix[i + 1][j].isOpened === false) {
      openNeighborsCells(matrix, matrix[i + 1][j]);
    } else {
      matrix[i + 1][j].isOpened = true;
    }
    if (matrix[i][j - 1].value === 0 && matrix[i][j - 1].isOpened === false) {
      openNeighborsCells(matrix, matrix[i][j - 1]);
    } else {
      matrix[i][j - 1].isOpened = true;
    }
    if (
      matrix[i + 1][j - 1].value === 0 &&
      matrix[i + 1][j - 1].isOpened === false
    ) {
      openNeighborsCells(matrix, matrix[i + 1][j - 1]);
    } else {
      matrix[i + 1][j - 1].isOpened = true;
    }
  } else if (i === 15 && j === 0) {
    if (matrix[i - 1][j].value === 0 && matrix[i - 1][j].isOpened === false) {
      openNeighborsCells(matrix, matrix[i - 1][j]);
    } else {
      matrix[i - 1][j].isOpened = true;
    }
    if (matrix[i][j + 1].value === 0 && matrix[i][j + 1].isOpened === false) {
      openNeighborsCells(matrix, matrix[i][j + 1]);
    } else {
      matrix[i][j + 1].isOpened = true;
    }
    if (
      matrix[i - 1][j + 1].value === 0 &&
      matrix[i - 1][j + 1].isOpened === false
    ) {
      openNeighborsCells(matrix, matrix[i - 1][j + 1]);
    } else {
      matrix[i - 1][j + 1].isOpened = true;
    }
  } else if (i === 0) {
    if (matrix[i + 1][j].value === 0 && matrix[i + 1][j].isOpened === false) {
      openNeighborsCells(matrix, matrix[i + 1][j]);
    } else {
      matrix[i + 1][j].isOpened = true;
    }

    if (
      matrix[i + 1][j + 1].value === 0 &&
      matrix[i + 1][j + 1].isOpened === false
    ) {
      openNeighborsCells(matrix, matrix[i + 1][j + 1]);
    } else {
      matrix[i + 1][j + 1].isOpened = true;
    }

    if (
      matrix[i + 1][j - 1].value === 0 &&
      matrix[i + 1][j - 1].isOpened === false
    ) {
      openNeighborsCells(matrix, matrix[i + 1][j - 1]);
    } else {
      matrix[i + 1][j - 1].isOpened = true;
    }

    if (matrix[i][j + 1].value === 0 && matrix[i][j + 1].isOpened === false) {
      openNeighborsCells(matrix, matrix[i][j + 1]);
    } else {
      matrix[i][j + 1].isOpened = true;
    }

    if (matrix[i][j - 1].value === 0 && matrix[i][j - 1].isOpened === false) {
      openNeighborsCells(matrix, matrix[i][j - 1]);
    } else {
      matrix[i][j - 1].isOpened = true;
    }
  } else if (i === 15) {
    if (matrix[i - 1][j].value === 0 && matrix[i - 1][j].isOpened === false) {
      openNeighborsCells(matrix, matrix[i - 1][j]);
    } else {
      matrix[i - 1][j].isOpened = true;
    }
    if (
      matrix[i - 1][j + 1].value === 0 &&
      matrix[i - 1][j + 1].isOpened === false
    ) {
      openNeighborsCells(matrix, matrix[i - 1][j + 1]);
    } else {
      matrix[i - 1][j + 1].isOpened = true;
    }
    if (
      matrix[i - 1][j - 1].value === 0 &&
      matrix[i - 1][j - 1].isOpened === false
    ) {
      openNeighborsCells(matrix, matrix[i - 1][j - 1]);
    } else {
      matrix[i - 1][j - 1].isOpened = true;
    }
    if (matrix[i][j + 1].value === 0 && matrix[i][j + 1].isOpened === false) {
      openNeighborsCells(matrix, matrix[i][j + 1]);
    } else {
      matrix[i][j + 1].isOpened = true;
    }
    if (matrix[i][j - 1].value === 0 && matrix[i][j - 1].isOpened === false) {
      openNeighborsCells(matrix, matrix[i][j - 1]);
    } else {
      matrix[i][j - 1].isOpened = true;
    }
  } else if (j === 0) {
    if (matrix[i - 1][j].value === 0 && matrix[i - 1][j].isOpened === false) {
      openNeighborsCells(matrix, matrix[i - 1][j]);
    } else {
      matrix[i - 1][j].isOpened = true;
    }
    if (matrix[i + 1][j].value === 0 && matrix[i + 1][j].isOpened === false) {
      openNeighborsCells(matrix, matrix[i + 1][j]);
    } else {
      matrix[i + 1][j].isOpened = true;
    }
    if (
      matrix[i - 1][j + 1].value === 0 &&
      matrix[i - 1][j + 1].isOpened === false
    ) {
      openNeighborsCells(matrix, matrix[i - 1][j + 1]);
    } else {
      matrix[i - 1][j + 1].isOpened = true;
    }
    if (matrix[i][j + 1].value === 0 && matrix[i][j + 1].isOpened === false) {
      openNeighborsCells(matrix, matrix[i][j + 1]);
    } else {
      matrix[i][j + 1].isOpened = true;
    }
    if (
      matrix[i + 1][j + 1].value === 0 &&
      matrix[i + 1][j + 1].isOpened === false
    ) {
      openNeighborsCells(matrix, matrix[i + 1][j + 1]);
    } else {
      matrix[i + 1][j + 1].isOpened = true;
    }
  } else if (j === 15) {
    if (matrix[i - 1][j].value === 0 && matrix[i - 1][j].isOpened === false) {
      openNeighborsCells(matrix, matrix[i - 1][j]);
    } else {
      matrix[i - 1][j].isOpened = true;
    }
    if (matrix[i + 1][j].value === 0 && matrix[i + 1][j].isOpened === false) {
      openNeighborsCells(matrix, matrix[i + 1][j]);
    } else {
      matrix[i + 1][j].isOpened = true;
    }
    if (
      matrix[i - 1][j - 1].value === 0 &&
      matrix[i - 1][j - 1].isOpened === false
    ) {
      openNeighborsCells(matrix, matrix[i - 1][j - 1]);
    } else {
      matrix[i - 1][j - 1].isOpened = true;
    }
    if (matrix[i][j - 1].value === 0 && matrix[i][j - 1].isOpened === false) {
      openNeighborsCells(matrix, matrix[i][j - 1]);
    } else {
      matrix[i][j - 1].isOpened = true;
    }
    if (
      matrix[i + 1][j - 1].value === 0 &&
      matrix[i + 1][j - 1].isOpened === false
    ) {
      openNeighborsCells(matrix, matrix[i + 1][j - 1]);
    } else {
      matrix[i + 1][j - 1].isOpened = true;
    }
  } else {
    if (matrix[i - 1][j].value === 0 && matrix[i - 1][j].isOpened === false) {
      openNeighborsCells(matrix, matrix[i - 1][j]);
    } else {
      matrix[i - 1][j].isOpened = true;
    }
    if (
      matrix[i - 1][j + 1].value === 0 &&
      matrix[i - 1][j + 1].isOpened === false
    ) {
      openNeighborsCells(matrix, matrix[i - 1][j + 1]);
    } else {
      matrix[i - 1][j + 1].isOpened = true;
    }
    if (
      matrix[i - 1][j - 1].value === 0 &&
      matrix[i - 1][j - 1].isOpened === false
    ) {
      openNeighborsCells(matrix, matrix[i - 1][j - 1]);
    } else {
      matrix[i - 1][j - 1].isOpened = true;
    }
    if (matrix[i + 1][j].value === 0 && matrix[i + 1][j].isOpened === false) {
      openNeighborsCells(matrix, matrix[i + 1][j]);
    } else {
      matrix[i + 1][j].isOpened = true;
    }
    if (
      matrix[i + 1][j + 1].value === 0 &&
      matrix[i + 1][j + 1].isOpened === false
    ) {
      openNeighborsCells(matrix, matrix[i + 1][j + 1]);
    } else {
      matrix[i + 1][j + 1].isOpened = true;
    }
    if (
      matrix[i + 1][j - 1].value === 0 &&
      matrix[i + 1][j - 1].isOpened === false
    ) {
      openNeighborsCells(matrix, matrix[i + 1][j - 1]);
    } else {
      matrix[i + 1][j - 1].isOpened = true;
    }
    if (matrix[i][j + 1].value === 0 && matrix[i][j + 1].isOpened === false) {
      openNeighborsCells(matrix, matrix[i][j + 1]);
    } else {
      matrix[i][j + 1].isOpened = true;
    }

    // checkOnZeroValueOrOpenCell(matrix, i, j - 1);
    if (matrix[i][j - 1].value === 0 && matrix[i][j - 1].isOpened === false) {
      openNeighborsCells(matrix, matrix[i][j - 1]);
    } else {
      matrix[i][j - 1].isOpened = true;
    }
  }
}

function checkOnZeroValueOrOpenCell(matrix: TBoard, i: number, j: number) {
  if (matrix[i][j].value === 0 && matrix[i][j].isOpened === false) {
    openNeighborsCells(matrix, matrix[i][j]);
  } else {
    matrix[i][j].isOpened = true;
  }
}
