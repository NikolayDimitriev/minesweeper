export type TCellInfo = {
  id: string;
  value: number;
  x: number;
  y: number;
  isOpened: boolean;
  isRevealed: boolean;
  isFlagged: boolean;
};

export type TBoard = TCellInfo[][];
