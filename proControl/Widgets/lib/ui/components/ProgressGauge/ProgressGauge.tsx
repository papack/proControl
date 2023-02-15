import { Absolute, Center, Relative } from "@proControl/lib/ui/layout"
import { Svg, Rect, Circle, Line } from "@proControl/lib/ui/svg"
import { calculateCircumference, scale } from "@proControl/Widgets/lib/uitls"
import { ProgressGaugeProps } from "./types"

const RADIUS = 90
const CIRCUMFERENCE = calculateCircumference(RADIUS)

export const ProgressGauge = ({
  locale = "de",
  max = 100,
  min = 0,
  unit = "%",
  value = 50,
  color = "$christ",
  decimalPlaces = 0,
  debug = false
}: ProgressGaugeProps) => {
  return (
    <Relative>
      <Svg viewBox="-100, -100, 200, 200" fill="none" width="100%" height="100%">
        {/** Background Ring */}
        <Circle x={0} y={0} r={RADIUS} css={{ stroke: "$gray600" }} />

        {/** Progress */}
        <Circle
          x={0}
          y={0}
          transform="rotate(-90)"
          r={RADIUS}
          strokeWidth={10}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={scale(value, [min, max], [CIRCUMFERENCE, 0])}
          css={{
            stroke: color,
            transitionDuration: "600ms"
          }}
        />

        {/** Debug  */}
        {debug && (
          <>
            <Rect
              css={{ fill: "HotPink" }}
              x={0}
              y={0}
              width={4}
              height={4}
              transform="translate(-2,-2)"
            />
            <Line x1={-100} y1={0} x2={100} y2={0} stroke="hotpink" strokeWidth={0.5} />
            <Line x1={0} y1={-100} x2={0} y2={100} stroke="hotpink" strokeWidth={0.5} />
          </>
        )}
      </Svg>
      <Absolute top="0px" right="0px" bottom="0px" left="0px">
        <Center h="100%" fs="$3xl" fw="$bold" c={color}>
          {value.toLocaleString(locale, {
            minimumFractionDigits: decimalPlaces <= 0 ? 0 : decimalPlaces,
            maximumFractionDigits: decimalPlaces <= 0 ? 0 : decimalPlaces
          })}
          {unit && ` ${unit}`}
        </Center>
      </Absolute>
    </Relative>
  )
}
