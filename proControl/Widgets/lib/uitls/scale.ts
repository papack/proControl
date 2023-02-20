/**
 *  Scales a value from one range to another range
 *
 * @param value to scale
 * @param from [min, max]
 * @param to [min, max]
 * @returns scaled value
 */
export const scale = (value: number, from: Array<number>, to: Array<number>) => {
  //get the min and max values from the from and to arrays
  const [minFrom, maxFrom] = from
  const [minTo, maxTo] = to

  //scale the value
  return ((value - minFrom) * (maxTo - minTo)) / (maxFrom - minFrom) + minTo
}
