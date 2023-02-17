import { useRef } from "react"
import { Svg, Rect } from "@proControl/lib/ui/svg"
import { scale } from "@proControl/Widgets/lib/uitls"
import { ChangeOfStateDiagramProps } from "./types"

const PADDING_BOTTOM = 20
const PADDING_TOP = 50

export const ChangeOfStateDiagram = ({
  width = 600,
  height = 120,
  min = new Date("2023-01-01T13:00:00.000Z").getTime(),
  max = new Date("2023-01-02T13:00:00.000Z").getTime(),
  stepsInMin = 60 * 3,
  locale = "de",
  timezone = "Europe/Berlin",
  changes = [],
  debug = false
}: ChangeOfStateDiagramProps) => {
  //calc values
  const xCenter = width / 2
  const yCenter = height / 2

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
    >
      {/** Graphic */}
      {changes.map(({ beginTimestamp, color, data }, i) => {
        //calc values
        const xStart = scale(beginTimestamp, [min, max], [0, width])
        const rectWidth =
          changes.length === i + 1
            ? //last element
              width - xStart
            : //"normal element" -> begin of next element - xStart of current
              scale(changes[i + 1].beginTimestamp, [min, max], [0, width]) - xStart

        //Rect
        return (
          <Rect
            x={xStart}
            y={0 + PADDING_TOP}
            height={height - PADDING_BOTTOM - PADDING_TOP}
            width={rectWidth}
            css={{ fill: color }}
          />
        )
      })}

      {/** Border */}
      <Rect
        x={1}
        y={PADDING_TOP}
        height={height - PADDING_BOTTOM - PADDING_TOP}
        width={width - 2}
        css={{ stroke: "$gray600" }}
      />

      {/** debug */}
      {debug && (
        <>
          {/** Center */}
          <Rect
            x={xCenter}
            y={yCenter}
            height={4}
            width={4}
            transform="translate(-2,-2)"
            fill="red"
          />
          {/** Complete Image */}
          <Rect x={0} y={0} height={height} width={width} stroke="gray" strokeDasharray={2} />

          {/** Area to paint the Diagram */}
          <Rect
            x={0}
            y={PADDING_TOP}
            height={height - PADDING_BOTTOM - PADDING_TOP}
            width={width}
            fill="rgba(255,0,0,0.5)"
          />
        </>
      )}
    </Svg>
  )
}
