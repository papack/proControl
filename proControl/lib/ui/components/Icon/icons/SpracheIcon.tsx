import { Svg, Path, Rect } from "@proControl/lib/ui/svg"

export const SpracheIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Rect x="17" y="8" width="7" height="79" rx="1" css={{ fill: color }} />
      <Path
        d="M26.5 11.5C47.9786 20.0959 60.5 3.50045 81.5 11.5V51.5C59 42.5 47 58 26.5 51.5V11.5Z"
        css={{ fill: color }}
      />
    </Svg>
  )
}
