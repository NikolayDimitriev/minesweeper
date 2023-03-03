export type TCellInfo = {
  value: number;
  x: number;
  y: number;
  isOpened: boolean;
  isRevealed: boolean;
  isFlagged: boolean;
};

export type TMatrix = TCellInfo[][];
