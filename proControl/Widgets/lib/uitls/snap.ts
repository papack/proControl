export const snap = (value: number, min: number, max: number) => {
  if (value < min) return min
  if (value > max) return max
  if (value - min > (max - min) / 2) return max
  return min
}
