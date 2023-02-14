import { Svg, Path, Rect } from "@proControl/lib/ui/svg"

export const ProduktuebersetzerIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Rect x="7" y="27.8333" width="55" height="11" css={{ fill: color }} />
      <Rect x="45.5" y="36.0833" width="6.41667" height="10.0833" rx="3" css={{ fill: color }} />
      <Rect x="17.0835" y="36.0833" width="6.41667" height="10.0833" rx="3" css={{ fill: color }} />
      <Rect x="37.25" y="44.3333" width="22" height="3.66667" rx="1.83333" css={{ fill: color }} />
      <Rect x="8.8335" y="44.3333" width="22" height="3.66667" rx="1.83333" css={{ fill: color }} />
      <Rect x="29.9165" y="4" width="7.33333" height="28.4167" rx="2" css={{ fill: color }} />
      <Rect x="22.5835" y="15" width="22" height="17.4167" rx="2" css={{ fill: color }} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M56 53H13V96H56V53ZM50 59H19V90H50V59Z"
        css={{ fill: color }}
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M83.3335 67L93.5002 76.5L83.3335 86V80H63V72H83.3335V67Z"
        css={{ fill: color }}
      />
    </Svg>
  )
}
