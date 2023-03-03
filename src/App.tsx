import { Board } from './components/Board';
import { createBoard } from './utils';
import { TBoard } from './common.types';
import classes from './App.module.css';

export function App() {
  const matrix: TBoard = createBoard();
  return (
    <div className={classes.app}>
      <div className={classes.menu}>
        <div className={classes.countMines}></div>
        <div className={classes.mainBtn}></div>
        <div className={classes.timer}></div>
      </div>
      <Board matrix={matrix} />
    </div>
  );
}
