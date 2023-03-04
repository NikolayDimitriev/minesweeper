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
  }

  return (
    <div
      className={classes.app}
      onContextMenu={(e) => {
        e.preventDefault();
      }}
    >
      <div className={classes.menu}>
        <div className={classes.countMines}></div>
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
        <div className={classes.timer}></div>
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
        />
      )}
    </div>
  );
}
