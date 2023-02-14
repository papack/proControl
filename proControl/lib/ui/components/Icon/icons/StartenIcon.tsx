import { Svg, Path } from "@proControl/lib/ui/svg"

export const StartenIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path d="M10 91V9L93 49.7684L10 91Z" css={{ fill: color }} />
    </Svg>
  )
}
