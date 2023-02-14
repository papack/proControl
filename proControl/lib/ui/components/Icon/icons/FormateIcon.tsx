import { Svg, Path } from "@proControl/lib/ui/svg"

export const FormateIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M63.8093 8H22C20.8954 8 20 8.89543 20 10V91C20 92.1046 20.8954 93 22 93H80C81.1046 93 82 92.1046 82 91V26.4547L63.8093 8ZM61.4727 29.2501V13.1001L77.3916 29.2501H61.4727ZM69.4322 47.95H32.5674V53.05H69.4322V47.95ZM32.5674 61.5499H69.4322V66.6499H32.5674V61.5499ZM69.4322 75.15H32.5674V80.25H69.4322V75.15Z"
        css={{ fill: color }}
      />
    </Svg>
  )
}
