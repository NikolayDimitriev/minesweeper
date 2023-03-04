import { TCellInfo } from '../../common.types';
import cn from 'classnames';
import classes from './style.module.css';

type TCellProps = {
  cell: TCellInfo;
  handleCellClick: (cell: TCellInfo) => void;
  handleRightClick: (cell: TCellInfo) => void;
};

export function Cell({ cell, handleCellClick, handleRightClick }: TCellProps) {
  return (
    <button
      onClick={() => handleCellClick(cell)}
      onContextMenu={() => handleRightClick(cell)}
      className={cn(classes.cell, {
        [classes.closed]: cell.isOpened === false,
        [classes.opened]: cell.isOpened,
        [classes.one]: cell.value === 1 && cell.isOpened,
        [classes.two]: cell.value === 2 && cell.isOpened,
        [classes.three]: cell.value === 3 && cell.isOpened,
        [classes.four]: cell.value === 4 && cell.isOpened,
        [classes.five]: cell.value === 5 && cell.isOpened,
        [classes.six]: cell.value === 6 && cell.isOpened,
        [classes.seven]: cell.value === 7 && cell.isOpened,
        [classes.eight]: cell.value === 8 && cell.isOpened,
        [classes.flagged]: cell.isFlagged,
        [classes.question]: cell.isQuestioned,
        [classes.questionOpen]: cell.isQuestioned && cell.isOpened,
        [classes.undefusedMine]:
          cell.value === -1 && cell.isFlagged === false && cell.isOpened,
        [classes.defusedMine]:
          cell.value === -1 && cell.isFlagged === true && cell.isOpened,
        [classes.blownedMine]:
          cell.value === -1 &&
          cell.isFlagged === false &&
          cell.isBlowned &&
          cell.isOpened,
      })}
    ></button>
  );
}
