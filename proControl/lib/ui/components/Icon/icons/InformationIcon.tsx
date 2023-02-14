import { Svg, Path } from "@proControl/lib/ui/svg"

export const InformationIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M95 50C95 74.8528 74.8528 95 50 95C25.1472 95 5 74.8528 5 50C5 25.1472 25.1472 5 50 5C74.8528 5 95 25.1472 95 50ZM55 34.5C55 37.5376 52.5376 40 49.5 40C46.4624 40 44 37.5376 44 34.5C44 31.4624 46.4624 29 49.5 29C52.5376 29 55 31.4624 55 34.5ZM54 44H43V46H47V70H43V71H57V70H54V46V45V44Z"
        css={{ fill: color }}
      />
    </Svg>
  )
}
