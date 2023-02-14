import { Svg, Path, Rect } from "@proControl/lib/ui/svg"

export const AuslaufIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path
        d="M97.5309 49.3827L62.3457 78.2502L62.3457 20.5152L97.5309 49.3827Z"
        css={{ fill: color }}
      />
      <Rect x="6.17284" y="35.8025" width="59.2593" height="27.1605" rx="1" css={{ fill: color }} />
    </Svg>
  )
}
