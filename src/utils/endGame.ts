import { TBoard } from "../common.types";

export function endGame(board: TBoard) {
  board.forEach(line => {
    line.forEach(cell => {
      if (cell.value === -1) {
        cell.isOpened = true;
      }
    })
  })
  return board;
}
