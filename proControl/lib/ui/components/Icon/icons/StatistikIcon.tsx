import { Svg, Rect } from "@proControl/lib/ui/svg"

export const StatistikIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Rect x="7" y="7" width="7" height="88" css={{ fill: color }} />
      <Rect x="7" y="95" width="7" height="88" transform="rotate(-90 7 95)" css={{ fill: color }} />
      <Rect x="20" y="41" width="15" height="41" rx="2" css={{ fill: color }} />
      <Rect x="45" y="14" width="15" height="68" rx="2" css={{ fill: color }} />
      <Rect x="70" y="33" width="15" height="49" rx="2" css={{ fill: color }} />
    </Svg>
  )
}
