import { TBoard } from '../common.types';
import { findPosition } from './findPosition';

export function findZeroAroundCell(
  matrix: TBoard,
  i: number,
  j: number
): { x: number; y: number } | null {
  const position = findPosition(i, j);
  let res: { x: number; y: number } | null = null;

  switch (position) {
    case 'leftTop': {
      res = findZero(matrix, i + 1, j);
      if (res) {
        return res;
      }
      res = findZero(matrix, i, j + 1);
      if (res) {
        return res;
      }
      res = findZero(matrix, i + 1, j + 1);
      if (res) {
        return res;
      }
      break;
    }
    case 'rightBottom': {
      res = findZero(matrix, i - 1, j);
      if (res) {
        return res;
      }
      res = findZero(matrix, i, j - 1);
      if (res) {
        return res;
      }
      res = findZero(matrix, i - 1, j - 1);
      if (res) {
        return res;
      }
      break;
    }
    case 'rightTop': {
      res = findZero(matrix, i + 1, j);
      if (res) {
        return res;
      }
      res = findZero(matrix, i, j - 1);
      if (res) {
        return res;
      }
      res = findZero(matrix, i + 1, j - 1);
      if (res) {
        return res;
      }
      break;
    }
    case 'leftBottom': {
      res = findZero(matrix, i - 1, j);
      if (res) {
        return res;
      }
      res = findZero(matrix, i, j + 1);
      if (res) {
        return res;
      }
      res = findZero(matrix, i - 1, j + 1);
      if (res) {
        return res;
      }
      break;
    }
    case 'topLine': {
      res = findZero(matrix, i + 1, j);
      if (res) {
        return res;
      }
      res = findZero(matrix, i + 1, j + 1);
      if (res) {
        return res;
      }
      res = findZero(matrix, i + 1, j - 1);
      if (res) {
        return res;
      }
      res = findZero(matrix, i, j + 1);
      if (res) {
        return res;
      }
      res = findZero(matrix, i, j - 1);
      if (res) {
        return res;
      }
      break;
    }
    case 'bottomLine': {
      res = findZero(matrix, i - 1, j);
      if (res) {
        return res;
      }
      res = findZero(matrix, i - 1, j + 1);
      if (res) {
        return res;
      }
      res = findZero(matrix, i - 1, j - 1);
      if (res) {
        return res;
      }
      res = findZero(matrix, i, j + 1);
      if (res) {
        return res;
      }
      res = findZero(matrix, i, j - 1);
      if (res) {
        return res;
      }
      break;
    }
    case 'leftLine': {
      res = findZero(matrix, i - 1, j);
      if (res) {
        return res;
      }
      res = findZero(matrix, i + 1, j);
      if (res) {
        return res;
      }
      res = findZero(matrix, i - 1, j + 1);
      if (res) {
        return res;
      }
      res = findZero(matrix, i, j + 1);
      if (res) {
        return res;
      }
      res = findZero(matrix, i + 1, j + 1);
      if (res) {
        return res;
      }
      break;
    }
    case 'rightLine': {
      res = findZero(matrix, i - 1, j);
      if (res) {
        return res;
      }
      res = findZero(matrix, i + 1, j);
      if (res) {
        return res;
      }
      res = findZero(matrix, i - 1, j - 1);
      if (res) {
        return res;
      }
      res = findZero(matrix, i, j - 1);
      if (res) {
        return res;
      }
      res = findZero(matrix, i + 1, j - 1);
      if (res) {
        return res;
      }
      break;
    }
    case 'center': {
      res = findZero(matrix, i - 1, j);
      if (res) {
        return res;
      }
      res = findZero(matrix, i + 1, j);
      if (res) {
        return res;
      }
      res = findZero(matrix, i - 1, j - 1);
      if (res) {
        return res;
      }
      res = findZero(matrix, i, j - 1);
      if (res) {
        return res;
      }
      res = findZero(matrix, i + 1, j - 1);
      if (res) {
        return res;
      }
      res = findZero(matrix, i - 1, j + 1);
      if (res) {
        return res;
      }
      res = findZero(matrix, i, j + 1);
      if (res) {
        return res;
      }
      res = findZero(matrix, i + 1, j + 1);
      if (res) {
        return res;
      }
      break;
    }
  }

  return res;
}

function findZero(
  matrix: TBoard,
  i: number,
  j: number
): { x: number; y: number } | null {
  if (matrix[i][j].value === 0) {
    return {
      x: i,
      y: j,
    };
  }
  return null;
}
