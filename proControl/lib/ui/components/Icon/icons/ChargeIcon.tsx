import { Svg, Rect } from "@proControl/lib/ui/svg"

export const ChargeIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Rect x="9" y="40" width="51" height="51" css={{ fill: color }} />
      <Rect x="26" y="24" width="50" height="13" css={{ fill: color }} />
      <Rect x="41" y="8" width="50" height="13" css={{ fill: color }} />
      <Rect x="63" y="24" width="13" height="50" css={{ fill: color }} />
      <Rect x="79" y="8" width="13" height="50" css={{ fill: color }} />
    </Svg>
  )
}
