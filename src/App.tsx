import { useState, useEffect } from 'react';
import { Board } from './components/Board';
import { createBoard } from './utils';
import { TBoard } from './common.types';
import classes from './App.module.css';

export function App() {
  const [isLose, setIsLose] = useState(false);
  const [board, setBoard] = useState<TBoard>([]);
  const [isFirstClick, setIsFirstClick] = useState(true);

  useEffect(() => {
    const newBoard = createBoard();
    setBoard(newBoard);
  }, []);

  function restartGame() {
    const newBoard = createBoard();
    setBoard(newBoard);
    setIsLose(false);
    setIsFirstClick(true);
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
        <button className={classes.mainBtn} onClick={restartGame}></button>
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
        />
      )}
    </div>
  );
}
