import { useState, useRef, useEffect } from "react"
import { Line, Rect, Svg, Circle, G, Text } from "@proControl/lib/ui/svg"
import { Absolute, Relative, Center, Stack } from "@proControl/lib/ui/layout"
import {
  calculateCircumference,
  scale,
  calculateStepLabel,
  clamp,
  posAtoPosBCalcAngle,
  snapToStep
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
  unit = "",
  decimalPlaces = 0,
  debug = false
}: SpeedGaugeProps) => {
  //clamp
  if (max < 0.1) max = 0.1
  if (min < 0) min = 0
  steps = clamp(steps, 0.1, max)

  //state
  const [xPos, setXPos] = useState<number>(0)
  const [yPos, setYPos] = useState<number>(0)
  const [targetAngle, setTargetAngle] = useState<number>(0)
  const [lastTargetAngle, setLastTargetAngle] = useState<number>(0)
  const [enableHandle, setEnableHandle] = useState<boolean>(false)
  const [sliderValue, setSliderValue] = useState<number>(sliderStartValue)

  //refs
  const svgRef = useRef<any>(null)

  //effects
  useEffect(() => {
    if (!hasSlider) return
    setSliderValue(sliderStartValue)
    onSliderChange(sliderStartValue)
    setTargetAngle(scale(sliderStartValue, [min, max], [0, 360]))
  }, [hasSlider, sliderStartValue])

  return (
    <Relative
      s="100%"
      onPointerDown={() => {
        if (!hasSlider) return
        setEnableHandle(true)
      }}
      onPointerUp={() => {
        if (!hasSlider) return
        setEnableHandle(false)
      }}
      onPointerLeave={() => {
        if (!hasSlider) return
        setEnableHandle(false)
      }}
      onPointerMove={(e) => {
        //do nothing, if handle is disabled
        if (!enableHandle) return

        //stop event bubbling
        e.preventDefault()
        e.stopPropagation()

        //do nothing, if we dont have the svg ref
        if (!svgRef.current) return

        //get geometry of "clickevent" and of svg graphi
        const { clientX, clientY } = e
        const { height, width, left, top } = svgRef.current.getBoundingClientRect()

        //scale "outer" Matrix to "inner Matrix"
        const newXPos = scale(clientX, [left, left + width], [-100, 100])
        const newYPos = scale(clientY, [top, top + height], [-100, 100])
        const newAngle = posAtoPosBCalcAngle([0, 0], [newXPos, newYPos])

        //dont allow turn handle from eg. 1° to 359°
        //allow max a rotation of 90°
        if (Math.abs(newAngle - lastTargetAngle) > 90) {
          return
        }

        //calc new slider value
        const newSliderValue = snapToStep(scale(newAngle, [0, 360], [min, max]), [min, max], steps)

        //set value and call callback, but only if value changed
        if (newSliderValue !== sliderValue) {
          onSliderChange(newSliderValue)
          setSliderValue(newSliderValue)
        }

        //set new positions
        setTargetAngle(newAngle)
        setLastTargetAngle(newAngle)
        setXPos(newXPos)
        setYPos(newYPos)
      }}
      css={{
        touchAction: "none",
        userSelect: "none"
      }}
    >
      {/** Text */}
      {!debug && (
        <Absolute top="0px" right="0px" bottom="0px" left="0px">
          <Center h="100%">
            <Stack g="$sm">
              <Center fs="$3xl" fw="$bold" c={color}>
                {value.toLocaleString(locale, {
                  maximumFractionDigits: decimalPlaces,
                  minimumFractionDigits: decimalPlaces
                })}
              </Center>
              {unit && <Center>[{unit}]</Center>}
            </Stack>
          </Center>
        </Absolute>
      )}

      {/** Graphic */}
      <Svg width="100%" height="100%" fill="none" viewBox="-100,-100,200,200" ref={svgRef}>
        {/** value */}
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

        {/** label marks */}
        {calculateStepLabel(min, max, steps, 0, 360).map(({ pos }, index) => {
          //dont print first element, if first and last el has same pos
          if (
            (steps % 5 === 0 || steps % 10 === 0 || steps === 0.5 || steps === 0.1) &&
            index === 0
          )
            return null

          //print labels
          return (
            <Rect
              key={index}
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

        {/** Slider / Handle*/}
        {hasSlider && (
          <G
            transform={`rotate(${scale(
              snapToStep(scale(targetAngle, [0, 360], [min, max]), [0, max], steps),
              [min, max],
              [0, 360]
            )}), translate(0,-86)`}
          >
            <Circle x={0} y={0} r={10} css={{ fill: "rgba(0,0,0,0.7)" }} />
            {debug && (
              <Line x1={0} y1={0} x2={0} y2={32} css={{ stroke: "purple", strokeWidth: 2 }} />
            )}
          </G>
        )}

        {/**Debug */}
        {debug && (
          <>
            <Rect x={0} y={0} width={4} height={4} transform="translate(-2,-2)" fill="hotpink" />
            <Line x1={-100} x2={100} y1={0} y2={0} stroke="hotpink" strokeWidth={0.5} />
            <Line x1={0} x2={0} y1={-100} y2={100} stroke="hotpink" strokeWidth={0.5} />

            {hasSlider && (
              <>
                <Rect
                  x={xPos}
                  y={yPos}
                  width={4}
                  height={4}
                  transform="translate(-2,-2)"
                  fill="red"
                />
                <Line x1={0} x2={xPos} y1={0} y2={yPos} stroke="gray" strokeWidth={0.5} />
                <Text fontSize={10} x={-90} y={-90} fill="red">
                  PointerPos: x
                  {xPos.toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2
                  })}{" "}
                  y
                  {yPos.toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2
                  })}
                </Text>
                <Text fontSize={10} x={0} y={10} fill="red">
                  {targetAngle.toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2
                  })}
                  °
                </Text>
              </>
            )}
          </>
        )}
      </Svg>
    </Relative>
  )
}
