import { Svg, Rect } from "@proControl/lib/ui/svg"

export const SchließerIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Rect x="23.5396" y="27" width="54.6668" height="17.6409" rx="2" css={{ fill: color }} />
      <Rect x="23.5396" y="55.6948" width="54.6668" height="17.6409" rx="2" css={{ fill: color }} />
      <Rect x="3.75" y="47.7791" width="94" height="4.94737" rx="2" css={{ fill: color }} />
    </Svg>
  )
}
