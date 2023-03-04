import { TCellInfo, TEmoji } from '../../common.types';
import cn from 'classnames';
import classes from './style.module.css';

type TCellProps = {
  cell: TCellInfo;
  handleCellClick: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    cell: TCellInfo
  ) => void;
  handleRightClick: (cell: TCellInfo) => void;
  setEmojiState: React.Dispatch<React.SetStateAction<TEmoji>>;
};

export function Cell({
  cell,
  handleCellClick,
  handleRightClick,
  setEmojiState,
}: TCellProps) {
  function changeEmojiOnScary(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    cell: TCellInfo
  ) {
    if (
      cell.isOpened ||
      cell.isFlagged ||
      cell.isQuestioned ||
      e.button === 2
    ) {
      return;
    }
    setEmojiState('scary');
  }

  return (
    <button
      onMouseDown={(e) => changeEmojiOnScary(e, cell)}
      onMouseUp={(e) => handleCellClick(e, cell)}
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
