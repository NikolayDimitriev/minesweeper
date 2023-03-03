import { useState } from 'react';
import { Cell } from '../Cell';
import {
  increaseCellsValuesAroundMine,
  getRandomInt,
  openCell,
} from '../../utils/';
import { TCellInfo, TMatrix } from '../../common.types';
import classes from './style.module.css';

type TBoardProps = {
  matrix: TMatrix;
};

export function Board({ matrix }: TBoardProps) {
  const [board, setBoard] = useState(matrix);
  const [isFirstClick, setIsFirstClick] = useState(true);

  function generateMine(firstClickedCell: TCellInfo) {
    const newBoard = [...board] as TMatrix;
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
    if (isFirstClick) {
      setIsFirstClick(false);
      generateMine(cell);
      openCell(board, cell);
      return;
    }
    updateBoardWithOpenedCells(board, cell);
  }

  function updateBoardWithOpenedCells(board: TMatrix, cell: TCellInfo) {
    const newBoardWithOpenCells = openCell(board, cell);

    setBoard(newBoardWithOpenCells);
  }

  return (
    <div className={classes.board}>
      {board.map((line, i) => {
        return (
          <div key={i} className={classes.line}>
            {line.map((cell: TCellInfo, index) => (
              <Cell
                key={i * 2 + index}
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
