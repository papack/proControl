import { Svg, Rect } from "@proControl/lib/ui/svg"

export const ProduktiongestopptIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Rect x="19" y="16" width="18" height="70" rx="2" css={{ fill: color }} />
      <Rect x="62" y="16" width="18" height="70" rx="2" css={{ fill: color }} />
    </Svg>
  )
}
