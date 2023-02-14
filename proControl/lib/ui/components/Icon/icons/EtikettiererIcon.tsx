import { Svg, Path, Rect } from "@proControl/lib/ui/svg"

export const EtikettiererIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M66 26H15V57H66V26ZM63 29H18V54H63V29Z"
        css={{ fill: color }}
      />
      <Rect x="22" y="35" width="18" height="3" css={{ fill: color }} />
      <Rect x="22" y="41" width="25" height="3" css={{ fill: color }} />
      <Rect x="22" y="47" width="18" height="3" css={{ fill: color }} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M66 63H15V94H66V63ZM63 66H18V91H63V66Z"
        css={{ fill: color }}
      />
      <Rect x="22" y="72" width="18" height="3" css={{ fill: color }} />
      <Rect x="22" y="78" width="25" height="3" css={{ fill: color }} />
      <Rect x="22" y="84" width="18" height="3" css={{ fill: color }} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 6V19H66V6H63V16H18V6H15Z"
        css={{ fill: color }}
      />
      <Rect x="22" y="9" width="18" height="3" css={{ fill: color }} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M84 38H78V62.5H72L81.5 74.5L90.5 62.5H84V38Z"
        css={{ fill: color }}
      />
    </Svg>
  )
}
