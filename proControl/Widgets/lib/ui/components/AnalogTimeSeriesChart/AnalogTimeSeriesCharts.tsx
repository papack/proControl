import { scale, calculateStepLabel, snap } from "@proControl/Widgets/lib/uitls"
import React, { useState, useRef } from "react"
import { Svg, Text, Line, Circle } from "@proControl/lib/ui/svg"
import { AnalogTimeSeriesChartsProps } from "./types"
import { Debug } from "./lib/ui/components/Debug"

const PADDING = 32

export const AnalogTimeSeriesCharts = ({
  width = 600,
  height = 300,
  graphs = [],
  locale = "de",
  timezone = "Europe/Berlin",
  onSliderChange = () => {},
  points = [],
  xMin = new Date("2023-01-01T13:00:00.000Z").getTime(),
  xMax = new Date("2023-01-02T13:00:00.000Z").getTime(),
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

  //dont scale x to small
  if (xStepsInMin < 1) {
    xStepsInMin = 1
  }

  //scale steps
  const xSteps = xStepsInMin * 60_000

  //states
  const [xPos, setXPos] = useState<number>(0)
  const [yPos, setYPos] = useState<number>(0)
  const [xPosSlider, setXPosSlider] = useState<number>(0)

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
      onPointerMove={(e) => {
        //do nothing, if we dont have the svg ref
        if (!svgRef.current) return

        //get geometry of "clickevent" and of svg graphi
        const { clientX, clientY } = e
        const { height: h, width: w, left: l, top: t } = svgRef.current.getBoundingClientRect()

        //scale "outer" Matrix to "inner Matrix"
        const newXPos = scale(clientX, [l, l + w], [0, width])
        const newYPos = scale(clientY, [t, t + h], [0, height])

        //filter not valid
        const pointsWithoutMissing = points.filter((p) => {
          if (p.isMissing) return null
          return p
        })

        //Scale xPos to time
        let ts = scale(newXPos, [PADDING + 0, width - PADDING], [xMin, xMax])
        for (let i = 1; i < pointsWithoutMissing.length; i++) {
          if (ts > pointsWithoutMissing[i].timestamp) continue
          if (ts < pointsWithoutMissing[i - 1].timestamp) continue

          //set slider xPos
          ts = snap(ts, pointsWithoutMissing[i - 1].timestamp, pointsWithoutMissing[i].timestamp)
          const newXPosSlider = scale(ts, [xMin, xMax], [0 + PADDING, width - PADDING])
          setXPosSlider(newXPosSlider)

          const changedData = {}
          const selectedIndex = pointsWithoutMissing[i - 1].timestamp === ts ? i - 1 : i

          for (const i in pointsWithoutMissing[selectedIndex]!.values) {
            changedData[graphs[i] && graphs[i].id ? graphs[i].id : i] =
              pointsWithoutMissing[selectedIndex].values![i]
          }

          onSliderChange(ts, changedData)
        }

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
                hour: "2-digit",
                timeZone: timezone
              })}
            </Text>

            {/** Graphs */}

            {/** Line with Points  */}
            {points.map(({ timestamp, values }, i) =>
              values?.map((v, j) => (
                <React.Fragment key={String(i + j)}>
                  {/** Draw Line from last to current */}
                  {i > 0 && !points[i - 1].isMissing && points[i - 1].values && (
                    <Line
                      x1={scale(
                        points[i - 1].timestamp,
                        [xMin, xMax],
                        [0 + PADDING, width - PADDING]
                      )}
                      x2={scale(timestamp, [xMin, xMax], [0 + PADDING, width - PADDING])}
                      y1={scale(
                        points[i - 1].values![j],
                        [yMin, yMax],
                        [height - PADDING, 0 + PADDING]
                      )}
                      y2={scale(v, [yMin, yMax], [height - PADDING, 0 + PADDING])}
                      css={{
                        stroke: graphs[j] ? graphs[j].color : "hotpink"
                      }}
                      strokeWidth={2}
                    />
                  )}

                  {/** Draw point */}
                  <Circle
                    cx={scale(timestamp, [xMin, xMax], [0 + PADDING, width - PADDING])}
                    cy={scale(v, [yMin, yMax], [height - PADDING, 0 + PADDING])}
                    css={{
                      fill: graphs[j] ? graphs[j].color : "hotpink"
                    }}
                    r={4}
                  />
                </React.Fragment>
              ))
            )}
          </>
        )
      )}
      {/** Shadow */}
      {/** TODO Add Shadow */}

      {/** Slider / Handle */}
      <Circle cx={xPosSlider} cy={20 + PADDING} r={15} fill="rgba(0,0,0,0.4)" />
      <Line
        x1={xPosSlider}
        x2={xPosSlider}
        y1={20 + 15 + PADDING}
        y2={height - PADDING}
        stroke="rgba(0,0,0,0.4)"
      />

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
