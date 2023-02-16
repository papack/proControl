import { scale } from "@proControl/Widgets/lib/uitls"
import { useState, useRef, useEffect } from "react"
import { Svg, Rect, Text, Line } from "@proControl/lib/ui/svg"
import { AnalogTimeSeriesChartsProps } from "./types"
import { Debug } from "./lib/ui/components/Debug"

const PADDING = 10

export const AnalogTimeSeriesCharts = ({
  width = 600,
  height = 300,
  graphs = [],
  locale = "de",
  points = [],
  xMin = new Date("01.01.1970 01:00"),
  xMax = new Date("01.01.1970 02:00"),
  xSteps = 10,
  yMax = 100,
  yMin = 0,
  ySteps = 10,
  debug = false
}: AnalogTimeSeriesChartsProps) => {
  //calc values
  const xCenter = width / 2
  const yCenter = height / 2

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
