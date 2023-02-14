import { Svg, Path, Rect } from "@proControl/lib/ui/svg"

export const ImportierenIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M39 20C37.8954 20 37 20.8954 37 22V46H22L50.5 74.5L78 46H62V22C62 20.8954 61.1046 20 60 20H39Z"
        css={{ fill: color }}
      />
      <Rect x="37" y="4" width="25" height="11" rx="2" css={{ fill: color }} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M85 68H94V87V96H85H15H6V87V68H15V87H85V68Z"
        css={{ fill: color }}
      />
    </Svg>
  )
}
