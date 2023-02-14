import { Svg, Path } from "@proControl/lib/ui/svg"

export const CornerIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path d="M 100 0 L 0 100 L 100 100 Z" css={{ fill: color }} />
    </Svg>
  )
}
