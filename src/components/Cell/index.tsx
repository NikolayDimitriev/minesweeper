import classes from './style.module.css';

type TCellProps = {
  cell: number;
  matrix: number[][];
  generateMine: (number[][]) => number[][]; 
};

export function Cell({ cell, generateMine }: TCellProps) {
  return <button onClick={() => generateMine(matrix)} className={classes.cell}>{cell}</button>;
}
