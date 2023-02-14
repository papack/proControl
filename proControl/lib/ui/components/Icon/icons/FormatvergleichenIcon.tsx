import { Svg, Path, Rect } from "@proControl/lib/ui/svg"

export const FormatvergleichenIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M53.9775 93H85.9998C87.1044 93 87.9998 92.1046 87.9998 91V26.454L69.5333 8H53.9775V47.95H75.2414V53.05H53.9775V61.55H75.2414V66.65H53.9775V75.1499H75.2414V80.2499H53.9775V93ZM67.1608 13.1001V29.2501H83.3217L67.1608 13.1001Z"
        css={{ fill: color }}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.1034 13.1001V87.9002H48.8736V93.0002H16C14.8954 93.0002 14 92.1047 14 91.0002V91V87.9002V13.1001V13V10.0001C14 8.89553 14.8954 8.0001 16 8.0001H18.9682L19 8H19.1034V8.0001H48.8736V13.1001H19.1034Z"
        css={{ fill: color }}
      />
      <Rect x="27.6094" y="47.95" width="23.8161" height="5.1" css={{ fill: color }} />
      <Rect x="27.6094" y="61.55" width="23.8161" height="5.1" css={{ fill: color }} />
      <Rect x="27.6094" y="75.1499" width="23.8161" height="5.1" css={{ fill: color }} />
    </Svg>
  )
}
