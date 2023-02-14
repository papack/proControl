export const snapToStep = (value: number, range: Array<number>, step: number) => {
  //get the min and max values from the range array
  const [min, max] = range

  //snap the value
  let v = Math.min(Math.max(value, min), max)

  //snap the value to the nearest step
  v = Math.round(v / step) * step

  //return the value
  return v
}
