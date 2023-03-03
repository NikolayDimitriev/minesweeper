import { TMatrix, TCellInfo } from '../common.types';

export function openCell(matrix: TMatrix, cell: TCellInfo): TMatrix {
  matrix[cell.x][cell.y].isOpened = true;
  return matrix;
}
