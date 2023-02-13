/**
 *
 * Give this function a degree and a length and it will return the
 * point where the straight line ends.
 * Very useful for e.g. labeling of analog displays
 *
 * @param angle
 * @param radius
 * @param xFrom
 * @param yFrom
 * @returns {x,y}
 */
export const angleToPos = (angle: number, radius: number, xFrom: number = 0, yFrom: number = 0) => {
  //calculate radian
  const theta = ((angle + 270) * Math.PI) / 180

  //caculate an return value
  return {
    x: xFrom + radius * Math.cos(theta),
    y: yFrom + radius * Math.sin(theta)
  }
}
