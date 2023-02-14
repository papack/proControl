import { Svg, Path } from "@proControl/lib/ui/svg"

export const KoordinatenIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Path
        d="M75.0195 62L79.8047 69.6289L84.5898 62H87.666L81.377 71.8574L87.8164 81.9062H84.7129L79.8047 74.127L74.8965 81.9062H71.793L78.2324 71.8574L71.9434 62H75.0195Z"
        css={{ fill: color }}
      />
      <Path
        d="M59.2266 6L64.3945 15.9941L69.5762 6H72.5703L65.707 18.4688V25.9062H63.0684V18.4688L56.2051 6H59.2266Z"
        css={{ fill: color }}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48 7.90625L39 19.9062H45V44.9062H19.0455V38.9062L8 47.9062L19.0455 56.9062V50.9062H45V83.9062H39L48 95.9062L57 83.9062H51V50.9062H77.9545V56.9062L89 47.9062L77.9545 38.9062V44.9062H51V19.9062H57L48 7.90625Z"
        css={{ fill: color }}
      />
    </Svg>
  )
}
