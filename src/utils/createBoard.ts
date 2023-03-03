import { TBoard, TCellInfo } from '../common.types';
import { nanoid } from 'nanoid'

export function createBoard(): TBoard {
  let board: TBoard = [];
  for (let i = 0; i < 16; i++) {
    let line = [];
    for (let j = 0; j < 16; j++) {
      line.push({
        id: nanoid(),
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
