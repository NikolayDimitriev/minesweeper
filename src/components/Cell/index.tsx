import { TCellInfo } from '../../common.types';
import cn from 'classnames';
import classes from './style.module.css';

type TCellProps = {
  cell: TCellInfo;
  handleCellClick: (cell: TCellInfo) => void;
};

export function Cell({ cell, handleCellClick }: TCellProps) {
  return (
    <button
      onClick={() => handleCellClick(cell)}
      className={cn(classes.cell, classes.closed)}
    >
      {cell.isOpened && cell.value}
    </button>
  );
}
