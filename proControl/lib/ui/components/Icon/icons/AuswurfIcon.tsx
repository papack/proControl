import { Svg, Path, Rect } from "@proControl/lib/ui/svg"

export const AuswurfIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Rect x="62" y="44" width="33" height="6" css={{ fill: color }} />
      <Rect x="5" y="11" width="90" height="6" css={{ fill: color }} />
      <Rect x="14" y="23" width="12" height="12" css={{ fill: color }} />
      <Rect x="5" y="41" width="27" height="6" css={{ fill: color }} />
      <Rect x="74" y="23" width="12" height="12" css={{ fill: color }} />
      <Rect
        x="67.8682"
        y="59"
        width="34.1403"
        height="8.299"
        rx="2"
        transform="rotate(45 67.8682 59)"
        css={{ fill: color }}
      />
      <Rect
        x="62"
        y="83.1409"
        width="34.1403"
        height="8.299"
        rx="2"
        transform="rotate(-45 62 83.1409)"
        css={{ fill: color }}
      />
      <Path d="M40.5 70.5L26 47L32 41.5L50 70.5H40.5Z" css={{ fill: color }} />
      <Path
        d="M54.4526 46.1952L40.8958 39.7425L55.6428 31.2283L54.4526 46.1952Z"
        css={{ fill: color }}
      />
      <Rect
        x="51.8308"
        y="35.4475"
        width="5.66086"
        height="7.6508"
        rx="1"
        transform="rotate(150 51.8308 35.4475)"
        css={{ fill: color }}
      />
    </Svg>
  )
}
