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
      className={cn(classes.cell, {
        [classes.closed]: cell.isOpened === false,
        [classes.opened]: cell.isOpened === true,
        [classes.one]: cell.value === 1 && cell.isOpened === true,
        [classes.two]: cell.value === 2 && cell.isOpened === true,
        [classes.three]: cell.value === 3 && cell.isOpened === true,
        [classes.four]: cell.value === 4 && cell.isOpened === true,
        [classes.five]: cell.value === 5 && cell.isOpened === true,
        [classes.six]: cell.value === 6 && cell.isOpened === true,
        [classes.seven]: cell.value === 7 && cell.isOpened === true,
        [classes.eight]: cell.value === 8 && cell.isOpened === true,
        [classes.flagged]: cell.isFlagged,
        [classes.blownedMine]: cell.value === -1 && cell.isOpened === true,
      })}
    ></button>
  );
}
