import cn from 'classnames';
import classes from '../../App.module.css';

export function Timer({ timer }: { timer: number }) {
  return (
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
          [classes.over]: timer > 999,
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
          [classes.over]: timer > 999,
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
          [classes.over]: timer > 999,
        })}
      ></div>
    </div>
  );
}
