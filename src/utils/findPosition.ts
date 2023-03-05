import { TPosition } from "../common.types";

export function findPosition(i: number, j:number): TPosition {
  if (i === 0 && j === 0) {
    return 'leftTop'
  } else if (i === 15 && j === 15) {
    return 'rightBottom'
  } else if (i === 0 && j === 15) {
    return 'rightTop'
  } else if (i === 15 && j === 0) {
    return 'leftBottom'
  } else if (i === 0) {
    return 'topLine'
  } else if (i === 15) {
    return 'bottomLine'
  } else if (j === 0) {
    return 'leftLine'
  } else if (j === 15) {
    return 'rightLine'
  } else {
    return 'center'

  }
}
