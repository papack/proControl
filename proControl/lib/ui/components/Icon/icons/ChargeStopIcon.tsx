import { Svg, Rect } from "@proControl/lib/ui/svg"

export const ChargeStopIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Rect x="19" y="16" width="62" height="68" rx="2" css={{ fill: color }} />
    </Svg>
  )
}
