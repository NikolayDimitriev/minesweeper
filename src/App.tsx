import { useState, useEffect, useCallback } from 'react';
import cn from 'classnames';
import { Board } from './components/Board';
import { Counter } from './components/Counter';
import { Timer } from './components/Timer';
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
    setTimer(0);
  }

  const handleStartTimer = useCallback(() => {
    const newTimerId: number = window.setInterval(() => {
      setTimer((prev) => prev + 1);
    }, 1000);
    setTimerId(newTimerId);
  }, []);

  const handleStopTimer = useCallback(() => {
    clearInterval(timerId as number);
    setTimerId(null);
  }, [timerId]);

  return (
    <div
      className={classes.app}
      onContextMenu={(e) => {
        e.preventDefault();
      }}
    >
      <div className={classes.menu}>
        <Counter minesCount={minesCount} />
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
        <Timer timer={timer} />
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
