import classes from './style.module.css';

type TCellProps = {
  cell: number;
  board: number[][];
  generateMine: () => void;
};

export function Cell({ cell, generateMine }: TCellProps) {
  return (
    <button onClick={generateMine} className={classes.cell}>
      {cell}
    </button>
  );
}
