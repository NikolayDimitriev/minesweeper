import { Board } from './components/Board';

const matrix: number[][] = Array(16)
  .fill(0)
  .map(() => Array(16).fill(0));

export function App() {
  return <Board matrix={matrix} />;
}
