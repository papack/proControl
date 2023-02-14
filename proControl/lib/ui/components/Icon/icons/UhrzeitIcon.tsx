import { Svg, Path, Rect } from "@proControl/lib/ui/svg"

export const UhrzeitIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50 93C73.7482 93 93 73.7482 93 50C93 26.2518 73.7482 7 50 7C26.2518 7 7 26.2518 7 50C7 73.7482 26.2518 93 50 93ZM49.5825 87.9903C70.3334 87.9903 87.1553 71.1684 87.1553 50.4175C87.1553 29.6666 70.3334 12.8447 49.5825 12.8447C28.8316 12.8447 12.0097 29.6666 12.0097 50.4175C12.0097 71.1684 28.8316 87.9903 49.5825 87.9903Z"
        css={{ fill: color }}
      />
      <Path d="M45 25H51V55H47C45.8954 55 45 54.1046 45 53V25Z" css={{ fill: color }} />
      <Rect
        x="45.7919"
        y="54.7546"
        width="5.84466"
        height="21.6208"
        transform="rotate(-50 45.7919 54.7546)"
        css={{ fill: color }}
      />
    </Svg>
  )
}
