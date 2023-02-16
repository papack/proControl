import { scale, calculateStepLabel, clamp } from "@proControl/Widgets/lib/uitls"
import { useState, useRef, useEffect } from "react"
import { Svg, Rect, Text, Line } from "@proControl/lib/ui/svg"
import { AnalogTimeSeriesChartsProps } from "./types"
import { Debug } from "./lib/ui/components/Debug"

const PADDING = 32

export const AnalogTimeSeriesCharts = ({
  width = 600,
  height = 300,
  graphs = [],
  locale = "de",
  points = [],
  xMin = new Date("01.01.1970 14:00").getTime(),
  xMax = new Date("01.02.1970 14:00").getTime(),
  xStepsInMin = 60 * 3,
  yMax = 100,
  yMin = 0,
  ySteps = 10,
  debug = false
}: AnalogTimeSeriesChartsProps) => {
  //calc values
  const xCenter = width / 2
  const yCenter = height / 2

  //clamp values
  if (ySteps <= 0) {
    ySteps = 0.1
  }

  //scale steps
  const xSteps = xStepsInMin * 60_000

  //states
  const [xPos, setXPos] = useState<number>(0)
  const [yPos, setYPos] = useState<number>(0)

  //refs
  const svgRef = useRef<any>(null)

  return (
    <Svg
      width={`${width}px`}
      height={`${height}px`}
      fill="none"
      viewBox={`0,0,${width},${height}`}
      ref={svgRef}
      css={{
        touchAction: "none",
        userSelect: "none"
      }}
      onPointerDown={(e) => {
        //do nothing, if we dont have the svg ref
        if (!svgRef.current) return

        //get geometry of "clickevent" and of svg graphi
        const { clientX, clientY } = e
        const { height: h, width: w, left: l, top: t } = svgRef.current.getBoundingClientRect()

        //scale "outer" Matrix to "inner Matrix"
        const newXPos = scale(clientX, [l, l + w], [0, width])
        const newYPos = scale(clientY, [t, t + h], [0, height])

        //set new pos
        setXPos(newXPos)
        setYPos(newYPos)
      }}
    >
      {/** Background Lines (Y-Axis)*/}
      {calculateStepLabel(yMin, yMax, ySteps, height - PADDING, 0 + PADDING).map(({ pos }) => (
        <Line
          x1={0 + PADDING}
          x2={width - PADDING}
          y1={pos}
          y2={pos}
          strokeWidth={0.25}
          css={{ stroke: "$gray900" }}
        />
      ))}

      {/** Time Marks (X-Axis)*/}
      {calculateStepLabel(xMin, xMax, xSteps, 0 + PADDING, width - PADDING).map(
        ({ pos, label }) => (
          <>
            <Line
              x1={pos}
              x2={pos}
              y1={height - PADDING + 5}
              y2={height - PADDING - 5}
              strokeWidth={1}
              css={{ stroke: "$gray900" }}
            />
            <Text
              x={pos}
              y={height - PADDING + 20}
              fill="black"
              textAnchor="middle"
              fontSize={14}
              fontFamily="type-36, sans-serif"
            >
              {new Date(Number(label)).toLocaleTimeString(locale, {
                minute: "2-digit",
                hour: "2-digit"
              })}
            </Text>
          </>
        )
      )}

      {/** Debug */}
      <Debug
        padding={PADDING}
        xPos={xPos}
        yPos={yPos}
        fontsize={9}
        height={height}
        show={debug}
        width={width}
        xCenter={xCenter}
        yCenter={yCenter}
      />
    </Svg>
  )
}
