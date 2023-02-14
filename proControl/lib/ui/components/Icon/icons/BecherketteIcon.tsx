import { Svg, Path, Rect, Circle } from "@proControl/lib/ui/svg"

export const BecherketteIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Circle cx="75" cy="68" r="6" css={{ fill: color }} />
      <Rect x="33" y="26" width="25" height="6" css={{ fill: color }} />
      <Path d="M69 29L57 38.5263V19.4737L69 29Z" css={{ fill: color }} />
      <Rect x="6" y="50" width="77" height="6" css={{ fill: color }} />
      <Rect x="18" y="14" width="6" height="38" rx="2" css={{ fill: color }} />
      <Rect x="78" y="14" width="6" height="38" rx="2" css={{ fill: color }} />
      <Rect x="87" y="60" width="6" height="26" css={{ fill: color }} />
      <Path
        d="M93 60C93 58.6868 92.7413 57.3864 92.2388 56.1732C91.7362 54.9599 90.9997 53.8575 90.0711 52.9289C89.1425 52.0003 88.0401 51.2638 86.8268 50.7612C85.6136 50.2587 84.3132 50 83 50L83 55.9908C83.5265 55.9908 84.0478 56.0945 84.5342 56.296C85.0207 56.4975 85.4626 56.7928 85.8349 57.1651C86.2072 57.5374 86.5025 57.9793 86.704 58.4658C86.9055 58.9522 87.0092 59.4735 87.0092 60H93Z"
        css={{ fill: color }}
      />
    </Svg>
  )
}
