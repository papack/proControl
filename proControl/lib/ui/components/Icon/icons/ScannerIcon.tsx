import { Svg, Path, Rect } from "@proControl/lib/ui/svg"

export const ScannerIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path
        d="M49 35.0776L43 13.0776C59.908 12.7905 69.4135 13.1623 86.5 16.5776C96.2652 22.0497 96.1211 26.1407 86.5 35.0776V66.5776C86.4699 70.4909 85.1817 70.6346 83 71.0776C77.7291 72.8541 74.7704 73.2967 69.5 71.0776C72.8015 59.5496 72.4622 53.9993 69.5 45.0776C70.2193 39.8179 69.7288 37.449 66 35.0776H49Z"
        css={{ fill: color }}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 40.5776H6V41.5776V47.5776V54.5776H13V47.5776H19V40.5776Z"
        css={{ fill: color }}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47 40.5776H60V41.5776V47.5776V54.5776H53V47.5776H47V40.5776Z"
        css={{ fill: color }}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 88.5776H6V87.5776V81.5776V74.5776H13V81.5776H19V88.5776Z"
        css={{ fill: color }}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47 88.5776H60V87.5776V81.5776V74.5776H53V81.5776H47V88.5776Z"
        css={{ fill: color }}
      />
      <Rect x="16" y="50.5776" width="3" height="28" css={{ fill: color }} />
      <Rect x="22" y="50.5776" width="6" height="28" css={{ fill: color }} />
      <Rect x="31" y="50.5776" width="6" height="28" css={{ fill: color }} />
      <Rect x="40" y="50.5776" width="4" height="28" css={{ fill: color }} />
      <Rect x="47" y="50.5776" width="3" height="28" css={{ fill: color }} />
    </Svg>
  )
}
