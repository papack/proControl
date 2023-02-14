import { Svg, Circle } from "@proControl/lib/ui/svg"

export const CircleIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Circle cx="50" cy="50" r="40" css={{ fill: color }} />
    </Svg>
  )
}
