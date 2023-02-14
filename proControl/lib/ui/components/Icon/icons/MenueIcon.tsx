import { Svg, Rect } from "@proControl/lib/ui/svg"

export const MenueIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Rect x="6" y="14" width="88" height="16" rx="3" css={{ fill: color }} />
      <Rect x="6" y="42" width="88" height="16" rx="3" css={{ fill: color }} />
      <Rect x="6" y="70" width="88" height="16" rx="3" css={{ fill: color }} />
    </Svg>
  )
}
