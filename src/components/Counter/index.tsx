import cn from 'classnames';
import classes from '../../App.module.css';

export function Counter({ minesCount }: { minesCount: number }) {
  return (
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
  );
}
