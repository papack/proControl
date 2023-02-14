import { Svg, Rect } from "@proControl/lib/ui/svg"

export const BreadcrumbPfeilIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Rect
        x="37.4854"
        y="13"
        width="50"
        height="12"
        rx="6"
        transform="rotate(45 37.4854 13)"
        css={{ fill: color }}
      />
      <Rect
        x="29"
        y="75.2478"
        width="49.848"
        height="12"
        rx="6"
        transform="rotate(-45 29 75.2478)"
        css={{ fill: color }}
      />
    </Svg>
  )
}
