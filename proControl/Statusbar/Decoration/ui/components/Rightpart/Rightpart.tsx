import { Svg, Rect, Path } from "@proControl/lib/ui/svg"
import { RightPartProps } from "./interfaces"

export const Rightpart = ({ stripColor }: RightPartProps) => {
  return (
    <Svg width="55px" height="80px" viewBox="0 0 55 80">
      <Rect y={40} x={0} height={20} width={55} css={{ fill: stripColor }}></Rect>
      <Path
        d={`
          M 0 0
          L 0 40
          C 5 40 5 40 11 45
          L 44 75
          C 50 80 50 80 55 80
          L 55 0
          Z
        `}
        css={{ fill: "$dark" }}
      />
    </Svg>
  )
}
