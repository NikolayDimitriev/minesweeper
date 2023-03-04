import { useState } from 'react';
import { Cell } from '../Cell';
import {
  increaseCellsValuesAroundMine,
  getRandomInt,
  openCell,
} from '../../utils/';
import { TCellInfo, TBoard } from '../../common.types';
import classes from './style.module.css';
import { nanoid } from 'nanoid';

type TBoardProps = {
  matrix: TBoard;
};

export function Board({ matrix }: TBoardProps) {
  const [board, setBoard] = useState(matrix);
  const [isFirstClick, setIsFirstClick] = useState(true);

  function updateBoardWithOpenedCells(board: TBoard, cell: TCellInfo) {
    const newBoardWithOpenCells = openCell(board, cell);

    setBoard(newBoardWithOpenCells);
  }

  function generateMine(newBoard: TBoard, firstClickedCell: TCellInfo) {
    let minesCount = 0;

    while (minesCount < 40) {
      const x = getRandomInt(16);
      const y = getRandomInt(16);

      if (firstClickedCell.x === x && firstClickedCell.y === y) {
        continue;
      }

      const cell: TCellInfo = newBoard[x][y];

      if (cell.value === 0) {
        cell.value = -1;
        cell.x = x;
        cell.y = y;
        increaseCellsValuesAroundMine(newBoard, x, y);
        minesCount++;
      }
    }

    updateBoardWithOpenedCells(newBoard, firstClickedCell);
  }

  function handleCellClick(cell: TCellInfo) {
    const newBoard = JSON.parse(JSON.stringify(board));
    if (isFirstClick) {
      setIsFirstClick(false);
      generateMine(newBoard, cell);
      return;
    }
    updateBoardWithOpenedCells(newBoard, cell);
  }

  return (
    <div className={classes.board}>
      {board.map((line) => {
        return (
          <div key={nanoid()} className={classes.line}>
            {line.map((cell: TCellInfo) => (
              <Cell
                key={cell.id}
                cell={cell}
                handleCellClick={handleCellClick}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}
