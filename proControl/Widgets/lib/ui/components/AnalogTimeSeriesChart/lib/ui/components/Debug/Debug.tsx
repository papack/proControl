import { Rect, Text, Line } from "@proControl/lib/ui/svg"
import { DebugProps } from "./types"

export const Debug = ({
  fontsize = 8,
  height = 300,
  width = 600,
  xCenter = 300,
  yCenter = 150,
  padding = 10,
  xPos = 25,
  yPos = 25,
  show = false
}: DebugProps) => {
  if (!show) return null

  return (
    <>
      {/** Border */}
      <Rect x={0} y={0} height={height} width={width} stroke="gray" strokeDasharray={5} />

      {/** padding */}
      <Rect
        x={0 + padding}
        y={0 + padding}
        height={height - padding * 2}
        width={width - padding * 2}
        fill="rgba(0,0,0,0.05)"
      />

      {/** PointerPos */}
      <Text x={xPos + 5} y={yPos - 5} fill="red" fontSize={fontsize}>
        {xPos},{yPos}
      </Text>
      <Line x1={0} x2={width} y1={yPos} y2={yPos} stroke="hotpink" strokeWidth={1}></Line>
      <Line x1={xPos} x2={xPos} y1={0} y2={height} stroke="hotpink" strokeWidth={1}></Line>
      <Rect
        x={xPos}
        y={yPos}
        height={6}
        width={6}
        fill="blue"
        stroke="hotpink"
        transform="translate(-3,-3)"
      />

      {/** Center */}
      <Rect
        x={xCenter}
        y={yCenter}
        height={4}
        width={4}
        fill="blue"
        stroke="yellow"
        transform="translate(-2,-2)"
      />
      <Line x1={0} x2={width} y1={yCenter} y2={yCenter} stroke="gray" strokeWidth={0.5}></Line>
      <Line x1={xCenter} x2={xCenter} y1={0} y2={height} stroke="gray" strokeWidth={0.5}></Line>
      <Text x={xCenter + 5} y={yCenter} fill="red" fontSize={fontsize}>
        {xCenter},{yCenter}
      </Text>

      {/** Left Top corner debug */}
      <Rect
        x={0}
        y={0}
        height={10}
        width={10}
        fill="blue"
        stroke="yellow"
        transform="translate(-5,-5)"
      />
      <Text x={10} y={10} fill="red" fontSize={fontsize}>
        {0},{0}
      </Text>

      {/** Right Top corner debug */}
      <Rect
        x={width}
        y={0}
        height={10}
        width={10}
        fill="blue"
        stroke="yellow"
        transform="translate(-5,-5)"
      />
      <Text x={width - 40} y={10} fill="red" fontSize={fontsize}>
        {width},{0}
      </Text>

      {/** Right Buttom corner debug */}
      <Rect
        x={width}
        y={height}
        height={10}
        width={10}
        fill="blue"
        stroke="yellow"
        transform="translate(-5,-5)"
      />
      <Text x={width - 40} y={height - 10} fill="red" fontSize={fontsize}>
        {width},{height}
      </Text>

      {/** left Buttom corner debug */}
      <Rect
        x={0}
        y={height}
        height={10}
        width={10}
        fill="blue"
        stroke="yellow"
        transform="translate(-5,-5)"
      />
      <Text x={10} y={height - 10} fill="red" fontSize={fontsize}>
        {0},{height}
      </Text>
    </>
  )
}
