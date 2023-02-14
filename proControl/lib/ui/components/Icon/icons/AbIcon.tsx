import { Svg, Path } from "@proControl/lib/ui/svg"

export const AbIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path d="M95 27H5L54.0385 85.8462L95 27Z" css={{ fill: color }} />
    </Svg>
  )
}
