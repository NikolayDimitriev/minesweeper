import { Cell } from '../Cell';
import classes from './style.module.css';

type TBoardProps = {
  matrix: number[][];
};

function generateMine(matrix: number[][]) {
  console.log(matrix);

  console.log(matrix);
  return matrix;
}

export function Board({ matrix }: TBoardProps) {
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
                matrix={matrix}
                generateMine={generateMine}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}
