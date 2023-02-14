import { Svg, Path, Rect } from "@proControl/lib/ui/svg"

export const StapelbrueckenschubIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Rect x="73" y="32" width="17" height="10" css={{ fill: color }} />
      <Rect x="73" y="46" width="17" height="11" css={{ fill: color }} />
      <Rect x="73" y="60" width="17" height="11" css={{ fill: color }} />
      <Rect x="73" y="74" width="17" height="11" css={{ fill: color }} />
      <Rect x="59" y="40" width="9" height="38" rx="2" css={{ fill: color }} />
      <Rect x="33" y="54" width="31" height="9" rx="2" css={{ fill: color }} />
      <Rect
        x="15.6295"
        y="31.6504"
        width="36.0753"
        height="9.37562"
        rx="2"
        transform="rotate(45 15.6295 31.6504)"
        css={{ fill: color }}
      />
      <Rect x="53" y="17" width="26" height="6" rx="2" css={{ fill: color }} />
      <Path d="M89 20L76.25 28.6603V11.3397L89 20Z" css={{ fill: color }} />
    </Svg>
  )
}
