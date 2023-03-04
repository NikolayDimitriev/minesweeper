import { TBoard } from '../common.types';

export function checkOnWin(matrix: TBoard): boolean {
  for (const line of matrix) {
    for (const cell of line) {
      if (cell.value === -1 && cell.isFlagged) {
        continue;
      }

      if (cell.value !== -1 && cell.isOpened === false) {
        return false;
      }
    }
  }

  return true;
}
