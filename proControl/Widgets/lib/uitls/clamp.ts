/**
 *
 * clamp a value between min and max
 *
 * @param value to clamp
 * @param min value (dont go lower)
 * @param max value (dont go higher)
 * @returns
 */
export const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max)
