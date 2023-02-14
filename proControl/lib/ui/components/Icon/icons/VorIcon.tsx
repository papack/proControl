import { Svg, Path } from "@proControl/lib/ui/svg"

export const VorIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path d="M82 50L28.75 10.1628L28.75 89.8372L82 50Z" css={{ fill: color }} />
    </Svg>
  )
}
