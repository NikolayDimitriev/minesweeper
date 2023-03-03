import { TMatrix, TCellInfo } from '../common.types';

export function createBoard(): TMatrix {
  let board: TMatrix = [];
  for (let i = 0; i < 16; i++) {
    let line = [];
    for (let j = 0; j < 16; j++) {
      line.push({
        value: 0,
        x: i,
        y: j,
        isOpened: false,
        isRevealed: false,
        isFlagged: false,
      } as TCellInfo);
    }
    board.push(line);
  }
  return board;
}
