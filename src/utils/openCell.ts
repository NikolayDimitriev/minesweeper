import { TBoard, TCellInfo } from '../common.types';
import { findPosition, findZeroAroundCell } from '../utils';

export function openCell(matrix: TBoard, cell: TCellInfo): TBoard {
  const i = cell.x;
  const j = cell.y;
  if (matrix[i][j].value === 0) {
    openNeighborsCells(matrix, cell);
  } else {
    matrix[i][j].isOpened = true;

    const coordinateZeroAround = findZeroAroundCell(matrix, i, j);
    if (coordinateZeroAround) {
      const xCoordinateZero = coordinateZeroAround.x;
      const yCoordinateZero = coordinateZeroAround.y;
      const cellZero = matrix[xCoordinateZero][yCoordinateZero];
      openNeighborsCells(matrix, cellZero);
    }
  }

  return matrix;
}

function openNeighborsCells(matrix: TBoard, cell: TCellInfo) {
  const i = cell.x;
  const j = cell.y;

  matrix[i][j].isOpened = true;

  const position = findPosition(i, j);

  switch (position) {
    case 'leftTop': {
      checkOnZeroValueOrOpenCell(matrix, i + 1, j);

      checkOnZeroValueOrOpenCell(matrix, i, j + 1);

      checkOnZeroValueOrOpenCell(matrix, i + 1, j + 1);
      break;
    }
    case 'rightBottom': {
      checkOnZeroValueOrOpenCell(matrix, i - 1, j);

      checkOnZeroValueOrOpenCell(matrix, i, j - 1);

      checkOnZeroValueOrOpenCell(matrix, i - 1, j - 1);
      break;
    }
    case 'rightTop': {
      checkOnZeroValueOrOpenCell(matrix, i + 1, j);

      checkOnZeroValueOrOpenCell(matrix, i, j - 1);

      checkOnZeroValueOrOpenCell(matrix, i + 1, j - 1);
      break;
    }
    case 'leftBottom': {
      checkOnZeroValueOrOpenCell(matrix, i - 1, j);

      checkOnZeroValueOrOpenCell(matrix, i, j + 1);

      checkOnZeroValueOrOpenCell(matrix, i - 1, j + 1);
      break;
    }
    case 'topLine': {
      checkOnZeroValueOrOpenCell(matrix, i + 1, j);

      checkOnZeroValueOrOpenCell(matrix, i + 1, j + 1);

      checkOnZeroValueOrOpenCell(matrix, i + 1, j - 1);

      checkOnZeroValueOrOpenCell(matrix, i, j + 1);

      checkOnZeroValueOrOpenCell(matrix, i, j - 1);
      break;
    }
    case 'bottomLine': {
      checkOnZeroValueOrOpenCell(matrix, i - 1, j);

      checkOnZeroValueOrOpenCell(matrix, i - 1, j + 1);

      checkOnZeroValueOrOpenCell(matrix, i - 1, j - 1);

      checkOnZeroValueOrOpenCell(matrix, i, j + 1);

      checkOnZeroValueOrOpenCell(matrix, i, j - 1);
      break;
    }
    case 'leftLine': {
      checkOnZeroValueOrOpenCell(matrix, i - 1, j);

      checkOnZeroValueOrOpenCell(matrix, i + 1, j);

      checkOnZeroValueOrOpenCell(matrix, i - 1, j + 1);

      checkOnZeroValueOrOpenCell(matrix, i, j + 1);

      checkOnZeroValueOrOpenCell(matrix, i + 1, j + 1);
      break;
    }
    case 'rightLine': {
      checkOnZeroValueOrOpenCell(matrix, i - 1, j);

      checkOnZeroValueOrOpenCell(matrix, i + 1, j);

      checkOnZeroValueOrOpenCell(matrix, i - 1, j - 1);

      checkOnZeroValueOrOpenCell(matrix, i, j - 1);

      checkOnZeroValueOrOpenCell(matrix, i + 1, j - 1);
      break;
    }
    case 'center': {
      checkOnZeroValueOrOpenCell(matrix, i - 1, j);

      checkOnZeroValueOrOpenCell(matrix, i - 1, j + 1);

      checkOnZeroValueOrOpenCell(matrix, i - 1, j - 1);

      checkOnZeroValueOrOpenCell(matrix, i + 1, j);

      checkOnZeroValueOrOpenCell(matrix, i + 1, j + 1);

      checkOnZeroValueOrOpenCell(matrix, i + 1, j - 1);

      checkOnZeroValueOrOpenCell(matrix, i, j + 1);

      checkOnZeroValueOrOpenCell(matrix, i, j - 1);
      break;
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
