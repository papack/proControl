import { Svg, Path, Rect } from "@proControl/lib/ui/svg"

export const ExportierenIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M85 65H94V84V93H85H15H6V84V65H15V84H85V65Z"
        css={{ fill: color }}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M63 32H77L50 6L22 32H36V56C36 57.1045 36.8955 58 38 58H61C62.1045 58 63 57.1045 63 56V32Z"
        css={{ fill: color }}
      />
      <Rect x="36" y="63" width="27" height="10" rx="2" css={{ fill: color }} />
    </Svg>
  )
}
