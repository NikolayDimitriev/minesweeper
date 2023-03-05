export type TCellInfo = {
  id: string;
  value: number;
  x: number;
  y: number;
  isOpened: boolean;
  isFlagged: boolean;
  isQuestioned: boolean;
  isDefused: boolean;
  isBlowned: boolean;
};

export type TBoard = TCellInfo[][];

export type TEmoji = 'happy' | 'pressed' | 'scary' | 'cool' | 'dead';

export type TPosition =
  | 'leftTop'
  | 'rightTop'
  | 'rightBottom'
  | 'leftBottom'
  | 'topLine'
  | 'rightLine'
  | 'bottomLine'
  | 'leftLine'
  | 'center';
