export const snap = (value: number, range: Array<number>) => {
  //get the min and max values from the range array
  const [min, max] = range

  //snap the value
  let v = Math.min(Math.max(value, min), max)

  //return the value
  return v
}
