import { Svg, Rect } from "@proControl/lib/ui/svg"
import { LeftPartProps } from "./interfaces"

export const Leftpart = ({ stripeColor }: LeftPartProps) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 80 80" fill="none" preserveAspectRatio="none">
      <Rect x={0} y={0} height={40} width={80} css={{ fill: "$dark" }} />
      <Rect x={0} y={40} height={20} width={80} css={{ fill: stripeColor }} />
    </Svg>
  )
}
