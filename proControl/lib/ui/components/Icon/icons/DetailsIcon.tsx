import { Svg, Rect } from "@proControl/lib/ui/svg"

export const DetailsIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Rect x="16" y="73" width="12" height="12" rx="2" css={{ fill: color }} />
      <Rect x="44" y="73" width="12" height="12" rx="2" css={{ fill: color }} />
      <Rect x="72" y="73" width="12" height="12" rx="2" css={{ fill: color }} />
    </Svg>
  )
}
