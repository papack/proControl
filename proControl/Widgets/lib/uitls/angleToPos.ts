/**
 *
 * Give this function a degree and a length and it will return the
 * point where the straight line ends.
 * Very useful for e.g. labeling of analog displays
 *
 * @param angle
 * @param length
 * @param x
 * @param y
 * @returns {x,y}
 */
export const angleToPos = (angle: number, length: number, x: number = 0, y: number = 0) => {
  //calculate radian
  const theta = ((angle + 270) * Math.PI) / 180

  //caculate an return value
  return {
    x: x + length * Math.cos(theta),
    y: y + length * Math.sin(theta)
  }
}
