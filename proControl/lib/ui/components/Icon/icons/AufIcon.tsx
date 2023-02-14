import { Svg, Path } from "@proControl/lib/ui/svg"

export const AufIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path d="M5 85.8462L95 85.8462L45.9615 27L5 85.8462Z" css={{ fill: color }} />
    </Svg>
  )
}
