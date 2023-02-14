import { Svg, Path, Rect } from "@proControl/lib/ui/svg"

export const DruckerIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 28C8.23828 28 6 30.2385 6 33V60C6 62.7615 8.23828 65 11 65H18V47H81V65H89C91.7617 65 94 62.7615 94 60V33C94 30.2385 91.7617 28 89 28H11ZM69 35H75V41H69V35ZM87 35H81V41H87V35Z"
        css={{ fill: color }}
      />
      <Rect x="25" y="9" width="3" height="20" css={{ fill: color }} />
      <Rect x="25" y="53" width="3" height="35" css={{ fill: color }} />
      <Rect x="25" y="9" width="49" height="3" css={{ fill: color }} />
      <Rect x="25" y="53" width="49" height="3" css={{ fill: color }} />
      <Rect x="34" y="62" width="19" height="7" css={{ fill: color }} />
      <Rect x="25" y="85" width="49" height="3" css={{ fill: color }} />
      <Rect x="72" y="9" width="3" height="20" css={{ fill: color }} />
      <Rect x="72" y="53" width="3" height="35" css={{ fill: color }} />
    </Svg>
  )
}
