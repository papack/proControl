import { Svg, Path, Rect } from "@proControl/lib/ui/svg"

export const TeachinIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Rect x="50" y="33" width="35" height="35" css={{ fill: color }} />
      <Path d="M10 50L61.75 17.091L61.75 82.909L10 50Z" css={{ fill: color }} />
    </Svg>
  )
}
