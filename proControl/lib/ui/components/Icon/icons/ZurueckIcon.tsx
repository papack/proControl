import { Svg, Path } from "@proControl/lib/ui/svg"

export const ZurueckIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path d="M18 50L71.25 10.1628V89.8372L18 50Z" css={{ fill: color }} />
    </Svg>
  )
}
