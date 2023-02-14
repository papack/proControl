import { Line, Rect, Svg, Circle } from "@proControl/lib/ui/svg"
import {
  calculateCircumference,
  scale,
  calculateStepLabel,
  clamp
} from "@proControl/Widgets/lib/uitls"
import { SpeedGaugeProps } from "./types"

const RADIUS = 65
const GAP = 1
const WIDTH = 20
const LABEL_LENGTH = 15
const LABEL_WIDTH = 1
const CIRCUMFERENCE = calculateCircumference(RADIUS)

export const SpeedGauge = ({
  locale = "de",
  max = 100,
  min = 0,
  steps = 10,
  value = 0,
  color = "$christ",
  hasSlider = false,
  onSliderChange = () => {},
  sliderStartValue = 0,
  unit = ""
}: SpeedGaugeProps) => {
  //clamp
  if (max < 0.1) max = 0.1
  if (min < 0) min = 0
  steps = clamp(steps, 0.1, max)

  return (
    <Svg width="100%" height="100%" fill="none" viewBox="-100,-100,200,200">
      <Circle
        x={0}
        transform="rotate(-90)"
        y={0}
        r={RADIUS}
        strokeWidth={WIDTH}
        css={{ stroke: color, transitionDuration: "600ms" }}
        strokeDasharray={CIRCUMFERENCE}
        strokeDashoffset={scale(clamp(value, min, max), [min, max], [CIRCUMFERENCE, 0])}
      />

      {calculateStepLabel(min, max, steps, 0, 360).map(({ pos }, index) => {
        //dont print first element, if first and last el has same pos
        if ((steps % 5 === 0 || steps % 10 === 0 || steps === 0.5 || steps === 0.1) && index === 0)
          return null

        //print labels
        return (
          <Rect
            x={0}
            y={0}
            width={LABEL_WIDTH}
            height={LABEL_LENGTH}
            transform={`rotate(${pos}) translate(-${LABEL_WIDTH / 2},-${
              RADIUS + LABEL_LENGTH / 2 + WIDTH + GAP
            })`}
            fill="gray"
          />
        )
      })}

      {/**Debug */}
      <Rect x={0} y={0} width={4} height={4} transform="translate(-2,-2)" fill="hotpink" />
      <Line x1={-100} x2={100} y1={0} y2={0} stroke="hotpink" strokeWidth={0.5} />
      <Line x1={0} x2={0} y1={-100} y2={100} stroke="hotpink" strokeWidth={0.5} />
    </Svg>
  )
}
