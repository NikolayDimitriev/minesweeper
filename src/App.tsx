import { useState, useEffect } from 'react';
import cn from 'classnames';
import { Board } from './components/Board';
import { createBoard } from './utils';
import { TBoard, TEmoji } from './common.types';
import classes from './App.module.css';

export function App() {
  const [isLose, setIsLose] = useState(false);
  const [board, setBoard] = useState<TBoard>([]);
  const [isFirstClick, setIsFirstClick] = useState(true);
  const [emojiState, setEmojiState] = useState<TEmoji>('happy');
  const [minesCount, setMinesCount] = useState(40);
  const [timer, setTimer] = useState(0);
  const [timerId, setTimerId] = useState<null | number>(null);

  useEffect(() => {
    const newBoard = createBoard();
    setBoard(newBoard);
  }, []);

  function restartGame() {
    const newBoard = createBoard();
    setBoard(newBoard);
    setIsLose(false);
    setIsFirstClick(true);
    setEmojiState('happy');
    setMinesCount(40);
    handleStopTimer();
  }

  function handleStartTimer() {
    const newTimerId: number = window.setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    setTimerId(newTimerId);
  }

  function handleStopTimer() {
    clearInterval(timerId as number);
    setTimerId(null);
  }

  return (
    <div
      className={classes.app}
      onContextMenu={(e) => {
        e.preventDefault();
      }}
    >
      <div className={classes.menu}>
        <div className={classes.countMines}>
          <div className={classes.number}></div>
          <div
            className={cn(classes.number, {
              [classes.one]: Math.floor(minesCount / 10) === 1,
              [classes.two]: Math.floor(minesCount / 10) === 2,
              [classes.three]: Math.floor(minesCount / 10) === 3,
              [classes.four]: Math.floor(minesCount / 10) === 4,
            })}
          ></div>
          <div
            className={cn(classes.number, {
              [classes.one]: minesCount % 10 === 1,
              [classes.two]: minesCount % 10 === 2,
              [classes.three]: minesCount % 10 === 3,
              [classes.four]: minesCount % 10 === 4,
              [classes.five]: minesCount % 10 === 5,
              [classes.six]: minesCount % 10 === 6,
              [classes.seven]: minesCount % 10 === 7,
              [classes.eight]: minesCount % 10 === 8,
              [classes.nine]: minesCount % 10 === 9,
            })}
          ></div>
        </div>
        <button
          className={cn(classes.mainBtn, {
            [classes.pressed]: emojiState === 'pressed',
            [classes.scary]: emojiState === 'scary',
            [classes.cool]: emojiState === 'cool',
            [classes.dead]: emojiState === 'dead',
          })}
          onMouseUp={restartGame}
          onMouseDown={() => setEmojiState('pressed')}
        ></button>
        <div className={classes.timer}>
          <div
            className={cn(classes.number, {
              [classes.one]: Math.floor(timer / 100) === 1,
              [classes.two]: Math.floor(timer / 100) === 2,
              [classes.three]: Math.floor(timer / 100) === 3,
              [classes.four]: Math.floor(timer / 100) === 4,
              [classes.five]: Math.floor(timer / 100) === 5,
              [classes.six]: Math.floor(timer / 100) === 6,
              [classes.seven]: Math.floor(timer / 100) === 7,
              [classes.eight]: Math.floor(timer / 100) === 8,
              [classes.nine]: Math.floor(timer / 100) === 9,
              [classes.nine]: timer > 999,
            })}
          ></div>
          <div
            className={cn(classes.number, {
              [classes.one]: Math.floor((timer % 100) / 10) === 1,
              [classes.two]: Math.floor((timer % 100) / 10) === 2,
              [classes.three]: Math.floor((timer % 100) / 10) === 3,
              [classes.four]: Math.floor((timer % 100) / 10) === 4,
              [classes.five]: Math.floor((timer % 100) / 10) === 5,
              [classes.six]: Math.floor((timer % 100) / 10) === 6,
              [classes.seven]: Math.floor((timer % 100) / 10) === 7,
              [classes.eight]: Math.floor((timer % 100) / 10) === 8,
              [classes.nine]: Math.floor((timer % 100) / 10) === 9,
            })}
          ></div>
          <div
            className={cn(classes.number, {
              [classes.one]: timer % 10 === 1,
              [classes.two]: timer % 10 === 2,
              [classes.three]: timer % 10 === 3,
              [classes.four]: timer % 10 === 4,
              [classes.five]: timer % 10 === 5,
              [classes.six]: timer % 10 === 6,
              [classes.seven]: timer % 10 === 7,
              [classes.eight]: timer % 10 === 8,
              [classes.nine]: timer % 10 === 9,
            })}
          ></div>
        </div>
      </div>
      {board.length > 0 && (
        <Board
          board={board}
          setBoard={setBoard}
          isLose={isLose}
          setIsLose={setIsLose}
          isFirstClick={isFirstClick}
          setIsFirstClick={setIsFirstClick}
          setEmojiState={setEmojiState}
          minesCount={minesCount}
          setMinesCount={setMinesCount}
          handleStartTimer={handleStartTimer}
          handleStopTimer={handleStopTimer}
        />
      )}
    </div>
  );
}
