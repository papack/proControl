import { Svg, Path, Rect } from "@proControl/lib/ui/svg"

export const Zurueck1Icon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 109" fill="none">
      <Path d="M6 54.5L58.5 7.30162L58.5 101.698L6 54.5Z" css={{ fill: color }} />
      <Rect x="52" y="32" width="38" height="44" css={{ fill: color }} />
    </Svg>
  )
}
