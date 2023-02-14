import { scale } from "./scale"
/**
 *
 * Give this function two Points Point A(x1,y1) and Point B(x2,y2)
 * A Points to B and B Points to A. The Function calculates the Angle on
 * Point A and on Point B and Returns it
 *
 * Useful to trace a user input to a rotation
 *
 * @param A [x,y]
 * @param B [x,y]
 * @returns {A,B}
 * @example
 * const A = [0,0]
 * const B = [1,0]
 * const {A,B} = PosAtoPosBCalcAngles(A,B)
 * console.log(A,B) // 90
 *
 *
 */
export const posAtoPosBCalcAngle = (A: number[], B: number[]) => {
  //calculate radian
  const theta = Math.atan2(B[1] - A[1], B[0] - A[0])

  //caculate an return value
  let angle: number = (theta * 180) / Math.PI + 90

  //only return positive deg
  if (angle < 0) {
    angle = 360 + angle
  }

  //return
  return angle
}
