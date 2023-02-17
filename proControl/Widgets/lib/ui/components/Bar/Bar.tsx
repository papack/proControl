import { BarProps } from "./types"
import { Flex, Box, Absolute, Relative, Center } from "@proControl/lib/ui/layout"
import { Svg, Rect, Mask, Line } from "@proControl/lib/ui/svg"
import { scale, clamp } from "@proControl/Widgets/lib/uitls"

const BORDER_RADIUS = 4

export const Bar = ({
  barColor = "$christ",
  textColor = "$gray400",
  decimalPlaces = 0,
  locale = "de",
  titleWidth = "100px",
  max = 100,
  min = 0,
  unit = "",
  value = 0,
  innerTextCenter = "",
  innerTextLeft = "",
  innerTextRight = "",
  title = "",
  bold = false,
  debug = false
}: BarProps) => {
  return (
    <Flex g="$md">
      {title && (
        <Flex jc="flex-start" ai="center" w={titleWidth}>
          {title}
        </Flex>
      )}

      <Relative>
        <Svg width="100%" height="100%" viewBox="-200,-20,400,40" fill="none">
          {/** mask */}
          <Mask id="bar">
            <Rect
              rx={BORDER_RADIUS}
              x={-199}
              y={-19}
              height={38}
              width={398}
              css={{ fill: "white" }}
            />
          </Mask>

          {/** fill */}
          <Rect
            x={-200}
            y={-19}
            height={38}
            width={scale(clamp(value, min, max), [min, max], [0, 400])}
            css={{ fill: barColor, transitionDuration: "600ms" }}
            mask="url(#bar)"
          />

          {/** border */}
          <Rect
            rx={BORDER_RADIUS}
            x={-199}
            y={-19}
            height={38}
            width={398}
            css={{ stroke: "$gray800" }}
          />

          {/** Debug */}
          {debug && (
            <>
              <Rect
                css={{ fill: "hotpink", stroke: "Yellow" }}
                x={0}
                y={0}
                height={4}
                width={4}
                transform="translate(-2,-2)"
              />
              <Line x1={-200} x2={200} y1={0} y2={0} stroke="hotpink" />
              <Line x1={0} x2={0} y1={-15} y2={30} stroke="hotpink" />
            </>
          )}
        </Svg>

        {/** Text */}
        <Absolute top={0} right={0} bottom={0} left={0}>
          <Flex
            h="100%"
            jc="space-between"
            ai="center"
            mx="$md"
            c={textColor}
            fw={bold ? "$bold" : undefined}
          >
            <Box>{innerTextLeft}</Box>
            <Box>{innerTextCenter}</Box>
            <Box>{innerTextRight}</Box>
          </Flex>
        </Absolute>
      </Relative>
      <Center>
        {value.toLocaleString(locale, {
          minimumFractionDigits: decimalPlaces <= 0 ? 0 : decimalPlaces,
          maximumFractionDigits: decimalPlaces <= 0 ? 0 : decimalPlaces
        })}
        {unit && ` ${unit}`}
      </Center>
    </Flex>
  )
}
