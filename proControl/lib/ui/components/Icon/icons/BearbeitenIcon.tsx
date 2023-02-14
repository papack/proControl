import { Svg, Path, Rect } from "@proControl/lib/ui/svg"

export const BearbeitenIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path
        d="M10.8044 87.9728L23.1931 60.3343L38.4429 75.5841L10.8044 87.9728Z"
        css={{ fill: color }}
      />
      <Rect
        x="92"
        y="22.9187"
        width="69.3529"
        height="22.5124"
        rx="2"
        transform="rotate(135 92 22.9187)"
        css={{ fill: color }}
      />
    </Svg>
  )
}
