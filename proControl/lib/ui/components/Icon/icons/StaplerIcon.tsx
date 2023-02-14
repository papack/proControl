import { Svg, Path, Rect } from "@proControl/lib/ui/svg"

export const StaplerIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Rect x="4" y="61" width="16" height="14" css={{ fill: color }} />
      <Rect x="30" y="61" width="16" height="14" css={{ fill: color }} />
      <Rect x="61" y="61" width="16" height="14" css={{ fill: color }} />
      <Rect x="61" y="37" width="16" height="14" css={{ fill: color }} />
      <Rect x="61" y="20" width="16" height="14" css={{ fill: color }} />
      <Rect x="80" y="61" width="16" height="14" css={{ fill: color }} />
      <Rect x="80" y="37" width="16" height="14" css={{ fill: color }} />
      <Rect x="80" y="20" width="16" height="14" css={{ fill: color }} />
      <Path d="M54 38H28L41 23L54 38Z" css={{ fill: color }} />
      <Rect x="37" y="35" width="9" height="20" rx="2" css={{ fill: color }} />
    </Svg>
  )
}
