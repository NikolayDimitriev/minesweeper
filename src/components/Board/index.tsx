import { nanoid } from 'nanoid';
import { Cell } from '../Cell';
import {
  increaseCellsValuesAroundMine,
  getRandomInt,
  openCell,
  openAllMine,
  checkOnWin,
} from '../../utils/';
import { TCellInfo, TBoard, TEmoji } from '../../common.types';
import classes from './style.module.css';

type TBoardProps = {
  board: TBoard;
  setBoard: React.Dispatch<React.SetStateAction<TBoard>>;
  isLose: boolean;
  setIsLose: React.Dispatch<React.SetStateAction<boolean>>;
  isFirstClick: boolean;
  setIsFirstClick: React.Dispatch<React.SetStateAction<boolean>>;
  setEmojiState: React.Dispatch<React.SetStateAction<TEmoji>>;
  minesCount: number;
  setMinesCount: React.Dispatch<React.SetStateAction<number>>;
  handleStartTimer: () => void;
  handleStopTimer: () => void;
};

export function Board({
  board,
  setBoard,
  isLose,
  setIsLose,
  isFirstClick,
  setIsFirstClick,
  setEmojiState,
  minesCount,
  setMinesCount,
  handleStartTimer,
  handleStopTimer,
}: TBoardProps) {
  function updateBoardWithOpenedCells(board: TBoard, cell: TCellInfo) {
    const newBoardWithOpenCells = openCell(board, cell);

    setBoard(newBoardWithOpenCells);

    checkWin(newBoardWithOpenCells);
  }

  function checkWin(board: TBoard) {
    const isWin = checkOnWin(board);

    if (isWin) {
      const newBoardWithAllMine = openAllMine(board);
      setBoard(newBoardWithAllMine);
      setEmojiState('cool');
      handleStopTimer();
    }
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

  function handleCellClick(
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    cell: TCellInfo
  ) {
    if (e.button === 2) {
      return;
    }
    // ! Нельзя нажать, если выделено флажком, вопросов, уже открыто или проиграно
    if (cell.isFlagged || cell.isOpened || cell.isQuestioned || isLose) {
      return;
    }

    const newBoard: TBoard = JSON.parse(JSON.stringify(board));
    if (isFirstClick) {
      setIsFirstClick(false);
      generateMine(newBoard, cell);
      setEmojiState('happy');
      handleStartTimer();
      return;
    }

    // ! Попали на мину
    if (cell.value === -1) {
      newBoard[cell.x][cell.y].isBlowned = true;
      setIsLose(true);
      const newBoardWithAllMine = openAllMine(newBoard);
      setBoard(newBoardWithAllMine);
      setEmojiState('dead');
      handleStopTimer();
      return;
    }

    setEmojiState('happy');
    updateBoardWithOpenedCells(newBoard, cell);
  }

  function handleRightClick(cell: TCellInfo) {
    if (cell.isOpened || isLose) {
      return;
    }
    console.log(board);
    const newBoard: TBoard = JSON.parse(JSON.stringify(board));

    const i = cell.x;
    const j = cell.y;

    if (cell.isFlagged) {
      newBoard[i][j].isFlagged = false;
      newBoard[i][j].isQuestioned = true;
      setMinesCount((prev) => prev + 1);
    } else if (cell.isQuestioned) {
      newBoard[i][j].isFlagged = false;
      newBoard[i][j].isQuestioned = false;
    } else {
      if (minesCount === 0) {
        return;
      }
      newBoard[i][j].isFlagged = true;
      newBoard[i][j].isQuestioned = false;
      setMinesCount((prev) => prev - 1);
    }

    setBoard(newBoard);

    checkWin(newBoard);
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
                handleRightClick={handleRightClick}
                setEmojiState={setEmojiState}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
}
