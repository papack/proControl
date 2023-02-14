import { Svg, Path, Rect, Circle } from "@proControl/lib/ui/svg"

export const BenutzerhinzufuegenIcon = ({ color = "currentColor" }) => {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 100 100" fill="none">
      <Circle cx="35.5824" cy="22.6019" r="16.6019" css={{ fill: color }} />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.1741 33.9612H17C10.3726 33.9612 5 39.3338 5 45.9612V66.0389C5 67.1434 5.89543 68.0389 7 68.0389H36.0194V60.3689C36.0194 57.6075 38.258 55.3689 41.0194 55.3689H57.4272V43.3301C57.4272 40.5687 59.6658 38.3301 62.4272 38.3301H63.4265C61.2255 35.662 57.8939 33.9612 54.165 33.9612H52.991C49.5161 40.2294 43.0213 44.4466 35.5825 44.4466C28.1438 44.4466 21.649 40.2294 18.1741 33.9612Z"
        css={{ fill: color }}
      />
      <Rect x="40.8252" y="59.301" width="54.1748" height="13.1068" rx="2" css={{ fill: color }} />
      <Rect
        x="61.7961"
        y="91.6311"
        width="49.8058"
        height="13.1068"
        rx="2"
        transform="rotate(-90 61.7961 91.6311)"
        css={{ fill: color }}
      />
    </Svg>
  )
}
