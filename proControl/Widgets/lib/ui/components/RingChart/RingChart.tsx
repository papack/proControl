import { Absolute, Relative, Center, Stack, Box } from "@proControl/lib/ui/layout"
import { Svg, Rect, Circle, Line, G } from "@proControl/lib/ui/svg"
import { calculateCircumference, scale } from "@proControl/Widgets/lib/uitls"
import { RingChartProps } from "./types"

const OFFSET = 1
const WIDTH = 25
const RADIUS = 85

export const RingChart = ({
  parts = [],
  unit = "",
  decimalPlaces = 0,
  locale = "de",
  debugMode = false
}: RingChartProps) => {
  return (
    <Relative w="100%" h="100%">
      {/* Graphic */}
      <Svg width="100%" height="100%" viewBox="-100, -100, 200, 200" fill="none">
        <G transform={`rotate(${OFFSET * 2})`}>
          {parts.map(({ color, value }, index) => {
            //get max
            let max = 0
            for (const { value } of parts) {
              max += value
            }

            //get current
            let current = 0
            for (let i = 0; i < index; i++) {
              current += parts[i].value
            }

            return (
              <Circle
                key={index}
                cx={0}
                cy={0}
                r={RADIUS + OFFSET}
                css={{
                  stroke: color,
                  transitionDuration: "1000ms"
                }}
                transform={`rotate(${scale(current, [0, max], [-90, -90 + 360])})`}
                strokeDashoffset={scale(
                  value,
                  [max, 0],
                  [0, calculateCircumference(RADIUS + OFFSET)]
                )}
                strokeWidth={WIDTH}
                strokeDasharray={calculateCircumference(RADIUS)}
              />
            )
          })}
        </G>

        {/**DEBUG */}
        {debugMode && (
          <>
            <Rect x={0} y={0} width={4} height={4} fill="hotpink" transform="translate(-2,-2)" />
            <Line x1={-100} y1={0} x2={100} y2={0} strokeWidth={1} stroke="hotpink" />
            <Line x1={0} y1={-100} x2={0} y2={100} strokeWidth={1} stroke="hotpink" />
          </>
        )}
      </Svg>

      {/* Text */}
      <Absolute top="0px" left="0px" right="0px" bottom="0px">
        <Center h="100%">
          <Stack g="$md">
            {parts.map(({ color, value }, index) => (
              <Center key={index} c={color} fs={index === 0 ? "$xl" : "$md"} fw="bold">
                {value.toLocaleString(locale, {
                  minimumFractionDigits: decimalPlaces,
                  maximumFractionDigits: decimalPlaces
                })}
                {unit && ` ${unit}`}
              </Center>
            ))}
          </Stack>
        </Center>
      </Absolute>
    </Relative>
  )
}
