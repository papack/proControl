import { Svg, Rect, Circle, Line } from "@proControl/lib/ui/svg"
import { Box, Stack, Center, Absolute, Relative } from "@proControl/lib/ui/layout"
import { scale, calculateCircumference, clamp } from "@proControl/Widgets/lib/uitls"
import { KPIGaugeProps } from "./types"

const RADIUS = 90
const CIRCUMFERENCE = calculateCircumference(RADIUS)

export const KPIGauge = ({
  color = "$christ",
  debug = false,
  decimalPlaces = 0,
  locale = "de",
  title = "",
  unit = "",
  value = 0,
  hasProgress = false,
  max = 100,
  min = 0
}: KPIGaugeProps) => {
  return (
    <Stack w="145px" g="$lg" jc="space-around" h="100%">
      {/** Title */}
      <Box h="100%" fw="$semibold" fs="$lg" c={color} css={{ textAlign: "center" }}>
        {title}
      </Box>

      {/** Graphic */}
      <Relative>
        <Svg viewBox="-100, -100, 200, 200" width="100%" height="100%" fill="none">
          {/** Decoration Circle */}
          <Circle x={0} y={0} r={RADIUS} css={{ stroke: "$gray800" }} />

          {/** Fill */}
          {hasProgress && (
            <Circle
              x={0}
              y={0}
              r={RADIUS}
              strokeWidth={16}
              transform="rotate(-90)"
              strokeDasharray={CIRCUMFERENCE}
              strokeDashoffset={scale(clamp(value, min, max), [min, max], [CIRCUMFERENCE, 0])}
              css={{ stroke: color, transitionDuration: "600ms" }}
            />
          )}

          {/** Debug */}
          {debug && (
            <>
              <Rect x={0} y={0} width={4} height={4} fill="hotpink" transform="translate(-2,-2)" />
              <Rect x={-99} y={-99} width={198} height={198} stroke="hotpink" />
              <Line x1={-100} y1={0} x2={100} y2={0} stroke="hotpink" />
              <Line x1={0} y1={-100} x2={0} y2={100} stroke="hotpink" />
            </>
          )}
        </Svg>
        {/** Graphic Text */}
        <Absolute top={0} right={0} bottom={0} left={0}>
          <Center h="100%">
            <Stack g="$sm">
              <Center fw="$bold" fs="$xl" c={color}>
                {value.toLocaleString(locale, {
                  minimumFractionDigits: decimalPlaces <= 0 ? 0 : decimalPlaces,
                  maximumFractionDigits: decimalPlaces <= 0 ? 0 : decimalPlaces
                })}
              </Center>
              {unit && <Center>{`[${unit}]`}</Center>}
            </Stack>
          </Center>
        </Absolute>
      </Relative>
    </Stack>
  )
}
