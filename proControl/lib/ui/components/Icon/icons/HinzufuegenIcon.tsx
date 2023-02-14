import { Svg, Path } from "@proControl/lib/ui/svg"

export const HinzufuegenIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M42.873 94.6526C43.1943 94.8718 43.582 95 44 95H59C60.1045 95 61 94.1045 61 93V60H93C94.1045 60 95 59.1045 95 58V43C95 41.8955 94.1045 41 93 41H61V8C61 6.89551 60.1045 6 59 6H44C42.8955 6 42 6.89551 42 8V41H8C6.89551 41 6 41.8955 6 43V58C6 59.1045 6.89551 60 8 60H42V93C42 93.6868 42.3457 94.2925 42.873 94.6526Z"
        css={{ fill: color }}
      />
    </Svg>
  )
}
