import { Svg, Path, Rect } from "@proControl/lib/ui/svg"

export const LadenIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 109" fill="none">
      <Path d="M94 54.5L41.5 7.30162L41.5 101.698L94 54.5Z" css={{ fill: color }} />
      <Rect width="38" height="44" transform="matrix(-1 0 0 1 48 32)" css={{ fill: color }} />
    </Svg>
  )
}
