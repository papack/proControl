import { scale } from "./scale"

interface stepLabel {
  label: string
  pos: number
}

/**
 *
 *  this function calculates the position of the step la *  this function calculates the position of the step labelss
 *
 * @param from start of the label range eg 0
 * @param to  end of the label range eg 100
 * @param step step of the label range eg 10
 * @param posStart start real position of the label range eg 343
 * @param posEnd read position of the label range eg 564
 * @returns
 */
export const calculateStepLabel = (
  from: number,
  to: number,
  step: number,
  posStart: number,
  posEnd: number
) => {
  const stepLabels: stepLabel[] = []

  // iterate from min to max with step
  for (let i = from; i <= to; i += step) {
    // calculate position of step label
    const pos = scale(i, [from, to], [posStart, posEnd])
    stepLabels.push({
      label: i.toFixed(0),
      pos
    })
  }
  return stepLabels
}
