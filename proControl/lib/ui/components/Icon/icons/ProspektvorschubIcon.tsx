import { Svg, Path } from "@proControl/lib/ui/svg"

export const ProspektvorschubIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M82 71.5264H64.5C62.0146 71.5264 60 73.541 60 76.0264C60 78.5117 62.0146 80.5264 64.5 80.5264H89.8037L88.0718 77.5264H65.5C64.6716 77.5264 64 76.8547 64 76.0264C64 75.198 64.6716 74.5264 65.5 74.5264H82V71.5264Z"
        css={{ fill: color }}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M73.5 12L60 21.5264L73.5 31.0527V24.5264H95V18.5264H73.5V12Z"
        css={{ fill: color }}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M64.1008 42.5264L51 55.6272V83.5264H7V52.5264H45.6155L60.4941 37.6477C60.7124 37.4294 60.9556 37.2522 61.2148 37.1152C61.7136 36.7454 62.3313 36.5264 63 36.5264H67C68.6567 36.5264 70 37.8696 70 39.5264C70 41.1831 68.6567 42.5264 67 42.5264H64.1008ZM13 58.5264H45V77.5264H13V58.5264Z"
        css={{ fill: color }}
      />
    </Svg>
  )
}
