import { Svg, Path } from "@proControl/lib/ui/svg"

export const TestrunIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 93.6025L94.75 50.3013L10 7V93.6025ZM18 81.5452L78.75 50.8013L18 20.0574V81.5452Z"
        css={{ fill: color }}
      />
    </Svg>
  )
}
