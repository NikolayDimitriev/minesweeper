import { TBoard } from '../common.types';
import { findPosition } from './findPosition';

export function increaseCellsValuesAroundMine(
  matrix: TBoard,
  i: number,
  j: number
) {
  const position = findPosition(i, j);
  switch (position) {
    case 'leftTop': {
      increaseRightDownTriangle(matrix, i, j);

      break;
    }
    case 'rightBottom': {
      increaseLeftUpTriangle(matrix, i, j);

      break;
    }
    case 'rightTop': {
      increaseLeftDownTriangle(matrix, i, j);

      break;
    }
    case 'leftBottom': {
      increaseRightUpTriangle(matrix, i, j);

      break;
    }
    case 'topLine': {
      increaseLeftAndRightCells(matrix, i, j);
      increaseDownThreeCells(matrix, i, j);
      break;
    }
    case 'bottomLine': {
      increaseLeftAndRightCells(matrix, i, j);
      increaseUpThreeCells(matrix, i, j);
      break;
    }
    case 'leftLine': {
      increaseRightThreeCells(matrix, i, j);
      increaseUpAndDownCells(matrix, i, j);

      break;
    }
    case 'rightLine': {
      increaseLeftThreeCells(matrix, i, j);
      increaseUpAndDownCells(matrix, i, j);

      break;
    }
    case 'center': {
      increaseLeftThreeCells(matrix, i, j);
      increaseRightThreeCells(matrix, i, j);
      increaseUpAndDownCells(matrix, i, j);
      break;
    }
  }
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

function increaseRightUpTriangle(matrix: TBoard, i: number, j: number) {
  matrix[i - 1][j].value += 1;
  matrix[i][j + 1].value += 1;
  matrix[i - 1][j + 1].value += 1;
}

function increaseUpAndDownCells(matrix: TBoard, i: number, j: number) {
  matrix[i - 1][j].value += 1;
  matrix[i + 1][j].value += 1;
}

function increaseLeftAndRightCells(matrix: TBoard, i: number, j: number) {
  matrix[i][j - 1].value += 1;
  matrix[i][j + 1].value += 1;
}

function increaseDownThreeCells(matrix: TBoard, i: number, j: number) {
  matrix[i + 1][j].value += 1;
  matrix[i + 1][j + 1].value += 1;
  matrix[i + 1][j - 1].value += 1;
}

function increaseUpThreeCells(matrix: TBoard, i: number, j: number) {
  matrix[i - 1][j].value += 1;
  matrix[i - 1][j + 1].value += 1;
  matrix[i - 1][j - 1].value += 1;
}

function increaseLeftThreeCells(matrix: TBoard, i: number, j: number) {
  matrix[i - 1][j - 1].value += 1;
  matrix[i][j - 1].value += 1;
  matrix[i + 1][j - 1].value += 1;
}

function increaseRightThreeCells(matrix: TBoard, i: number, j: number) {
  matrix[i - 1][j + 1].value += 1;
  matrix[i][j + 1].value += 1;
  matrix[i + 1][j + 1].value += 1;
}
