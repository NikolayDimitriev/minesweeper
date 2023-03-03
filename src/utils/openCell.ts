import { TBoard, TCellInfo } from '../common.types';

export function openCell(matrix: TBoard, cell: TCellInfo): TBoard {
  matrix[cell.x][cell.y].isOpened = true;
  return matrix;
}
