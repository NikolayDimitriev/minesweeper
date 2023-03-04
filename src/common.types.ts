export type TCellInfo = {
  id: string;
  value: number;
  x: number;
  y: number;
  isOpened: boolean;
  isFlagged: boolean;
  isQuestioned: boolean;
  isDefused: boolean;
};

export type TBoard = TCellInfo[][];
