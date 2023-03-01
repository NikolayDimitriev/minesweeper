import { useState } from 'react';
import { Cell } from '../Cell';
import { increaseCellsValuesAroundMine, getRandomInt } from '../../utils/';
import classes from './style.module.css';

type TBoardProps = {
  matrix: number[][];
};

export function Board({ matrix }: TBoardProps) {
  const [board, setBoard] = useState(matrix);

  function generateMine() {
    const newBoard = [...board];
    let minesCount = 0;

    while (minesCount < 40) {
      const x = getRandomInt(16);
      const y = getRandomInt(16);

      if (newBoard[x][y] === 0) {
        newBoard[x][y] = -1;
        increaseCellsValuesAroundMine(newBoard, x, y);
        minesCount++;
      }
    }

    setBoard(newBoard);
  }

  return (
    <div className={classes.board}>
      BOARD
      {matrix.map((line, i) => {
        return (
          <div key={i} className={classes.line}>
            {line.map((cell: number, index) => (
              <Cell
                key={i * 2 + index}
                cell={cell}
                board={board}
                generateMine={generateMine}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}
